import React from "react";
import { useParams } from "react-router-dom";
import "./Links.module.scss";

const Links = () => {
  let { name } = useParams();
  return <div>{name}</div>;
};

export default Links;
