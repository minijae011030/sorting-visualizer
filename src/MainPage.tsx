import React, { useState } from "react";

import SortTable from "./SortTable";
import selectionSort from "./method/selectionSort";
import heapSort from "./method/heapSort";
import quickSort from "./method/quickSort";
import insertionSort from "./method/insertionSort";

const MainPage: React.FC = () => {
  const [arraySize, setArraySize] = useState<number>(300);
  const [inputValue, setInputValue] = useState<string>("300");

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function applyArraySize() {
    const size = parseInt(inputValue, 10);
    if (!isNaN(size) && size > 0) {
      setArraySize(size);
    }
  }

  return (
    <>
      <h1>배열의 크기에 따른 정렬 시각화 및 시간 측정</h1>
      <input value={inputValue} onChange={handleInput} name="arraySize" />
      <button onClick={applyArraySize}>배열 크기 적용</button>

      <SortTable
        arraySize={arraySize}
        sortMethod="선택"
        sortFunction={selectionSort}
      />
      <SortTable
        arraySize={arraySize}
        sortMethod="삽입"
        sortFunction={insertionSort}
      />
      <SortTable
        arraySize={arraySize}
        sortMethod="퀵"
        sortFunction={quickSort}
      />
      <SortTable
        arraySize={arraySize}
        sortMethod="힙"
        sortFunction={heapSort}
      />
    </>
  );
};

export default MainPage;
