# Example 1

# To run this script in terminal, type iex:
# Then type the following: import_file("Path to your file here")

defmodule Language do
  IO.puts "My favorite languages are:"

  def print_list([head|tail]) do
    IO.puts head
    print_list(tail)
  end

  def print_list([]) do
  end
end

lang = ["elixir", "js", "css", "python", "vue"]
Language.print_list(lang)

#-------------------------------------------------------------------
