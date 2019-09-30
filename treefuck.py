yes_counter = 0
no_counter = 0
while(True):
    print("Do trees behind you care?, yes or no?")
    print("Do trees in front you care?, yes or no?")
    result = raw_input() 
    if (result == "yes"):
        yes_counter += 1
    elif(result == "no"):
        no_counter += 1
    print "This many yes", yes_counter
    print "This many no", no_counter
