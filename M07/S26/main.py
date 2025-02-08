arr = [1,2,3,4,5]

def sumElements(arr):
    total = 0
    for i in range(len(arr)):
        total += arr[i]
    return total

print(sumElements(arr))


def count_occurrences(arr, target):
    count = 0
    for i in range(len(arr)):
        if arr[i] == target:
            count += 1
    return count
