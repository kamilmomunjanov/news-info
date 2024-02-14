import React,{useEffect, useState} from 'react';
import style from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Skeleton from "../../components/Sceleton/Skeleton.jsx";

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true)
                const response = await getNews()
                setNews(response.news)
                setIsLoading(false)
            }catch (e) {
                console.log(e)
            }
        }
        fetchNews()
    },[])

    return (
        <main className={style.main}>
            {news.length > 0 && !isLoading ? <NewsBanner item={news[6]}/> : (
                <Skeleton count={1} type={"banner"}/>
            )}
            {!isLoading ? <NewsList news={news}/>
                : <Skeleton count={10} type={"item"}/>}
        </main>
    );
};

export default Main;