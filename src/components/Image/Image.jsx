import React from 'react';
import style from "./styles.module.css";


const Image = ({image}) => {
    return (
        <div className={style.wrapper}>
            {image ? <img src={image} alt="News" className={style.image}/> : null}
        </div>
    );
};

export default Image;