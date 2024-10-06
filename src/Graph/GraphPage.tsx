import React from "react";

import TreeComponent from "./component/TreeComponent";

const GraphPage: React.FC = () => {
  return (
    <>
      <TreeComponent algorithm="bfs" />
      <TreeComponent algorithm="gfs" />
    </>
  );
};

export default GraphPage;
