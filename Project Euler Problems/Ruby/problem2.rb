def even_fib_sum(limit)
  return 0 if limit < 2
  last = 1
  current = sum = 2

  while current < limit do
    fib = last + current
    last = current
    current = fib
    if fib % 2 == 0
      sum += fib
    end
  end
  return sum
end
