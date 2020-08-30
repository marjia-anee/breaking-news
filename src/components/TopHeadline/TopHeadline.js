import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
        const [articles, setArticle]=  useState([]);


    useEffect( () => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f786f733d76d48089268f0578754c164'
        fetch (url)
        .then(res => res.json())
        .then(data => setArticle(data.articles))
    }, [])


    return (
        <div>
            <h1>Top Headlines: {articles.length} </h1>
            {
                articles.map(article => <News article={article}></News>)
            }
            
        </div>
    );
};

export default TopHeadline;