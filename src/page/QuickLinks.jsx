import React from "react";
import { useParams } from "react-router-dom";

const QuickLinks = () => {
  const { quick_links } = useParams();
  return <div>Quick Links {quick_links}</div>;
};

export default QuickLinks;
