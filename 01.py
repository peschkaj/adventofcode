filename = '01.txt'

value = 0
position = 1

with open(filename) as f:
    while True:
        c = f.read(1)
        if not c:
            break
        if c == "(":
            value = value + 1
        if c == ")":
            value = value - 1
        if value < 0:
            print "position is", position
            break
        position = position + 1

print "value is", value
