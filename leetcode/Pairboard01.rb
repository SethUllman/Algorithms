Ruby is cool

[0] [1,0] [1,1]

[1,0,0]

def is_one_bit(bits) do
  return false if bits.length == 0
  return true if bits.length == 1
  

  if bits[0] == 0 
    return is_one_bit(bits[1..-1])
  else
    return is_one_bit(bits[2..-1])
  end

end

class KthLargest

    attr_accessor :nums, :kthLargest
    attr_reader :k

    def initialize(k, nums)
        @k = k
        @nums = nums.sort!
        @kthLargest = @nums[-@k]
    end

    def add(val)
        if @k > @nums.length + 1
            @nums.push(val)
            return nil
        elsif @kthLargest == nil || val >= @kthLargest 
            @nums.push(val)
            @kthLargest = @nums.sort![-@k]
        end
        return @kthLargest
    end

end
