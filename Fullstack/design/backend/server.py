from flask import Flask 

app = Flask(__name__)

@app.route("/sarapan")
def members():
    return {"sarapan": ["Nasi Goreng", "Mie Goreng", "Nasi Kuning"]}

if __name__ == "__main__":
    app.run(debug=True)