chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "checkHateSpeech",
        title: "Check for Hate Speech",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(async (info) => {
    if (info.menuItemId === "checkHateSpeech") {
        const text = info.selectionText;

        const res = await fetch("https://YOUR-RENDER-URL.onrender.com/analyze", {
            method: "POST",
            body: JSON.stringify({ text }),
            headers: { "Content-Type": "application/json" }
        });

        const data = await res.json();
        alert(`Label: ${data.label}\nCensored: ${data.censored}`);
    }
});
