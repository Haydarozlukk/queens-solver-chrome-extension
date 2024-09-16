// Oyun tahtasını yakala
function captureBoard() {
    const boardElement = document.querySelector('.queens-board-wrapper.game-board'); // Oyun tahtasını yakalayın
    if (boardElement) {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      canvas.width = boardElement.clientWidth;
      canvas.height = boardElement.clientHeight;
  
      // Board elementinin görüntüsünü çiz
      context.drawImage(boardElement, 0, 0);
  
      // Canvas'tan görüntü alın
      const boardScreenshot = canvas.toDataURL("image/png");
  
      // Görüntüyü çözüm için arka plana gönder
      chrome.runtime.sendMessage({ action: 'analyze', image: boardScreenshot });
    } else {
      console.error('Oyun tahtası bulunamadı');
    }
  }
  
  // Oyun sayfası yüklendiğinde ekran görüntüsünü al
  window.onload = function() {
    captureBoard();
  };
  