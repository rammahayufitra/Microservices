from dataclasses import dataclass
from flask import Flask 

app = Flask(__name__)

@app.route('/data')
def home():
    data = { 'data' :['ramma','33','programmer']}
    return data

if __name__ == '__main__':
    app.run()