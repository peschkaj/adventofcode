import re

filename = '08.txt'

def escape_replace(string):
    return 'X'

with open(filename) as f:
    lines = f.readlines()
    lines = map(str.strip, lines)

literal_sum = 0
code_sum = 0

for line in lines:
    # remove leading and trailing double quote
    literal_sum = literal_sum + len(line)
    line = line[1:-1]
    line = re.sub(r'(?is)(\\\\)|(\\x[0-9a-f][0-9a-f])|(\\")', escape_replace, line)
    code_sum = code_sum + len(line)

print literal_sum
print code_sum



# And now we re-code the file!

with open(filename) as f:
    lines = f.readlines()
    lines = map(str.strip, lines)

literal_sum = 0
code_sum = 0

for line in lines:
    literal_sum = literal_sum + len(line)
    code_sum = code_sum + len(line) + 2 + line.count('\\') + line.count('"')

print literal_sum
print code_sum
