const insertionSort = async (arr: number[], setArray: any, speed: number) => {
  const array = [...arr];
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentValue;
    setArray([...array]);
    await new Promise((resolve) => setTimeout(resolve, speed));
  }
};

export default insertionSort;
