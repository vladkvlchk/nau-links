import React from "react";
import { Link } from "react-router-dom";

import Folder from "../../component/Folder/Folder";
import HeaderHome from "../../component/HeaderHome/HeaderHome";
import classes from './Home.module.scss';
import data from '../../data.json';

const Home = () => {
  return (
    <div className={classes.home}>
      <HeaderHome headerText="NAU ROUTER"/>
      {data.map(obj => {
        return (<Link key={obj.folder} to={`/links/${obj.folder}`} >
          <Folder key={obj.folder} text={obj.folder.toUpperCase()} in={obj.in} />
        </Link>)
      })}
    </div>
  );
};

export default Home;
