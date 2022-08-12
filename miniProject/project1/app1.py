# importing the required packages
import pyautogui
import cv2
import numpy as np
import tk
from tkinter import *
import time

def screenRecording(filename,fps,resolution):
    codec = cv2.VideoWriter_fourcc(*"XVID")
    out = cv2.VideoWriter(filename, codec, fps, resolution)
    while True:
        img = pyautogui.screenshot()
        frame = np.array(img)
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        out.write(frame)
        if cv2.waitKey(1) == ord('q'):
            break
    out.release()
    cv2.destroyAllWindows()

def Play():
    print('START RECORDING . . .')
    print('JIKA INGIN MENGHETIKAN PROSES RECORDING GUNAKAN CTRL + C')
    filename = "record.avi"
    fps = 10.0
    resolution = (1366, 768)
    screenRecording(filename, fps, resolution)
   

if __name__ == '__main__':
    root = Tk()
    root.title('RaZam')
    root.geometry('200x200')
    icon = PhotoImage(file='images.png')
    btn1 = Button(root, image=icon ,bd='5', command=Play)
    btn1.pack(side='top')
  
    root.mainloop()

 
    
