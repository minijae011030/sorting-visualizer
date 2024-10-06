const selectionSort = async (arr: number[], setArray: any, speed: number) => {
  const array = [...arr];
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    // 값 스왑
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
    setArray([...array]);
    await new Promise((resolve) => setTimeout(resolve, speed));
  }
};

export default selectionSort;
