"""
scientific.py

Scientific functions for the Calculator project.
"""

import math


# -----------------------
# Constants
# -----------------------

PI = math.pi
E = math.e
TAU = math.tau


# -----------------------
# Powers & Roots
# -----------------------

def sqrt(x):
    return math.sqrt(x)


def cbrt(x):
    return x ** (1 / 3)


def power(x, y):
    return x ** y


def square(x):
    return x ** 2


def cube(x):
    return x ** 3


# -----------------------
# Logarithms
# -----------------------

def ln(x):
    return math.log(x)


def log10(x):
    return math.log10(x)


def log(x, base):
    return math.log(x, base)


# -----------------------
# Trigonometry
# -----------------------

def sin(x):
    return math.sin(math.radians(x))


def cos(x):
    return math.cos(math.radians(x))


def tan(x):
    return math.tan(math.radians(x))


def asin(x):
    return math.degrees(math.asin(x))


def acos(x):
    return math.degrees(math.acos(x))


def atan(x):
    return math.degrees(math.atan(x))


# -----------------------
# Hyperbolic
# -----------------------

def sinh(x):
    return math.sinh(x)


def cosh(x):
    return math.cosh(x)


def tanh(x):
    return math.tanh(x)


# -----------------------
# Factorials & Combinatorics
# -----------------------

def factorial(x):
    return math.factorial(int(x))


def permutations(n, r):
    return math.perm(int(n), int(r))


def combinations(n, r):
    return math.comb(int(n), int(r))


# -----------------------
# Number Functions
# -----------------------

def absolute(x):
    return abs(x)


def floor(x):
    return math.floor(x)


def ceil(x):
    return math.ceil(x)


def round_number(x, digits=0):
    return round(x, digits)


# -----------------------
# Angle Conversion
# -----------------------

def radians(x):
    return math.radians(x)


def degrees(x):
    return math.degrees(x)


# -----------------------
# Miscellaneous
# -----------------------

def gcd(a, b):
    return math.gcd(int(a), int(b))


def lcm(a, b):
    return math.lcm(int(a), int(b))


def exp(x):
    return math.exp(x)
