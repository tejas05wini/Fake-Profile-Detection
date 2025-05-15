import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>📢 About <span>Fake Profile Detector</span></h1>
        <p>🔍 In today's world, social media is full of fake profiles used for scams, impersonation, and fraud. Our AI-powered Fake Profile Detector helps users identify fake profiles based on their activity and metadata.</p>
        
        <h2>🛡️ Why Use This Tool?</h2>
        <ul>
          <li>🚀 **Fast & Accurate Detection** - Uses AI algorithms for instant results.</li>
          <li>🔎 **Analyzes User Behavior** - Detects fake accounts based on social activity.</li>
          <li>⚡ **Easy to Use** - Just enter the details and get instant results.</li>
          <li>🛑 **Stay Safe Online** - Protect yourself from online fraud and impersonation.</li>
        </ul>

        <h2>📊 How It Works?</h2>
        <p>Our AI model takes various profile details, such as the number of followers, activity levels, and engagement patterns, and predicts whether the profile is **Real** or **Fake**.</p>

        <a href="/detector" className="cta-button">Start Detection</a>
      </div>
    </div>
  );
}

export default About;
