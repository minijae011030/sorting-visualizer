import React, { useEffect, useState } from "react";

import styles from "./style/main.module.css";
import code from "./code/code.json";

import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css";

import SortTable from "./component/SortTable";

import selectionSort from "./method/selectionSort";
import heapSort from "./method/heapSort";
import quickSort from "./method/quickSort";
import insertionSort from "./method/insertionSort";
import radixSort from "./method/radixSort";
import shellSort from "./method/shellSort";

const MainPage: React.FC = () => {
  const [arraySize, setArraySize] = useState<number>(300);
  const [inputValue, setInputValue] = useState<string>("300");

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  function applyArraySize() {
    const size = parseInt(inputValue, 10);
    if (!isNaN(size) && size > 0) {
      if (size > 1000) {
        alert("1000 이하의 정수를 입력해주세요!");
      } else {
        setArraySize(size);
      }
    } else {
      alert("배열의 크기를 적어주세요!");
    }
  }

  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <>
      <h1 className={styles.main_title}>
        배열의 크기에 따른 정렬 시각화 및 시간 측정
      </h1>
      <div className={styles.array_size_apply}>
        <p>배열 크기: </p>
        <input
          value={inputValue}
          onChange={handleInput}
          placeholder="배열 크기(정수)"
          name="arraySize"
        />
        <button onClick={applyArraySize}>배열 크기 적용</button>
      </div>

      <SortTable
        arraySize={arraySize}
        sortMethod="선택"
        sortFunction={selectionSort}
        code={code[0].code}
        description={code[0].description}
        method={code[0].method}
      />
      <SortTable
        arraySize={arraySize}
        sortMethod="삽입"
        sortFunction={insertionSort}
        code={code[1].code}
        description={code[1].description}
        method={code[1].method}
      />
      <SortTable
        arraySize={arraySize}
        sortMethod="퀵"
        sortFunction={quickSort}
        code={code[2].code}
        description={code[2].description}
        method={code[2].method}
      />
      <SortTable
        arraySize={arraySize}
        sortMethod="힙"
        sortFunction={heapSort}
        code={code[3].code}
        description={code[3].description}
        method={code[3].method}
      />
      <SortTable
        arraySize={arraySize}
        sortMethod="기수"
        sortFunction={radixSort}
        code={code[4].code}
        description={code[4].description}
        method={code[4].method}
      />
      <SortTable
        arraySize={arraySize}
        sortMethod="셸"
        sortFunction={shellSort}
        code={code[5].code}
        description={code[5].description}
        method={code[5].method}
      />
    </>
  );
};

export default MainPage;
