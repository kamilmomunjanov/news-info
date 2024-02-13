import React,{useEffect, useState} from 'react';
import style from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";

const Main = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await getNews()
                setNews(response.news)
            }catch (e) {
                console.log(e)
            }
        }
        fetchNews()
    },[])

    return (
        <main className={style.main}>
            {news.length > 0 ? <NewsBanner item={news[0]}/> : null}

            <NewsList news={news}/>
        </main>
    );
};

export default Main;