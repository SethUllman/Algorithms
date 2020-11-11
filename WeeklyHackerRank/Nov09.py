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