# Caesar Cipher

# Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

def caesarCipher(s, k):
    # Write your code here
    alphabet_lower = 'abcdefghijklmnopqrstuvwxyz'
    alphabet_upper = alphabet_lower.upper()
    rotated = ""
    for i in s:
        if i in alphabet_lower:
            rotated += alphabet_lower[(alphabet_lower.index(i)+k)%26]
        elif i in alphabet_upper:
            rotated += alphabet_upper[(alphabet_upper.index(i)+k)%26]
        else:
            rotated += i 
    return rotated

#Prime Dates
    # In this challenge, the task is to debug the existing code to successfully execute all provided test files.
    # Given two dates each in the format dd-mm-yyyy, you have to find the number of lucky dates between them (inclusive). To see if a date is lucky,
    # Firstly, sequentially concatinate the date, month and year, into a new integer  erasing the leading zeroes.
    # Now if  is divisible by either  or , then we call the date a lucky date.

    import re
    month = []

    def updateLeapYear(year):
        if year % 400 == 0:
            month[2] = 29       #1st Change
        elif year % 100 == 0:
            month[2] = 28       #2nd Change
        elif year % 4 == 0:
            month[2] = 29
        else:
            month[2] = 28

    def storeMonth():
        month[1] = 31
        month[2] = 28
        month[3] = 31
        month[4] = 30
        month[5] = 31
        month[6] = 30
        month[7] = 31
        month[8] = 31
        month[9] = 30
        month[10] = 31
        month[11] = 30
        month[12] = 31

    def findPrimeDates(d1, m1, y1, d2, m2, y2):
        storeMonth()
        result = 0

        while(True):
            x = d1
            x = x * 100 + m1
            x = x * 10000 + y1                          #3rd Change
            if x % 4 == 0 or x % 7 == 0:                #4th Change
                result = result + 1
            if d1 == d2 and m1 == m2 and y1 == y2:
                break
            updateLeapYear(y1)
            d1 = d1 + 1
            if d1 > month[m1]:
                m1 = m1 + 1
                d1 = 1
                if m1 > 12:
                    y1 =  y1 + 1
                    m1 = 1                              #5th Change
        return result;

    for i in range(1, 15):
        month.append(31)

    line = input()
    date = re.split('-| ', line)
    d1 = int(date[0])
    m1 = int(date[1])
    y1 = int(date[2])
    d2 = int(date[3])
    m2 = int(date[4])
    y2 = int(date[5])

    result = findPrimeDates(d1, m1, y1, d2, m2, y2)
    print(result)

