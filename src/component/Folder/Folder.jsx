import React from 'react';
import classes from "./Folder.module.scss";
const Folder = ({ text }) => {
    return (
        <div className={classes["home__container-folder"]}>
            <button className={classes.home__folder}>{text}</button>
        </div>
    );
}

export default Folder;