import React, { useEffect, useRef, useState } from "react";
import { Network } from "vis-network";
import { BFS } from "./method/BFS";
import { DFS } from "./method/DFS";

const NetworkPage: React.FC = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const [algorithm, setAlgorithm] = useState<"bfs" | "dfs">("bfs"); // 알고리즘 선택 상태

  const nodes = [
    { id: 1, label: "node 1" },
    { id: 2, label: "node 2" },
    { id: 3, label: "node 3" },
    { id: 4, label: "node 4" },
    { id: 5, label: "node 5" },
    { id: 6, label: "node 6" },
    { id: 7, label: "node 7" },
    { id: 8, label: "node 8" },
    { id: 9, label: "node 9" },
    { id: 10, label: "node 10" },
  ];

  const edges = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 },
    { from: 3, to: 7 },
    { from: 4, to: 8 },
    { from: 5, to: 10 },
    { from: 6, to: 10 },
    { from: 7, to: 9 },
    { from: 7, to: 10 },
  ];

  const options = {
    layout: {
      hierarchical: {
        direction: "UD", // 위에서 아래로
        sortMethod: "directed", // 트리 형태로 노드 정렬
      },
    },
    nodes: {
      shape: "dot",
      size: 15,
      color: {
        border: "white",
        background: "skyblue",
      },
      font: {
        color: "#000",
      },
    },
    edges: {
      color: "gray",
      arrows: {
        to: {
          enabled: true, // 화살표 추가
        },
      },
    },
    interaction: {
      hover: true,
    },
    physics: false, // 물리적 애니메이션 비활성화
  };

  useEffect(() => {
    if (container.current) {
      const network = new Network(container.current, { nodes, edges }, options);

      const graph = {
        1: [2, 3],
        2: [4, 5],
        3: [4, 6, 7],
        4: [8],
        5: [10],
        6: [10],
        7: [9, 10],
        8: [],
        9: [],
        10: [],
      };

      network.on("click", (event) => {
        const { nodes: clickedNodes } = event;
        if (clickedNodes.length > 0) {
          const startNode = clickedNodes[0];
          const order =
            algorithm === "bfs" ? BFS(graph, startNode) : DFS(graph, startNode);
          visualizeSearch(order, network);
        }
      });
    }
    // eslint-disable-next-line
  }, [algorithm]);

  // 단계별 시각화 함수
  const visualizeSearch = (order: number[], network: Network) => {
    const highlightColor = "red";
    const originalColor = "skyblue";

    let i = 0;
    const interval = setInterval(() => {
      const updatedNodes = nodes.map((node) => {
        if (node.id === order[i]) {
          return { ...node, color: highlightColor };
        } else if (i > 0 && node.id === order[i - 1]) {
          return { ...node, color: originalColor };
        }
        return node;
      });

      network.setData({ nodes: updatedNodes, edges });

      i++;
      if (i >= order.length) {
        clearInterval(interval); // 모든 탐색 완료 후 인터벌 중지
      }
    }, 1000); // 1초마다 다음 노드로 넘어감
  };

  return (
    <div>
      <h3>Choose Algorithm:</h3>
      <button onClick={() => setAlgorithm("bfs")}>BFS</button>
      <button onClick={() => setAlgorithm("dfs")}>DFS</button>

      <div ref={container} style={{ height: "500px", width: "100%" }} />
    </div>
  );
};

export default NetworkPage;
