import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from '../components/NewsItem'
import '../style/NewsItem.css'
import { CircularProgress } from '@material-ui/core'
import '../style/Spinner.css'

const NewsList = () => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(
        `https://newsdata.io/api/1/news?apikey=pub_9500676217595b7d48129b0a91a82baabf65&q=crypto&country=il,us`,
      )
      .then((res) => {
        setIsLoading(false)
        setArticles(res.data.results)
      })
      .catch((error) => console.log(error))
  }, [])

  const renderResults = articles.map((article) => {
    return (
      <div>
        <NewsItem
          key={article.id}
          title={article.title}
          description={article.description}
          link={article.link}
          image_url={article.image_url}
        />
      </div>
    )
  })
  // return DOM (VISUAL)
  return (
    <div>
      <div className="news-title-page">
        <h2>Latest News</h2>
      </div>
      <div>{renderResults}</div>
      {isLoading && (
        <div className="news-spinner">
          <CircularProgress size={85} />
        </div>
      )}
    </div>
  )
}

export default NewsList

//e4d5d0536ea74d5491a6deb5571d0e5c
