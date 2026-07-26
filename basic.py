"""
basic.py

A basic calculator capable of evaluating arithmetic expressions safely.

Supported operators:
+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Modulo
**  Exponents
()  Parentheses
"""

import ast
import operator

# Supported operations
OPERATORS = {
    ast.Add: operator.add,
    ast.Sub: operator.sub,
    ast.Mult: operator.mul,
    ast.Div: operator.truediv,
    ast.Mod: operator.mod,
    ast.Pow: operator.pow,
    ast.USub: operator.neg,
    ast.UAdd: operator.pos,
}


class CalculatorError(Exception):
    """Raised when an invalid calculation is attempted."""
    pass


def _evaluate(node):
    """Recursively evaluate an AST node."""

    if isinstance(node, ast.Constant):  # Numbers
        if isinstance(node.value, (int, float)):
            return node.value
        raise CalculatorError("Invalid number.")

    elif isinstance(node, ast.BinOp):  # Binary operations
        left = _evaluate(node.left)
        right = _evaluate(node.right)

        if isinstance(node.op, ast.Div) and right == 0:
            raise CalculatorError("Division by zero.")

        if isinstance(node.op, ast.Mod) and right == 0:
            raise CalculatorError("Modulo by zero.")

        operation = OPERATORS.get(type(node.op))
        if operation is None:
            raise CalculatorError("Unsupported operator.")

        return operation(left, right)

    elif isinstance(node, ast.UnaryOp):  # +5 or -5
        operand = _evaluate(node.operand)

        operation = OPERATORS.get(type(node.op))
        if operation is None:
            raise CalculatorError("Unsupported unary operator.")

        return operation(operand)

    raise CalculatorError("Invalid expression.")


def calculate(expression):
    """
    Evaluate a mathematical expression.

    Example:
        calculate("5 * (3 + 2)")
    """

    try:
        tree = ast.parse(expression, mode="eval")
        return _evaluate(tree.body)
    except SyntaxError:
        raise CalculatorError("Invalid syntax.")
