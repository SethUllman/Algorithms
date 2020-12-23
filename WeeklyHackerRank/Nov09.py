# 1. Word Compression

def compressWord(word, k): #"abbcccb" k = 3

  if len(word) == k: return word

  new_string = ""
  compressed = True

  while compressed:
    compressed = False
    i = 0
    while i < len(word):
      compress = False
      if len(word[i:i+k]) == k:
        compress = checkCompress(word[i:i+k])

      if compress:
        compressed = True
        i+=k
      else:
        new_string += word[i]
        i+=1
    
    if compressed:
      word = new_string
      new_string = ""

  return new_string


def checkCompress(string):
  #return true if the string needs compressed, false otherwise
  letter_to_check = string[0]
  matching = True
  for char in string:
    if char != letter_to_check:
      matching = False
  
  return matching

# ------------------------------------------------------------------------------

# Weight Capacity
import itertools
def weightCapacity(weights, maxCapacity): #([4, 8, 5, 9], 20) Output = 18


  combos = itertools.combinations(weights, 2)
  y = [" ".join(i) for i in combos]

  print(y)

# ------------------------------------------------------------------------------

# count Counterfeit

def countCounterfeit(serialNumbers):
  validSum = 0
  uppers = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  for serialNumber in serialNumbers:
    #check last char for Uppercase letter
    if serialNumber[-1] not in uppers: continue
    serialNumber = serialNumber[0:-1]
    #check first three for unique uppercase letters
    if not isUnique(serialNumber[0:3]): continue
    serialNumber = serialNumber[3:-1]
    #check serialNumber[3:7] is between 1900 and 2019
    if not int(serialNumber[0:4]) in range(1900, 2019): continue
    serialNumber = serialNumber[4:-1]
    #add bill amount to validSum if all true
    validSum += int(serialNumber)

  return validSum

def isUnique(str):

  found = []
  for char in str:
    if char in found:
      return False
    else:
      found.append(char)

  return True