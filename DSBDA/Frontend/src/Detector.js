import { useState } from "react";
import axios from "axios";
import "./Detector.css";

function Detector() {
  const [formData, setFormData] = useState({
    statuses_count: "",
    followers_count: "",
    friends_count: "",
    favourites_count: "",
    listed_count: "",
    lang_code: "",
  });

  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    setError("");

    if (Object.values(formData).some((value) => value === "")) {
      setError("⚠️ Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const formattedData = Object.fromEntries(
        Object.entries(formData).map(([key, value]) => [key, Number(value)])
      );

      const response = await axios.post("http://127.0.0.1:8000/predict", formattedData, {
        headers: { "Content-Type": "application/json" },
      });

      setTimeout(() => {
        setResult(response.data.prediction);
        setLoading(false);
      }, 1200);
      
    } catch (error) {
      console.error("Error:", error);
      setError("❌ Error making prediction. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2> Fake Profile Detector</h2>
      <p className="subtext">Enter details below to check if a profile is real or fake.</p>

      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key} className="input-group">
            <label>{key.replace("_", " ")}</label>
            <input type="number" name={key} value={formData[key]} onChange={handleChange} required />
          </div>
        ))}
        <button type="submit" className="btn">Detect Profile</button>
      </form>

      {error && <p className="error-msg">{error}</p>}
      {loading && <div className="loader"></div>}
      {result && <p className="result fade-in">Prediction: <strong>{result}</strong></p>}
    </div>
  );
}

export default Detector;
