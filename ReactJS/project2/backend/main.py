# Import flask and datetime module for showing date and time
from flask import Flask
from time import time
import threading



app = Flask(__name__)

@app.route('/data')
def get_time():
	return {
		"Name":"geek",
		"Age":"22",
		"Date":time(),
		"programming":"python"
		}

if __name__ == '__main__':
    # threading.Thread(target=time).start()
    app.run(debug=True)
