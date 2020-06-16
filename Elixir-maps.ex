
defmodule Capitalize do
  animals = ["dog ", "cat ", "horse ", "pig ", "cow "]
  res = Enum.map(animals, &String.capitalize/1)
  IO.puts(res)
end

