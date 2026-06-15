# 🛡️ Hate & Offensive Speech Detector

A Machine Learning-based application that detects **hate speech**, **offensive language**, and **clean text** in user input. The system also automatically censors offensive words and provides a REST API that can be integrated with browser extensions or other applications.

## 📌 Features

* Detects:

  * 🚫 Hate Speech
  * ⚠️ Offensive Language
  * ✅ Clean Content
* Automatically censors offensive words.
* Interactive Streamlit web interface.
* Flask REST API for external integrations.
* CORS enabled for browser extensions.
* Uses a trained Machine Learning model and TF-IDF vectorizer.

---

## 🏗️ Project Architecture

```text
User Input
     │
     ▼
TF-IDF Vectorizer
     │
     ▼
Machine Learning Model
     │
     ▼
Classification Result
     │
     ▼
Censorship Module
     │
     ▼
Output (Label + Censored Text)
```

---

## 📂 Project Structure

```text
project/
│
├── app.py
├── model.pkl
├── vectorizer.pkl
├── requirements.txt
└── README.md
```

---

## ⚙️ Technologies Used

* Python
* Streamlit
* Flask
* Scikit-learn
* Joblib
* Regular Expressions (Regex)
* Flask-CORS

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/hate-speech-detector.git
cd hate-speech-detector
```

### 2. Create Virtual Environment

```bash
python -m venv venv
```

Activate the environment:

**Windows**

```bash
venv\Scripts\activate
```

**Linux/Mac**

```bash
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## ▶️ Running the Application

Start the Streamlit application:

```bash
streamlit run app.py
```

The application will be available at:

```text
http://localhost:8501
```

The Flask API will run simultaneously on:

```text
http://localhost:8501/analyze
```

---

## 📡 API Usage

### Endpoint

```http
POST /analyze
```

### Request Body

```json
{
  "text": "You are stupid"
}
```

### Response

```json
{
  "label": "⚠️ Offensive Language",
  "censored": "You are ******"
}
```

---

## 🔍 How It Works

### Step 1: Text Vectorization

Input text is transformed using a pre-trained TF-IDF vectorizer.

### Step 2: Classification

The trained machine learning model predicts one of the following classes:

| Label | Meaning            |
| ----- | ------------------ |
| 0     | Hate Speech        |
| 1     | Offensive Language |
| 2     | Clean Text         |

### Step 3: Offensive Word Detection

The application checks for predefined offensive terms:

```python
['bitch', 'shit', 'hoe', 'fuck',
 'damn', 'tranny', 'slut', 'nigga']
```

### Step 4: Automatic Censorship

Detected offensive words are replaced with asterisks (*).

Example:

```text
Original:
You are a bitch

Censored:
You are a *****
```

---

## 🎯 Sample Outputs

### Hate Speech

```text
Input:
I hate all people from that group

Output:
🚫 Hate Speech
```

### Offensive Language

```text
Input:
You are a bitch

Output:
⚠️ Offensive Language
You are a *****
```

### Clean Text

```text
Input:
Have a great day!

Output:
✅ Clean
```

---

## 📊 Future Enhancements

* Deep Learning Models (LSTM, BERT)
* Multilingual Hate Speech Detection
* Real-Time Social Media Monitoring
* Custom Offensive Word Dictionary
* User Authentication
* Dashboard Analytics
* Chrome Extension Integration

---

## 👨‍💻 Author

**Swaraj Nikam**

B.Tech Student | AI & Data Science Enthusiast

---

## 📜 License

This project is licensed under the MIT License.

Feel free to use, modify, and distribute this project for educational and research purposes.
