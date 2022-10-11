import React from 'react';
import classes from "./HeaderHome.module.scss";
const HeaderHome = ({headerText}) => {
    return (
        <h1 className={classes.home__header}>
            {headerText}
        </h1>
    );
}

export default HeaderHome;