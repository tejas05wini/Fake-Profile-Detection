import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>🚀 Welcome to <span>Fake Profile Detector</span></h1>
        <p>🔍 Detect fake social media accounts using AI-powered analysis.</p>
        <p>📊 Our system analyzes user activity, engagement, and metadata to determine authenticity.</p>
        <p>🛡️ Stay protected from scammers and impersonators with our real-time detection tool.</p>

        {/* ✅ Button that redirects to the Detector page */}
        <Link to="/detector" className="cta-button">Start Detection</Link>
      </div>
    </div>
  );
}

export default Home;
