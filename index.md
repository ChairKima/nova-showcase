---
layout: default
---

<div class="hero-section">
    <div class="container"> 
        <h1 class="page-main-title">
            <span class="nova-icon">🚀</span> Nova Your AI Data Engineer
        </h1>
        <h2 class="page-subtitle">
            Build Cloud Data Pipelines with Plain English. Stop wrestling with code and multiple tools. Describe your data needs in simple terms, and Nova's AI intelligently designs, builds, and runs your entire data pipeline.
        </h2>
    </div>
</div>

<div class="container"> 

    <div class="nova-demo-section">
        <h3>Try Nova Live! (NL-to-DSL Demo)</h3>
        <p>Describe your data pipeline in plain English. Type "!new" to start a fresh pipeline, or iteratively add to the current one.</p>

        <div>
            <label for="nl-prompt-interactive">Your Instruction:</label>
            <textarea id="nl-prompt-interactive" placeholder="e.g., Create pipeline 'my_flow'. Add Kafka source 'topic_in'. Filter errors. Sink to S3." rows="4"></textarea>
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
        <h2>The Data Engineering Challenge</h2>
        <p>Building and managing data pipelines today is often a slow, resource-intensive endeavor, demanding deep expertise across numerous tools and coding languages. This inherent friction frequently stifles innovation and delays access to critical business insights.</p>
    </div>

    <div class="content-section">
        <h2>Introducing Nova: Data Engineering, Reimagined</h2>
        <p><strong>Nova</strong> is an AI-powered ecosystem designed to make data engineering as straightforward as a conversation. You describe your data processing needs in plain English; Nova intelligently translates this into its own robust execution plans (the Nova DSL) and handles the underlying complexities. <strong>No deep coding in multiple languages is required.</strong></p>
        <p>Our vision is an AI that acts as your expert data engineer, understanding your business goals and materializing them into production-ready data platforms, efficiently and reliably.</p>
    </div>

    <div class="content-section">
        <h2>Core Capabilities (Proven in MVP)</h2>
        <ul>
            <li><span class="capability-icon">💬</span> <strong>Natural Language Interface:</strong> Build and modify data pipelines through simple, conversational English using our interactive CLI (and this web demo for DSL generation).</li>
            <li><span class="capability-icon">✨</span> <strong>AI-Driven DSL Generation:</strong> Nova's AI (leveraging advanced LLMs) automatically creates optimized pipeline configurations in its powerful, human-readable Nova DSL.</li>
            <li><span class="capability-icon">☁️</span> <strong>Cloud & Streaming Ready:</strong> Seamlessly processes data from sources like Kafka and Amazon S3, delivering to destinations including PostgreSQL and Google BigQuery.</li>
            <li><span class="capability-icon">🔧</span> <strong>Key Transformations:</strong> Effortlessly handles filtering, time-based windowing (both tumbling & sliding), and common aggregations (sum, count, distinct counts).</li>
        </ul>
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
            <p style="margin-bottom: 10px;">For a more in-depth look at Nova's capabilities, including Kafka integration and additional features:</p>
            <a href="https://www.youtube.com/watch?v=ktWkDRIpRs4" target="_blank" rel="noopener noreferrer" class="full-demo-link">Watch the Full 10-Minute Demo on YouTube</a>
        </div>
    </div>

    <div class="content-section">
        <h2>The Vision: The Autonomous AI Data Engineer</h2>
        <p>Today's MVP is a significant first step. We are building Nova to become a fully autonomous system that not only builds but also intelligently manages, optimizes, and evolves your entire data infrastructure based on your ongoing needs and feedback, truly acting as the ultimate AI data engineering partner.</p>
    </div>

</div> <div class="cta-section-wrapper"> 
    <div class="container cta-section"> 
        <h2>Let's Build the Future of Data Together</h2>
        <p style="font-size: 1.1em; margin-bottom: 25px;">
            Nova has proven its core technology and is poised to transform the data engineering landscape. We are currently seeking seed funding and strategic partners to accelerate development, expand our capabilities, and bring Nova to market.
        </p>
        <p style="margin-bottom: 30px;">
            <a href="mailto:info.nova.aiagent@gmail.com?subject=Nova%20Inquiry%20and%20Demo%20Request" class="cta-button">Schedule a Demo or Learn More</a>
        </p>
        <div class="contact-details">
             <p>Or reach out directly:</p>
             <p>Email: <a href="mailto:info.nova.aiagent@gmail.com">info.nova.aiagent@gmail.com</a></p>
             <p>Phone: <a href="tel:+254791899276">+254 791 899276</a></p>
        </div>
    </div>
</div>
