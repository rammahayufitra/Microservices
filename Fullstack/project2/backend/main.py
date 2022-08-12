from flask import Flask 

app = Flask(__name__)

@app.route('/home')
def home():
    data = {"nama":"ramma hayu fitra saleh","usia":"34", "pekerjaan":"software engineer"}
    return data

if __name__ == '__main__':
    app.run()