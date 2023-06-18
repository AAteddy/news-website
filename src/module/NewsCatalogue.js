import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsElement from './NewsElement';

// declaring constant for the news catalogue
const NewsCatalogue = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=Apple&from=2023-06-18&sortBy=popularity&apiKey=28463e4260e24672ad1f981f9c02e1fb')
            setArticles(response.data.articles)
            // Print the data
            console.log(response)
        } 
        getArticles()
    },[])
    return (
        <div>
            {articles.map(article => {
                return(
                    <NewsElement
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}
        </div>
    )
}

export default NewsCatalogue;