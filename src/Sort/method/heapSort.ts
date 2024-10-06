const heapSort = async (
  arr: number[],
  setArray: any,
  speed: number
): Promise<number[]> => {
  let array = [...arr];
  let n = array.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(array, n, i, setArray, speed);
  }

  for (let i = n - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];

    await heapify(array, i, 0, setArray, speed);

    if (i % 10 === 0 || i === 1) {
      setArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  }

  return array;
};

const heapify = async (
  array: number[],
  n: number,
  i: number,
  setArray: any,
  speed: number
) => {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [array[i], array[largest]] = [array[largest], array[i]];

    if (largest % 10 === 0) {
      setArray([...array]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }

    await heapify(array, n, largest, setArray, speed);
  }
};

export default heapSort;
