---
layout: default
# title attribute for browser tab is handled by _layouts/default.html
---

<div class="hero-section">
    <div class="container"> 
        <h1 class="page-main-title">
            <span class="nova-icon">🚀</span> Nova Is Your AI Data Engineer
        </h1>
        <h2 class="page-subtitle">
            Building complex cloud data pipelines is now as simple as talking. Nova translates your plain English directly into powerful, executable data solutions – no deep coding required.
        </h2>
    </div>
</div>

<div class="container"> 

    <div class="nova-demo-section">
        <h3>Try Nova Live! (NL-to-DSL Demo)</h3>
        <p>Experience Nova's core intelligence. Describe a data pipeline component, and see Nova instantly generate the underlying configuration (its native DSL). Type "!new" to start fresh.</p>
        <div>
            <label for="nl-prompt-interactive">Your Instruction:</label>
            <textarea id="nl-prompt-interactive" placeholder="e.g., Create pipeline 'my_flow'. Add Kafka source 'topic_in'. Filter errors. Sink to S3." rows="3"></textarea>
        </div>
        <div class="demo-buttons-container">
             <button id="send-button-interactive">Send to Nova</button>
             <button id="new-pipeline-button-interactive">New Pipeline (!new)</button>
        </div>
        <div id="status-message-interactive" class="status" style="display:none;"></div>
        <div>
            <label for="dsl-output-interactive">Nova's Generated DSL:</label>
            <pre id="dsl-output-interactive">// Nova DSL will appear here...</pre>
        </div>
    </div>

    <div class="content-section">
        <h2>The Data Engineering Bottleneck</h2>
        <p>Businesses today are rich in data but often struggle with the immense complexity of building and managing the pipelines needed to extract value. Traditional data engineering is slow, requires deep expertise across a myriad of tools and languages (Python, SQL, Java, Kafka, Spark, Airflow, DBT, Kubernetes), and is a major drain on resources, delaying critical insights.</p>
    </div>

    <div class="content-section">
        <h2>Nova: The AI-Native Data Engineering Ecosystem</h2>
        <p><strong>Nova</strong> is our answer. It's an **AI-first data engineering ecosystem** where the AI itself is the primary data engineer. You communicate your needs in natural language, and Nova takes over.</p>
        <p>Our revolutionary concept is simple yet powerful:</p>
        <ul>
            <li><span class="capability-icon">💬</span> **Conversational & Code-Free:** No human coding is required. Just plain English instructions.</li>
            <li><span class="capability-icon">🧠</span> **AI as the Engine:** Nova's AI understands data engineering natively, translating your intent into its own optimized language (Nova DSL) and then into executable pipelines.</li>
            <li><span class="capability-icon">🌐</span> **Unified System:** Our vision is for Nova to become the single, intelligent system that handles all aspects of data engineering, replacing the current fragmented and complex toolchains.</li>
        </ul>
    </div>

    <div class="content-section">
        <h2>What Nova's MVP Achieves Today</h2>
        <p>The core of this vision is already functional and proven. Our current MVP demonstrates Nova's ability to:</p>
        <ul>
            <li><span class="capability-icon">🗣️</span> Understand iterative, conversational data pipeline requirements in English.</li>
            <li><span class="capability-icon">✍️</span> Automatically generate precise pipeline configurations in the Nova DSL.</li>
            <li><span class="capability-icon">🚀</span> Execute these pipelines end-to-end, seamlessly integrating with:
                <ul>
                    <li><strong>Sources:</strong> Kafka, Amazon S3 (CSV, JSONL).</li>
                    <li><strong>Transformations:</strong> Filtering, tumbling & sliding windows, aggregations (sum, count, distinct counts).</li>
                    <li><strong>Sinks:</strong> PostgreSQL, Google BigQuery (live!), Amazon S3, local CSV files, and console output.</li>
                </ul>
            </li>
        </ul>
        <p>This means Nova can already handle significant real-world ETL and streaming scenarios, turning ideas into operational cloud data solutions in minutes.</p>
    </div>

    <div class="content-section">
        <h2>Proof in Action: Nova Live!</h2>
        <p class="video-description">
            Watch how Nova transforms plain English into a functional S3-to-BigQuery data pipeline in under 3 minutes! This demo showcases reading CSV data from S3, performing daily aggregations, and loading results directly into Google BigQuery.
        </p>
        <div class="demo-video-container">
          <video width="720" height="405" controls poster="{{ '/assets/images/video_poster_placeholder.jpg' | relative_url }}"> 
            <source src="{{ '/assets/videos/nova_demo_short.mp4' | relative_url }}" type="video/mp4">
            Your browser does not support the video tag. You can 
            <a href="{{ '/assets/videos/nova_demo_short.mp4' | relative_url }}" download>download the video</a> instead.
          </video>
        </div>
        <div class="full-demo-link-container">
            <p style="margin-bottom: 10px;">For a more comprehensive look at Nova's capabilities, including live Kafka-to-S3 processing:</p>
            <a href="https://www.youtube.com/watch?v=ktWkDRIpRs4" target="_blank" rel="noopener noreferrer" class="full-demo-link">Watch the Full 10-Minute Demo on YouTube</a>
        </div>
        <p style="margin-top: 20px;">These demos showcase Nova's current ability to handle key cloud services and common data transformations, proving the viability of our AI-driven approach.</p>
    </div>
    
    <div class="content-section">
        <h2>The Complete Nova Vision: Beyond Pipelines</h2>
        <p>While today's MVP focuses on core pipeline creation and execution, the full Nova vision (as outlined in our plan) encompasses an entire self-managing data ecosystem:</p>
        <ul>
            <li><span class="capability-icon">🤖</span> **The Nova Brain:** An advanced AI core with deep data engineering expertise, capable of complex reasoning, architectural pattern recognition, and multi-objective optimization (performance, cost, reliability).</li>
            <li><span class="capability-icon">🛠️</span> **Self-Managing Infrastructure:** Nova will autonomously handle deployment, scaling (e.g., on Kubernetes), monitoring, and even self-healing of your data infrastructure in the cloud.</li>
            <li><span class="capability-icon">📈</span> **Continuous Learning & Optimization:** Nova is designed to learn from every interaction, system performance, and aggregated industry patterns to continuously improve its suggestions and the efficiency of your pipelines.</li>
            <li><span class="capability-icon">🧩</span> **Extensible Ecosystem:** A rich registry of connectors, pre-built templates, and ML models, allowing Nova to adapt to virtually any data source or advanced analytical need.</li>
        </ul>
        <p>We are building the ultimate AI data engineering partner that understands your business needs and materializes them into resilient, efficient, production-ready data platforms – abstracting away the underlying complexity entirely.</p>
    </div>

</div> <div class="cta-section-wrapper"> 
    <div class="container cta-section"> 
        <h2>Invest in the Future of Data Engineering</h2>
        <p style="font-size: 1.1em; margin-bottom: 25px;">
            Nova has demonstrated its core, transformative technology. We are currently seeking **$5,000 in pre-seed funding** to achieve our next critical milestones: further enhancing Nova's core AI reasoning, expanding our library of essential data connectors, and initiating pilot programs with early-adopter businesses.
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
