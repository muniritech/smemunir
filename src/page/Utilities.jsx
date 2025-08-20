import React from "react";
import { useParams } from "react-router-dom";

const Utilities = () => {
  const { utilities } = useParams();
  return <div>Utilities {utilities}</div>;
};

export default Utilities;
