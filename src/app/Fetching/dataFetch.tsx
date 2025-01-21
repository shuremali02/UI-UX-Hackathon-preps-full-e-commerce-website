import React from 'react'

export const DataFetch = async () => {
    const response = await fetch("https://67817ba685151f714b0af06f.mockapi.io/product/products")
    const data = await response.json()
    console.log(data)
  return (
    <div>dataFetch</div>
  )
}

