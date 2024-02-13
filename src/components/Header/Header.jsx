import React from 'react';
import style from "./styles.module.css";
import {formatDate} from "../../helpers/formatDate.js";

const Header = () => {
    return (
        <header className={style.header}>
            <h1 className={style.title}>NEWS INFORMATION</h1>
            <p className={style.date}>{formatDate(new Date())}</p>
        </header>
    );
};

export default Header;