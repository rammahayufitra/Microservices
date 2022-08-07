from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    user = [
            { 'nama': 'ramma', 'umur': '30','pekerjaan': 'ai engineer'},
            { 'nama': 'hayu', 'umur': '31','pekerjaan': 'frontend engineer'},
            { 'nama': 'ramma', 'umur': '32','pekerjaan': 'backend engineer'},
            { 'nama': 'kirana', 'umur': '34','pekerjaan': 'Main'}
        ]
    return render_template("index.html", user=user)

if __name__ == '__main__':
    app.run()