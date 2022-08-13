<<<<<<< HEAD
from shutil import disk_usage
from flask import Flask, render_template 
import psutil

app = Flask(__name__)

@app.route('/')
def landingpage():
    return render_template('landingPage.html')

@app.route('/pieChart')
def pieChart():
    ram_usage = psutil.virtual_memory().percent
    virtual_memory = psutil.virtual_memory().percent
    swap_memory = psutil.swap_memory().percent
    disk_usage = psutil.disk_usage('/').percent
    cpu_usage = psutil.cpu_percent()
    data = {
        'ram_usage':str(ram_usage), 
        'cpu_usage':str(cpu_usage), 
        'virtual_memory':str(virtual_memory),
        'swap_memory': str(swap_memory),
        'disk_usage': str(disk_usage)
    }
    return data

@app.route('/barChart')
def barChart():
    ram_usage = psutil.virtual_memory().percent
    virtual_memory = psutil.virtual_memory().percent
    swap_memory = psutil.swap_memory().percent
    disk_usage = psutil.disk_usage('/').percent
    cpu_usage = psutil.cpu_percent()
    data = [
        {'ram_usage':str(ram_usage), 
        'cpu_usage':str(cpu_usage), 
        'virtual_memory':str(virtual_memory),
        'swap_memory': str(swap_memory),
        'disk_usage': str(disk_usage)
        }
    ]
    return data


app.run()
=======
from flask import Flask 

app = Flask(__name__)

@app.route('/home')
def home():
    data = {"nama":"ramma hayu fitra saleh","usia":"34", "pekerjaan":"software engineer"}
    return data

if __name__ == '__main__':
    app.run()
>>>>>>> 1936c5651b7ef10e71aca19e60425e3b7cebd297
