chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'analyze') {
      const image = message.image;
  
      // Python backend'e POST isteği gönder (Flask API olabilir)
      fetch('http://localhost:5000/analyze_image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: image })
      })
      .then(response => response.json())
      .then(data => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, { action: 'highlight', solution: data.solution });
        });
      })
      .catch(error => console.error('Error analyzing image:', error));
    }
  });
  