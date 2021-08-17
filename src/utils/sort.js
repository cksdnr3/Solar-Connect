const half = (num) => parseInt(num/2)
const swap = (arr,a,b) => {
  const tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

const divide = (arr, left, right, pivot) => {
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      swap(arr,left,right)
      left++;
      right--;
    }
  }
  return left;
}

export const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) {
    return arr
  }
  const pivot = arr[half(left+right)];
  const partition = divide(arr, left, right, pivot);
  quickSort(arr, left, partition - 1);
  quickSort(arr, partition, right);
  return arr
}

export const reverse = (arr) => {
  return arr.map((_,i) => arr[arr.length-1-i])
}
