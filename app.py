from flask import Flask, request, jsonify
import notebook_code   # your exported notebook file

app = Flask(__name__)

@app.route('/')
def home():
    return "Backend is running!"

@app.route('/api/process', methods=['POST'])
def process_data():
    data = request.json.get("data")
    result = notebook_code.process(data)  # call your notebook function
    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(debug=True)