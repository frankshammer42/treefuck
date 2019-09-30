#-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
 #File Name : treefuck.py
 #Creation Date : 30-09-2019
 #Created By : Rui An  
#_._._._._._._._._._._._._._._._._._._._._.
import time
yes_counter = 0
no_counter = 0
while(True):
    print("Do trees in front you care?, yes or no?")
    result = input() 
    if (result == "yes"):
        yes_counter += 1
    elif(result == "no"):
        no_counter += 1
    print("This many yes", yes_counter)
    print("This many no", no_counter)
    time.sleep(2)
