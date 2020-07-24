import React, { useState, useEffect } from 'react'

function Taco() {
  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState('')

  const fetchItems = async () => {
    const data = await fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
    const items = await data.json()
    console.log(items)
    setItems(items)
  }
  return (
    <div>
      <h1>Taco Recipes</h1>
      <h3>{items.name}</h3>
      <h3>{items.recipe}</h3>
    </div>
  )
}

export default Taco
