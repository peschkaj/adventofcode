filename = "02.txt"

all_package_sizes = 0
ribbon_length = 0


def find_paper_size(length, width, height):
    l_area = (length * width)
    w_area = (width * height)
    h_area = (length * height)

    shortest = min(l_area, w_area, h_area)

    if shortest == l_area:
        rl = (2 * length) + (2 * width)
    elif shortest == w_area:
        rl = (2 * width) + (2 * height)
    else:
        rl = (2 * length) + (2 * height)

    rl = rl + (length * width * height)

    area = (2 * l_area) + (2 * w_area) + (2 * h_area) + min(l_area, w_area, h_area)

    return (rl, area)

with open(filename, "r") as f:
    for l in f.readlines():
        (l, w, h) = l.split("x")
        (length, area) = find_paper_size(int(l), int(w), int(h))
        ribbon_length = ribbon_length + length
        all_package_sizes = all_package_sizes + area

print "we need", all_package_sizes, "sqft of paper"
print "we need", ribbon_length, "feet of ribbon"
