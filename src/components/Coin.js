import React from 'react'
import '../style/Coin.css'
import LikeButton from './LikeCoin'

const Coin = ({
  id,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  handleSetLiked,
  showLikeIcon = true,
  chkval,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        {showLikeIcon && (
          <div>
            <LikeButton
              id={id}
              handleSetLiked={handleSetLiked}
              chkval={chkval}
            />
          </div>
        )}
        <div className="coin-data">
          <p className="coin-price">${price}</p>
          <p className="coin-volume">${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}

          <p className="coin-marketcap">
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coin
