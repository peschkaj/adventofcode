from collections import deque
import re
from memoized import memoized

calc = dict()
results = dict()


def calculate(name):
    # let's see if this is at the bottom - a raw number
    try:
        return int(name)
    except ValueError:
        pass

    if name not in results:
        ops = calc[name]
        if len(ops) == 1:
            res = calculate(ops[0])
        else:
            op = ops[-2]
            if op == 'AND':
                res = calculate(ops[0]) & calculate(ops[2])
            elif op == 'OR':
                res = calculate(ops[0]) | calculate(ops[2])
            elif op == 'NOT':
                res = ~calculate(ops[1]) & 0xffff
            elif op == 'RSHIFT':
                res = calculate(ops[0]) >> calculate(ops[2])
            elif op == 'LSHIFT':
                res = calculate(ops[0]) << calculate(ops[2])

        results[name] = res

    return results[name]

filename = '07.txt'

with open(filename) as f:
    commands = f.readlines()

for command in commands:
    (ops, result) = command.split('->')
    calc[result.strip()] = ops.strip().split(' ')

a = calculate('a')
print "a: %d" % a

#
# @memoized
# def find_inputs(wire):
#     inputs = all_commands[wire]
#
#     ordered_commands.append(inputs)
#
#     # if we're at the bottom, leave
#     if len(inputs) == 1 and re.search(r'\d+', inputs[0]):
#         return
#
#     for input in inputs:
#         if (not re.search(r'^\d+$', input) and
#             not re.search(r'^AND|LSHIFT|RSHIFT|NOT|OR$', input)
#            ):
#            find_inputs(input)
#
#
# ordered_commands = deque([])
# ordered_commands.append('a')
#
# input = find_inputs('a')
#
# print ordered_commands
# print ordered_commands.pop()
# print(all_commands['lf'])
