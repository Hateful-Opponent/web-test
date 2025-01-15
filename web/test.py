
import math

a = int(input())
s = 1
for i in range(1,a+1):
    s+=math.ceil(1/i)

print(s)