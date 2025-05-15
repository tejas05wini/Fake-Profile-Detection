from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import pandas as pd
from pydantic import BaseModel

# ✅ Initialize FastAPI
app = FastAPI()

# ✅ Enable CORS (Allows frontend to call API without issues)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ✅ Allows requests from any frontend
    allow_credentials=True,
    allow_methods=["*"],  # ✅ Allows GET, POST, etc.
    allow_headers=["*"],  # ✅ Allows all headers
)

# ✅ Load trained model & scaler
try:
    svm_model = joblib.load("fake_profile_svm_model.pkl")  # ✅ Ensure this file exists
    scaler = joblib.load("scaler.pkl")  # ✅ Ensure this file exists
    print("✅ Model & Scaler loaded successfully!")
except Exception as e:
    print(f"❌ Error loading model: {e}")

# ✅ Define input data model
FEATURE_COLUMNS = ['statuses_count', 'followers_count', 'friends_count', 'favourites_count', 'listed_count', 'lang_code']

class ProfileInput(BaseModel):
    statuses_count: int
    followers_count: int
    friends_count: int
    favourites_count: int
    listed_count: int
    lang_code: int

# ✅ Prediction API Endpoint
@app.post("/predict")
async def predict_profile(data: ProfileInput):
    try:
        # ✅ Convert input data into DataFrame
        input_data = pd.DataFrame([data.dict()])[FEATURE_COLUMNS]
        
        # ✅ Scale the input data
        input_scaled = scaler.transform(input_data)

        # ✅ Make prediction
        prediction = svm_model.predict(input_scaled)[0]
        
        # ✅ Return Prediction
        return {"prediction": "Genuine" if prediction == 1 else "Fake"}
    
    except Exception as e:
        return {"error": str(e)}

# ✅ Run API
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)
