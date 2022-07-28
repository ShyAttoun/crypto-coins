import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from '../components/Coin'
import '../style/CoinSearch.css'

const CoinSearch = ({ liked, handleSetLiked, coins }) => {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()),
  )
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
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
            handleSetLiked={handleSetLiked}
            chkVal={liked.includes(coin.id)}
          />
        )
      })}
    </div>
  )
}

export default CoinSearch
