const getMax = (arr: number[]): number => {
  return Math.max(...arr);
};

const countingSortByDigit = async (
  arr: number[],
  exp: number,
  setArray: any,
  speed: number
): Promise<void> => {
  let n = arr.length;
  let output = new Array(n).fill(0); // 결과 배열
  let count = new Array(10).fill(0); // 0-9까지의 카운트 배열

  // 현재 자릿수에 해당하는 값의 카운트를 세기
  for (let i = 0; i < n; i++) {
    let index = Math.floor(arr[i] / exp) % 10;
    count[index]++;
  }

  // 카운트를 기반으로 인덱스 계산
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // 결과 배열 작성
  for (let i = n - 1; i >= 0; i--) {
    let index = Math.floor(arr[i] / exp) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }

  // 배열을 원래 배열에 복사하고 상태 업데이트
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }

  setArray([...arr]);
  await new Promise((resolve) => setTimeout(resolve, speed));
};

const radixSort = async (
  arr: number[],
  setArray: any,
  speed: number
): Promise<void> => {
  // 배열에서 최댓값 찾기
  let max = getMax(arr);

  // 자릿수별로 정렬 수행
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    await countingSortByDigit(arr, exp, setArray, speed);
  }
};

export default radixSort;
