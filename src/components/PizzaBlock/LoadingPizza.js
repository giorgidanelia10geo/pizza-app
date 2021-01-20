import React from 'react'
import ContentLoader from "react-content-loader"


const LoadingPizza = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={456}
      viewBox="0 0 280 456"
      backgroundColor="#d6d6d6"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="6" ry="6" width="260" height="260" />
      <rect x="1" y="266" rx="7" ry="7" width="260" height="29" />
      <rect x="0" y="307" rx="12" ry="12" width="260" height="80" />
      <rect x="113" y="395" rx="26" ry="26" width="146" height="44" />
      <rect x="5" y="395" rx="26" ry="26" width="85" height="44" />
    </ContentLoader>
  )
}

export default LoadingPizza
