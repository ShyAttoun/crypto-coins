import React from 'react'
import '../style/NewsItem.css'

const NewsItem = ({ title, description, link, image_url }) => {
  console.log('image url is', image_url)

  function altImage() {
    return new Promise((resolve, reject) => {
      const randImage = [
        'https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?k=20&m=1034363382&s=612x612&w=0&h=sCpRmOSicsJJS73_iNQh16nqeBgFKqU3jjfC4u42D_k=',
        'https://phantom-marca.unidadeditorial.es/6973c9e22209726927fd1de39f14971f/resize/1320/f/jpg/assets/multimedia/imagenes/2022/03/05/16464909295961.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3AzUJk87b9Rl2olE9ysdKnuy6OkJaI55ELgsTJl3kBimMBq6W60Y9v-5ZqiJLbVroBeo&usqp=CAU',
        'https://time.com/nextadvisor/wp-content/uploads/2022/07/The-Crypto-Winter-Could-Be-Over-alt-884x584.jpg',
      ]

      const randomElement =
        randImage[Math.floor(Math.random() * randImage.length)]
      console.log(randomElement)

      resolve(randomElement)
    })
  }

  return (
    <div className="news-app">
      <div className="news-item">
        <img
          className="news-img"
          src={image_url || altImage}
          alt=""
          onError={(error) =>
            altImage().then((src) => {
              error.target.src = src
            })
          }
        />
        <h3>
          <a href={link}>{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default NewsItem
