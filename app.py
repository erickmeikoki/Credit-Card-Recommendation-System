
from flask import Flask, send_from_directory, request, session, jsonify
from flask_session import Session
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24)
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

@app.route('/')
def home():
    return send_from_directory('.', 'index.html')

@app.route('/save-spending', methods=['POST'])
def save_spending():
    session['spending_data'] = request.json
    return jsonify({"status": "success"})

@app.route('/get-spending')
def get_spending():
    return jsonify(session.get('spending_data', {}))

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('.', path)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
