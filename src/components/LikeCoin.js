import React, { useEffect, useState } from 'react'
import Heart from './heartUi'

const LikeButton = ({ id, handleSetLiked, chkval }) => {
  const [isClick, setClick] = useState(chkval)

  useEffect(() => {
    if (isClick !== chkval) {
      console.log('id inside is', id)
      console.log('isClicks is,', isClick)
      console.log('isClicks is,', id)
      console.log('handleSetLiked is', handleSetLiked)
      handleSetLiked(id)
    }
  }, [isClick])
  return (
    <div className="App">
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    </div>
  )
}

export default LikeButton
