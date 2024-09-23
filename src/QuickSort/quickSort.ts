const quickSort = async (
  arr: number[],
  setArray: any,
  speed: number,
  left: number = 0,
  right: number = arr.length - 1
) => {
  if (left < right) {
    const pivotIndex = await partition(arr, left, right, setArray, speed);
    await quickSort(arr, setArray, speed, left, pivotIndex - 1);
    await quickSort(arr, setArray, speed, pivotIndex + 1, right);
  }
};

const partition = async (
  arr: number[],
  left: number,
  right: number,
  setArray: any,
  speed: number
): Promise<number> => {
  const mid = Math.floor((left + right) / 2);
  const pivotValue = arr[mid];
  [arr[mid], arr[right]] = [arr[right], arr[mid]];
  let pivotIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];

  if (right - left < 20) {
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, speed));
  }

  return pivotIndex;
};

export default quickSort;
