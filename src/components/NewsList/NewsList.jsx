import React from 'react';
import style from "./styles.module.css";
import NewsItem from "../NewsItem/NewsItem";


const NewsList = ({news}) => {
    return (
        <ul className={style.list}>
            {news.map(item => (
                 <NewsItem key={item.id} item={item}/>
            ))}
        </ul>
    );
};

export default NewsList;