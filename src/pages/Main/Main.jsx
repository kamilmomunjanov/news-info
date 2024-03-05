import React,{useEffect, useState} from 'react';
import style from "./styles.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Skeleton from "../../components/Sceleton/Skeleton.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

const Main = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = 10
    const pageSize = 10
    console.log(currentPage)

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true)
            const response = await getNews(currentPage, pageSize)
            setNews(response.news)
            console.log(response.news)
            setIsLoading(false)
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchNews(currentPage)
    },[currentPage])

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handlePageClick = (pageNumber) => {
            setCurrentPage(pageNumber)
    }

    return (
        <main className={style.main}>
            {news?.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : (
                <Skeleton count={1} type={"banner"}/>
            )}

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
                totalPages={totalPages}/>

            {!isLoading ? <NewsList news={news}/>
                : <Skeleton count={10} type={"item"}/>}


            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                currentPage={currentPage}
                totalPages={totalPages}/>
        </main>
    );
};

export default Main;