import React from "react";
import { useParams } from "react-router-dom";
import CurrentArticales from "../subPage/CurrentArticales";
import PastArticales from "../subPage/PastArticales";

const Articles = () => {
  const { articles } = useParams();
  return (
    <div className="flex flex-1">
      {articles === "current-articles" && <CurrentArticales/>}
      {articles === "past-articles" && <PastArticales/>}
    </div>
  );
};

export default Articles;
