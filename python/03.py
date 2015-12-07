filename = "03.txt"

counter = 1
santa_x = 0
santa_y = 0
robot_x = 0
robot_y = 0

grid = { 0: {} }

def visit_house(grid, x, y):
    if not x in grid:
        grid[x] = { y: 0 }

    if x in grid and not y in grid[x]:
        grid[x][y] = 0

    grid[x][y] = grid[x][y] + 1

def advance(direction, x, y):
    if direction == ">":
        x = x + 1
    if direction == "<":
        x = x - 1
    if direction == "^":
        y = y + 1
    if direction == "v":
        y = y - 1

    return (x, y)

visit_house(grid, santa_x, santa_y)

with open(filename) as f:
    while True:
        c = f.read(1)
        if not c:
            break

        if counter % 2 == 1:
            (santa_x, santa_y) = advance(c, santa_x, santa_y)
            visit_house(grid, santa_x, santa_y)
        else:
            (robot_x, robot_y) = advance(c, robot_x, robot_y)
            visit_house(grid, robot_x, robot_y)

        counter = counter + 1


houses_visited = 0

for street in grid:
    for house in grid[street]:
        houses_visited += 1

print houses_visited
