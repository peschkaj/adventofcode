import pprint
from itertools import permutations

places = set()
route_table = dict()
filename = '09.txt'

def add_to_route_table(start, dest, distance):
    places.add(start)
    places.add(dest)
    if not start in route_table:
        route_table[start] = dict()

    if not dest in route_table[start]:
        route_table[start][dest] = int(distance)

with open(filename) as f:
    for line in f.readlines():
        line = line.strip()
        (start, trash, dest, trash2, distance) = line.split(' ')

        add_to_route_table(start, dest, distance)
        add_to_route_table(dest, start, distance)

shortest_distance, longest_distance = None, None

for path in permutations(places):
    current_length = 0
    for source, dest in zip(path, path[1:]):
        current_length += route_table[source][dest]

    if not shortest_distance or shortest_distance > current_length:
        shortest_distance = current_length
    if not longest_distance or longest_distance < current_length:
        longest_distance = current_length

print shortest_distance, longest_distance
