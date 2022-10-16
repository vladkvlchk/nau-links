import React from "react";
import { useParams } from "react-router-dom";

import "./Links.module.scss";
import data from "../../data.json";

const Links = () => {
  let { folder } = useParams();
  const currentFolder = data.find((obj) => obj.folder === folder).in;

  const [currentFaculty, setCurrentFaculty] = React.useState(
    currentFolder[0].faculty
  );

  const handleChange = (event) => {

  }

  return (
    <>
      <div>{folder}</div>
      <select name="faculty" onChange={handleChange}>
        {currentFolder.map((obj) => {
          return (<option value={obj.faculty} selected={currentFaculty === obj.faculty}>
            {obj.faculty}
          </option>)
        })}
      </select>
    </>
  );
};

export default Links;
