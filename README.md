# TrueLens

**AI-Powered Fake News and Political Bias Detection**

A browser extension that analyzes news articles in real-time to detect misinformation, identify political bias, and verify claims against trusted fact-checking sources.

---

## Model Architecture
<img width="1224" height="471" alt="TruLens" src="https://github.com/user-attachments/assets/a25b74ea-a21f-41ee-abe9-e4a5f81aa701" />

---

## Overview

TrueLens is a full-stack application consisting of three components:

- **Browser Extension** - Chrome extension built with React that extracts article content and displays analysis results
- **Node.js Backend** - Express server that handles API requests and coordinates between the extension and ML service
- **Python ML Service** - FastAPI server running machine learning models for text analysis

---

## Features

- Real-time credibility scoring for news articles
- Political bias detection (left, center, right)
- Automatic claim extraction from article text
- Fact-checking against Google Fact Check API
- Privacy-focused design with no data collection

---

## Tech Stack

**Extension**
- React 18
- Vite
- Tailwind CSS
- Chrome Manifest V3

**Backend**
- Node.js
- Express 5

**ML Service**
- Python 3.10+
- FastAPI
- spaCy (en_core_web_sm)
- Transformers (RoBERTa, BART-MNLI)
- PyTorch

---

## Installation

### Prerequisites

- Node.js v18+
- Python 3.10+
- Chrome browser

### Clone the Repository

```bash
git clone https://github.com/vaijaaaaa/TrueLens.git
cd TrueLens
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend runs on `http://localhost:5000`

### ML Service Setup

```bash
cd ml-service
python -m venv venv
venv\Scripts\activate  # On Windows
pip install -r requirements.txt
python -m spacy download en_core_web_sm
uvicorn app.main:app --reload --port 8000
```

The ML service runs on `http://localhost:8000`

### Extension Setup

```bash
cd extension
npm install
npm run build
```

Then load the extension in Chrome:

1. Open `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `extension/dist` folder

---

## Usage

1. Start the backend server
2. Start the ML service
3. Navigate to any news article
4. Click the TrueLens extension icon
5. View the analysis results including credibility score, bias detection, and fact-checks

---

## Project Structure

```
TrueLens/
├── backend/           # Node.js Express server
│   └── src/
│       └── index.js
├── ml-service/        # Python FastAPI ML service
│   └── app/
│       ├── main.py
│       └── models/
├── extension/         # Chrome extension
│   └── src/
│       ├── popup/
│       └── content.js
└── frontend/          # Landing page website
    └── src/
        └── Components/
```

---

## API Endpoints

**Backend**

- `POST /analyze` - Analyze article text for fake news and bias

**ML Service**

- `POST /ml` - Process text through ML models
- `GET /health` - Health check endpoint

---

## License

MIT License

---

## Author

Built by [vaijaaaaa](https://github.com/vaijaaaaa)
