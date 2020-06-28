
defmodule Capitalize do
  animals = ["dog ", "cat ", "horse ", "pig ", "cow "]
  IO.puts(Enum.map(animals, &String.capitalize/1))
end

