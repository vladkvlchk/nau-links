import React from "react";
import { Link } from "react-router-dom";
import Folder from "../../component/Folder/Folder";
import HeaderHome from "../../component/HeaderHome/HeaderHome";
import classes from './Home.module.scss';
const Home = () => {
  return (
    <div className={classes.home}>
      <HeaderHome headerText="NAU ROUTER"/>
      <Link to="/links/faculties">
        <Folder text="факультети"/>
      </Link>
      <Link to="/links/SR">
        <Folder text="СР"/>
      </Link>
      <Link to="/links/dorms">
        <Folder text="Гуртожитки"/>
      </Link>
    </div>
  );
};

export default Home;
