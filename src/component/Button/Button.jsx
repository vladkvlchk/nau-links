import React from 'react';
const Button = ({children}) => {
    return (
        <div className={classes["home__container-folder"]}>
            <button className={classes.home__folder}>{children}</button>
        </div>
    );
}

export default Button;