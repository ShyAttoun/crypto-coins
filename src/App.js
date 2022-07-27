import React, { useCallback, useEffect, useState } from 'react'
import CoinSearch from './Header/CoinSearch'
import Route from './components/Route'
import Header from './Header/Header'
import NewsList from './Header/NewsList'
import MyCoins from './Header/MyCoins'
import axios from 'axios'
import { CircularProgress } from '@material-ui/core'
import './style/Spinner.css'

const App = () => {
  const [liked, setLiked] = useState([])
  const [coins, setCoins] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const handleSetLiked = useCallback(
    (state) => {
      console.log('handleSetLiked state is', state)
      console.log('liked is', liked)
      const isNewLiked = !liked.includes(state)
      if (isNewLiked) {
        const tempArray = [...liked, state]
        console.log('tempArray  is', tempArray)
        setLiked(tempArray)
      } else {
        const tempArray2 = liked.filter((like) => like !== state)
        console.log('tempArray2  is', tempArray2)
        setLiked(tempArray2)
      }
    },
    [liked],
  )

  const handleResetLiked = useCallback(
    (state) => {
      setLiked([])
    },
    [liked],
  )

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
      )
      .then((res) => {
        setCoins(res.data)
        setIsLoading(false)
        console.log(res.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <Header />
      <Route path="/">
        <CoinSearch
          liked={liked}
          handleSetLiked={handleSetLiked}
          coins={coins}
        />
      </Route>
      <Route path="/news">
        <NewsList />
      </Route>
      <Route path="/my-coins">
        <MyCoins
          liked={liked}
          handleResetLiked={handleResetLiked}
          coins={coins}
        />
      </Route>
      {isLoading && (
        <div className="spinner">
          <CircularProgress size={85} />
        </div>
      )}
    </div>
  )
}

export default App
