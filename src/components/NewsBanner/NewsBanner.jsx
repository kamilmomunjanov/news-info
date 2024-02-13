import React from 'react';
import style from "./styles.module.css";
import {formatTimeAgo} from "../../helpers/formatTimeAgo";
import Image from "../Image/Image.jsx";

const NewsBanner = ({item}) => {
    return (
        <div className={style.banner}>
            <Image image={item?.image}/>
            <h3 className={style.title}>{item.title}</h3>
            <p className={style.extra}>
                {formatTimeAgo(item.published)} by {item.author}
            </p>
        </div>
    );
};

export default NewsBanner;