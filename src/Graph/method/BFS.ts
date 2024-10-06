// BFS 알고리즘 구현 (중복 방문 방지 추가)
export const BFS = (graph: { [key: string]: number[] }, startNode: number) => {
  const visited = new Set<number>(); // 방문한 노드를 기록
  const queue = [startNode];
  const order = [];

  while (queue.length > 0) {
    const currentNode = queue.shift()!;
    if (!visited.has(currentNode)) {
      visited.add(currentNode);
      order.push(currentNode);

      for (let neighbor of graph[currentNode]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }

  return order;
};
