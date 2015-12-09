import re

filename = "06.txt"

regex = re.compile(r'^(turn on|toggle|turn off)\s+(\d+,\d+)\s.*\s(\d+,\d+)$')

lights = [[0 for x in range(1000)] for x in range(1000)]
instructions = [x.strip() for x in open(filename).readlines()]

def turn_on(lights, start, finish):
    (start_x, start_y) =map(int, start.split(","))
    (finish_x, finish_y) = map(int, finish.split(","))

    for x in range(start_x, finish_x + 1):
        for y in range(start_y, finish_y + 1):
            lights[x][y] = lights[x][y] + 1

def turn_off(lights, start, finish):
    (start_x, start_y) =map(int, start.split(","))
    (finish_x, finish_y) = map(int, finish.split(","))

    for x in range(start_x, finish_x + 1):
        for y in range(start_y, finish_y + 1):
            lights[x][y] = max(0, lights[x][y] - 1)

def toggle(lights, start, finish):
    (start_x, start_y) =map(int, start.split(","))
    (finish_x, finish_y) = map(int, finish.split(","))

    for x in range(start_x, finish_x + 1):
        for y in range(start_y, finish_y + 1):
            lights[x][y] = lights[x][y] + 2


for i in instructions:
    m = regex.match(i)
    if not m:
        break

    (instruction, start, finish) = m.groups()

    if instruction.strip() == "turn on":
        turn_on(lights, start, finish)
    elif instruction.strip() == "toggle":
        toggle(lights, start, finish)
    elif instruction.strip() == "turn off":
        turn_off(lights, start, finish)

lumosity = 0

for x in range(1000):
    for y in range(1000):
        lumosity = lumosity + lights[x][y]

print lumosity
