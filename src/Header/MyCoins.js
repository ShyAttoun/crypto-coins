import React, { useState, useEffect } from 'react'
import Coin from '../components/Coin'
import { CircularProgress } from '@material-ui/core'
import '../style/Spinner.css'
import Spinner from '../components/Spinner'

const MyCoins = ({ liked, handleResetLiked, coins }) => {
  const newArray = liked
  const [listIsEmpty, setListIsEmpty] = useState(true)

  useEffect(() => {
    if (liked.length != 0) {
      setListIsEmpty(false)
    }
  }, [liked])
  const filteredCoins = coins.filter((coin) => newArray.includes(coin.id))

  return (
    <div>
      {listIsEmpty && <Spinner message="Favorite coins list is empty" />}
      <div className="coin-app">
        {filteredCoins.length !== 0 && (
          <button onClick={handleResetLiked}>Clear All</button>
        )}
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              id={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
              showLikeIcon={false}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MyCoins
