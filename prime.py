for num in range(10, 21):
    if num > 1:
        prime = 1
        for i in range(2, num):
            if num % i == 0:
                prime = 0
                break
        if prime:
            print(num)

