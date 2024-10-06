import React from "react";

import TreeComponent from "./component/TreeComponent";

const GraphPage: React.FC = () => {
  return (
    <>
      <TreeComponent algorithm="BFS" />
      <TreeComponent algorithm="DFS" />
    </>
  );
};

export default GraphPage;
