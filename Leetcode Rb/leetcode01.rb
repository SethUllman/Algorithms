# You are playing the following Nim Game with your friend: There is a heap of 
# stones on the table, each time one of you take turns to remove 1 to 3 stones. 
# The one who removes the last stone will be the winner. You will take the first 
# turn to remove the stones.

# Both of you are very clever and have optimal strategies for the game. 
# Write a function to determine whether you can win the game given the number of 
# stones in the heap.

# Example:

# Input: 4
# Output: false 
# Explanation: If there are 4 stones in the heap, then you will never win the game;
#              No matter 1, 2, or 3 stones you remove, the last stone will always be 
#              removed by your friend.



# If you start your turn with 4 stones, you will lose.
# If you start your turn with less than 4 stones, you will win.
# 

# def can_win_nim(n)
#   turn = true
#   until n == 4
      # take n % 4 stones or 3 stones if % == 0
      # change whose turn it is
    # return !turn
# end

def can_win_nim(n)
  turn = true
  until n == 4 do
    if n % 4 == 0
      n -= 3 
    else
      n -= (n % 4)
    end
    turn = !turn
  end
  return !turn
end