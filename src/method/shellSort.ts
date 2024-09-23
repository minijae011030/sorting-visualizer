const shellSort = async (
  arr: number[],
  setArray: any,
  speed: number
): Promise<number[]> => {
  let array = [...arr];
  let n = array.length;

  // Hibbard's gap sequence 사용 (간격을 2^k - 1로 설정)
  let gapSequence = [];
  for (let k = 1; Math.pow(2, k) - 1 < n; k++) {
    gapSequence.push(Math.pow(2, k) - 1);
  }
  gapSequence.reverse(); // 간격을 내림차순으로 적용

  // 각 간격에 대해 삽입 정렬 수행
  for (let gap of gapSequence) {
    for (let i = gap; i < n; i++) {
      let temp = array[i];
      let j;

      // 삽입 정렬 과정
      for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }

      array[j] = temp;

      // 상태 업데이트 빈도를 더 줄여 성능 최적화
      if (i % Math.max(1, Math.floor(gap * 2)) === 0) {
        // 큰 간격으로 상태 업데이트
        setArray([...array]); // 이 과정이 렌더링을 유발하는 부분
        await new Promise((resolve) => setTimeout(resolve, speed / 10)); // 속도를 빠르게
      }
    }
  }

  // 최종 배열 업데이트
  setArray([...array]); // 최종 업데이트
  return array;
};

export default shellSort;
