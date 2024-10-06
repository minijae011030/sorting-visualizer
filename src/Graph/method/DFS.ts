// DFS 알고리즘 구현 (중복 방문 방지 추가)
export const DFS = (graph: { [key: string]: number[] }, startNode: number) => {
  const visited = new Set<number>(); // 방문한 노드를 기록
  const stack = [startNode];
  const order = [];

  while (stack.length > 0) {
    const currentNode = stack.pop()!;
    if (!visited.has(currentNode)) {
      visited.add(currentNode);
      order.push(currentNode);

      for (let neighbor of graph[currentNode]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }

  return order;
};
