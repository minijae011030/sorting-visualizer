import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

import styles from "./style/main.module.css";

interface SortTableProps {
  arraySize: number;
  sortMethod: string;
  sortFunction: (arr: number[], setArray: any, speed: number) => void;
}

const generateRandomArray = (n: number, max: number) => {
  return Array.from({ length: n }, () => Math.floor(Math.random() * max));
};

const SortTable: React.FC<SortTableProps> = ({
  arraySize,
  sortMethod,
  sortFunction,
}) => {
  const [array, setArray] = useState<number[]>([]);
  const [sorting, setSorting] = useState(false);
  const [timeTaken, setTimeTaken] = useState<number | null>(null);

  useEffect(() => {
    const newArray = generateRandomArray(arraySize, 1000);
    setArray(newArray);
  }, [arraySize]);

  const startSorting = async () => {
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
    const newArray = generateRandomArray(arraySize, 1000);
    setArray(newArray);
  };

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
        <button onClick={startSorting} disabled={sorting}>
          {sorting ? "정렬 중..." : `${sortMethod} 정렬 시작`}
        </button>
        <button onClick={handleReset}>초기화</button>
      </div>
    </div>
  );
};

export default SortTable;