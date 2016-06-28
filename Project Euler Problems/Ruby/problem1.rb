def three_five_sum(topLimit)
  total = 0;
  [*1..topLimit-1].each do |i|
    if i%3 == 0 || i%5 == 0
      total += i
    end
  end
  return total
end
