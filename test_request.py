import requests

res = requests.post(
    "https://hate-speech-detector-je3x.onrender.com/analyze", json={"text": "you suck"})
print(res.status_code)
print(res.json())
