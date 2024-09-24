import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

import styles from "../style/main.module.css";
import arrow from "../image/downarrow.png";

interface SortTableProps {
  arraySize: number;
  sortMethod: string;
  sortFunction: (arr: number[], setArray: any, speed: number) => void;
  code: string;
  description: string[];
  method: string[];
}

const generateRandomArray = (n: number, max: number) => {
  return Array.from({ length: n }, () => Math.floor(Math.random() * max));
};

const SortTable: React.FC<SortTableProps> = ({
  arraySize,
  sortMethod,
  sortFunction,
  code,
  description,
  method,
}) => {
  const [array, setArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState(false);
  const [timeTaken, setTimeTaken] = useState<number | null>(null);
  const [isToggleOpened, setIsToggleOpened] = useState<boolean>(false);
  const [isReseted, setIsReseted] = useState<boolean>(true);

  const startSorting = async () => {
    setIsReseted(false);
    setSorting(true);
    setTimeTaken(null);

    const startTime = performance.now();

    await sortFunction(array, setArray, 50);

    await new Promise((resolve) => setTimeout(resolve, 50));

    const endTime = performance.now();

    setSorting(false);
    setTimeTaken(endTime - startTime);
  };

  const handleReset = () => {
    setIsReseted(true);
    const newArray = generateRandomArray(arraySize, 1000);
    setArray(newArray);
  };

  const handleToggle = () => {
    setIsToggleOpened((prev) => !prev);
  };

  useEffect(() => {
    const newArray = generateRandomArray(arraySize, 1000);
    setArray(newArray);
  }, [arraySize]);

  return (
    <div className={styles.table_box}>
      <h1 className={styles.title}>{sortMethod} 정렬 시각화</h1>
      <div className={styles.sorting_time}>
        {timeTaken && <h2>정렬 시간: {timeTaken.toFixed(2)} ms</h2>}
      </div>
      <div className={styles.chart}>
        <BarChart
          width={800}
          height={400}
          data={array.map((value, index) => ({ index, value }))}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="index" />
          <YAxis />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
      <div className={styles.button_box}>
        <button
          className={!isReseted ? styles.hidden : styles.button}
          onClick={startSorting}
          disabled={sorting}
        >
          {`${sortMethod} 정렬 시작`}
        </button>
        <button
          className={isReseted ? styles.hidden : styles.button}
          onClick={handleReset}
          disabled={sorting}
        >
          {sorting ? "정렬 중..." : `초기화`}
        </button>
      </div>
      <button className={styles.toggle_button} onClick={handleToggle}>
        <p className={styles.toggle_open_button}>
          <img
            className={
              isToggleOpened ? styles.opened_arrow : styles.closed_arrow
            }
            src={arrow}
            alt="arrow"
          />
          {isToggleOpened ? "설명 닫기" : "설명 보기"}
        </p>
      </button>
      <div className={isToggleOpened ? styles.description_box : styles.hidden}>
        <p className={styles.description_title}>{sortMethod}정렬 이란?</p>
        {description.map((des, index) => {
          return (
            <p className={styles.description} key={index}>
              {des}
            </p>
          );
        })}
        <p className={styles.description_title}>{sortMethod}정렬 방법</p>
        {method.map((met, index) => {
          return (
            <p className={styles.list} key={index}>
              {met}
            </p>
          );
        })}
        <p className={styles.description_title}>{sortMethod} 정렬 코드</p>
        <pre>
          <code className="language-c">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default SortTable;
