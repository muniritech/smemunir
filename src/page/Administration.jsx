import React from "react";
import { useParams } from "react-router-dom";

const Administration = () => {
  const { administration } = useParams();
  return <div>Administration {administration}</div>;
};

export default Administration;
