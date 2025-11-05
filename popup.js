document.getElementById("analyzeBtn").addEventListener("click", async () => {
    const inputText = document.getElementById("inputText").value.trim();

    if (!inputText) return alert("Please enter text.");

    const resultDiv = document.getElementById("result");
    resultDiv.innerText = "Analyzing...";

    try {
        const res = await fetch("https://hate-speech-detector-kw9n.onrender.com/analyze", {
            method: "POST",
            body: JSON.stringify({ text: inputText }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        resultDiv.innerHTML = `
      <strong>${data.label}</strong><br/>
      <pre>${data.censored}</pre>
    `;
    } catch (err) {
        resultDiv.innerText = "Error: " + err.message;
    }
});
