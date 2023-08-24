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