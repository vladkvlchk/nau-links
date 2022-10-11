import React from "react";
import { useParams } from "react-router-dom";
import "./Links.module.scss";

const Links = () => {
  let { folder } = useParams();
  return <div>{folder}</div>;
};

export default Links;
