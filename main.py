from basic import calculate, CalculatorError

print("Basic Calculator")
print("Type 'exit' to quit.\n")

while True:
    expression = input("> ")

    if expression.lower() == "exit":
        break

    try:
        result = calculate(expression)
        print(result)
    except CalculatorError as e:
        print(f"Error: {e}")
