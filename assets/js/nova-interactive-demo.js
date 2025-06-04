document.addEventListener('DOMContentLoaded', () => {
    const nlPromptInput = document.getElementById('nl-prompt-interactive');
    const sendButton = document.getElementById('send-button-interactive');
    const newPipelineButton = document.getElementById('new-pipeline-button-interactive');
    const dslOutputArea = document.getElementById('dsl-output-interactive');
    const statusMessageDiv = document.getElementById('status-message-interactive');

    let currentDslDraft = null; 
    // **** THIS IS THE IMPORTANT UPDATE ****
    const backendUrl = 'https://ChairKima1.pythonanywhere.com/generate-dsl'; // Use your live backend URL

    function displayStatus(message, isError = false) {
        if (statusMessageDiv) {
            statusMessageDiv.textContent = message;
            statusMessageDiv.className = 'status ' + (isError ? 'error' : 'success');
            statusMessageDiv.style.display = 'block';
        }
    }

    function clearStatus() {
        if (statusMessageDiv) {
            statusMessageDiv.textContent = '';
            statusMessageDiv.style.display = 'none';
        }
    }

    async function sendPromptToNova(nlInstruction) {
        clearStatus();
        if (!nlPromptInput || !sendButton || !dslOutputArea) {
            console.error("One or more HTML elements for the demo are missing! Check IDs: nl-prompt-interactive, send-button-interactive, dsl-output-interactive");
            displayStatus("Error: Webpage elements missing for demo. Check console.", true);
            return;
        }

        sendButton.disabled = true;
        sendButton.textContent = 'Nova is thinking...';

        try {
            const payload = {
                nl_instruction: nlInstruction
            };
            if (currentDslDraft && nlInstruction.trim().toLowerCase() !== '!new') { 
                payload.current_dsl_draft = currentDslDraft;
            }

            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                dslOutputArea.textContent = data.generated_dsl || "// Nova returned an empty DSL.";
                currentDslDraft = data.current_dsl_draft_for_next_turn; 
                if (nlInstruction.trim().toLowerCase() === "!new") {
                     displayStatus("New pipeline session started.", false);
                }
            } else {
                dslOutputArea.textContent = `// Error from Nova: ${data.error || 'Unknown error'}`;
                displayStatus(`Error: ${data.error || response.statusText}`, true);
            }
        } catch (error) {
            console.error('Error sending prompt to Nova:', error);
            dslOutputArea.textContent = `// Network error or backend issue: ${error.message}`;
            displayStatus(`Network error or backend issue: ${error.message}. Is the Flask backend deployed and reachable?`, true);
        } finally {
            sendButton.disabled = false;
            sendButton.textContent = 'Send to Nova';
        }
    }

    if (sendButton) {
        sendButton.addEventListener('click', () => {
            const nlInstruction = nlPromptInput.value.trim();
            if (nlInstruction) {
                sendPromptToNova(nlInstruction);
            } else {
                displayStatus("Please enter an instruction for Nova.", true);
            }
        });
    }

    if (newPipelineButton) {
        newPipelineButton.addEventListener('click', () => {
            if(nlPromptInput) nlPromptInput.value = ''; 
            currentDslDraft = null; 
            sendPromptToNova("!new"); 
            if(dslOutputArea) dslOutputArea.textContent = "// New pipeline session started. Describe your pipeline.";
        });
    }

    if (nlPromptInput) {
        nlPromptInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter' && !e.shiftKey) { 
                e.preventDefault(); 
                if (sendButton) sendButton.click();
            }
        });
    } else {
        console.error("NL Prompt input element not found!");
    }
});
