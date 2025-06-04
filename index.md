---
layout: default
# title attribute for browser tab is handled by _layouts/default.html
---

<div class="hero-section">
    <div class="container"> 
        <h1 class="page-main-title">
            <span class="nova-icon">🚀</span> Nova: Your AI Data Engineer
        </h1>
        <h2 class="page-subtitle">
            Building complex cloud data pipelines is now as simple as talking. Nova translates your plain English directly into powerful, executable data solutions – no deep coding required.
        </h2>
    </div>
</div>

<div class="container"> 

    <div class="nova-demo-section">
        <h3>Try Nova Live! (NL-to-DSL Demo)</h3>
        <p>Experience the core of Nova. Describe a data pipeline in plain English and see Nova instantly generate the underlying configuration (DSL). Type "!new" to start fresh.</p>
        <div>
            <label for="nl-prompt-interactive">Your Instruction:</label>
            <textarea id="nl-prompt-interactive" placeholder="e.g., Create a pipeline 'web_analytics'. Add a Kafka source 'clicks' from topic 'site_clicks'. Filter for 'status == 200'. Sink results to a console named 'output'." rows="4"></textarea>
        </div>
        <div class="demo-buttons-container">
             <button id="send-button-interactive">Send to Nova</button>
             <button id="new-pipeline-button-interactive">New Pipeline (!new)</button>
        </div>
        <div id="status-message-interactive" class="status" style="display:none;"></div>
        <div>
            <label for="dsl-output-interactive">Nova's Generated DSL:</label>
            <pre id="dsl-output-interactive">// Nova DSL will appear here after you send an instruction...</pre>
        </div>
    </div>

    <div class="content-section">
        <h2>The Problem: Data Engineering is a Major Bottleneck</h2>
        <p>Businesses today are drowning in data but starving for insights. Why? Because building and managing the necessary data pipelines is often a slow, incredibly resource-intensive process. It demands highly specialized engineers skilled in a multitude of complex tools and coding languages, creating a significant barrier to agility and innovation.</p>
    </div>

    <div class="content-section">
        <h2>Our Solution: Nova – Data Engineering, Reimagined by AI</h2>
        <p><strong>Nova</strong> is an AI-powered ecosystem that fundamentally changes how data engineering is done. We're making it conversational. You simply describe your data processing needs in plain English, and Nova's intelligent AI agent handles the rest: designing the optimal pipeline, generating its own robust execution plan (the Nova DSL), and running it. </p>
        <p>This means **no deep coding in multiple languages is needed** from your team, freeing them to focus on data insights, not infrastructure wrestling.</p>
    </div>

    <div class="content-section">
        <h2>How Nova Works: Simple English to Powerful Pipelines</h2>
        <ol style="list-style-type: decimal; padding-left: 20px; font-size: 1.05em; line-height: 1.8;">
            <li style="margin-bottom: 10px;"><strong>You Speak:</strong> Describe your data requirements conversationally (e.g., "Read user events from Kafka, filter for purchases, aggregate daily, and load to BigQuery").</li>
            <li style="margin-bottom: 10px;"><strong>Nova Understands & Builds:</strong> Our AI Agent interprets your intent, designs the pipeline, and automatically generates the precise configuration in Nova's powerful internal language (DSL).</li>
            <li style="margin-bottom: 10px;"><strong>Nova Executes:</strong> The Nova Runtime Engine takes this DSL and orchestrates the entire data flow, connecting to your sources (like Kafka, S3), performing transformations (filtering, windowing, aggregations), and delivering data to your chosen destinations (like PostgreSQL, BigQuery, S3).</li>
        </ol>
    </div>

    <div class="content-section">
        <h2>Why Nova? Our Edge</h2>
        <ul>
            <li><span class="capability-icon">💡</span> <strong>Truly AI-Native:</strong> Unlike tools that just add AI features, Nova's AI *is* the core data engineer, handling understanding, design, and code generation.</li>
            <li><span class="capability-icon">💬</span> <strong>Conversational Simplicity:</strong> Radically lowers the barrier to entry. If you can describe it, Nova can build it.</li>
            <li><span class="capability-icon">⚡</span> <strong>Speed & Agility:</strong> Develop and deploy complex pipelines in hours or days, not weeks or months. Iterate rapidly based on business needs.</li>
            <li><span class="capability-icon">🛠️</span> <strong>Unified Platform (Vision):</strong> Aims to consolidate a fragmented toolchain into one intelligent, self-managing ecosystem.</li>
            <li><span class="capability-icon">💰</span> <strong>Cost Efficiency:</strong> Significantly reduces the need for large, specialized data engineering teams and cuts down development overhead.</li>
        </ul>
    </div>

    <div class="content-section">
        <h2>Proof: Our MVP is Live and Delivering!</h2>
        <p class="video-description">
            Nova isn't just an idea – the core technology is built and working. This short (2.5 min) video demonstrates Nova building a real data pipeline from S3 to Google BigQuery, driven entirely by plain English. You'll see data ingestion, filtering, daily aggregations, and the final results landing in a live BigQuery table.
        </p>
        <div class="demo-video-container">
          <video width="720" height="405" controls poster="{{ '/assets/images/video_poster_placeholder.jpg' | relative_url }}"> 
            <source src="{{ '/assets/videos/nova_demo_short.mp4' | relative_url }}" type="video/mp4">
            Your browser does not support the video tag. You can 
            <a href="{{ '/assets/videos/nova_demo_short.mp4' | relative_url }}" download>download the video</a> instead.
          </video>
        </div>
        <div class="full-demo-link-container">
            <p style="margin-bottom: 10px;">For a more comprehensive look, including real-time Kafka stream processing to S3 archives:</p>
            <a href="https://www.youtube.com/watch?v=ktWkDRIpRs4" target="_blank" rel="noopener noreferrer" class="full-demo-link">Watch the Full 10-Minute Demo on YouTube</a>
        </div>
        <p style="margin-top: 20px;">These demos showcase Nova's current ability to handle key cloud services and common data transformations, proving the viability of our AI-driven approach.</p>
    </div>
    
    <div class="content-section">
        <h2>Market Opportunity: A Revolution in Data Handling</h2>
        <p>The demand for effective data engineering is immense and growing daily across all industries. However, businesses are consistently bottlenecked by the current complexity and cost. Nova is positioned to unlock vast productivity gains by making data infrastructure accessible and manageable through AI, tapping into a multi-billion dollar market ripe for disruption.</p>
    </div>

    <div class="content-section">
        <h2>Our Vision: The Autonomous AI Data Engineer</h2>
        <p>Today's functional MVP is just the beginning. We are building Nova to become a fully autonomous system – an AI that not only builds pipelines from conversation but also intelligently manages, optimizes, secures, and evolves your entire data infrastructure. Imagine a data ecosystem that learns from your needs and proactively adapts, ensuring optimal performance and reliability with minimal human intervention.</p>
    </div>

</div> <div class="cta-section-wrapper"> 
    <div class="container cta-section"> 
        <h2>Invest in the Future of Data Engineering</h2>
        <p style="font-size: 1.1em; margin-bottom: 25px;">
            Nova has demonstrated its core, transformative technology. We are now seeking **$5,000 in pre-seed funding** to achieve our next critical milestones: further enhancing Nova's core AI capabilities, expanding our library of essential data connectors, and initiating pilot programs with early-adopter businesses.
        </p>
        <p style="margin-bottom: 30px;">
            <a href="mailto:info.nova.aiagent@gmail.com?subject=Nova%20Investment%20Inquiry%20&%20Demo%20Request" class="cta-button">Discuss Investment & Schedule a Demo</a>
        </p>
        <div class="contact-details">
             <p>Or reach out directly to explore this opportunity:</p>
             <p>Email: <a href="mailto:info.nova.aiagent@gmail.com">info.nova.aiagent@gmail.com</a></p>
             <p>Phone: <a href="tel:+254791899276">+254 791 899276</a></p>
        </div>
    </div>
</div>
