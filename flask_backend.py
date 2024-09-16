from flask import Flask, request, jsonify
import base64
from io import BytesIO
from PIL import Image
import cv2
import numpy as np

app = Flask(__name__)

@app.route('/analyze_image', methods=['POST'])
def analyze_image():
    data = request.json
    image_data = data['image']
    
    # Base64 string'den resmi çöz
    image_data = image_data.split(',')[1]
    image_bytes = base64.b64decode(image_data)
    image = Image.open(BytesIO(image_bytes))
    image_np = np.array(image)
    
    # OpenCV işlemleri ve çözüm algoritması
    # ...
    solution = [[0, 0], [1, 2], [2, 4]]  # Örnek çözüm, gerçek algoritma ile değiştirilecek

    return jsonify({'solution': solution})

if __name__ == '__main__':
    app.run(debug=True)
