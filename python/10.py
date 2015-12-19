from itertools import groupby

input = '1321131112'

# def look_and_say(input_string, num_iterations):
#     for i in xrange(num_iterations):
#         input_string = ''.join([str(len(list(g))) + str(k) for k, g in groupby(input_string)])
#     return input_string

def look_and_say(input):
    return ''.join( [str(len(list(v))) + str(k) for k, v in groupby(input)])

for x in xrange(40):
    input = look_and_say(input)

print len(input)
