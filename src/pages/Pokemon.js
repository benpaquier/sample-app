import React, { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState(localStorage.getItem("name"))

  useEffect(() => {
    console.log("component did mount")
    localStorage.setItem("name", "benoit")
    localStorage.setItem("age", 99)
    localStorage.setItem("blabla", "blabla")
    console.log(localStorage)
  }, [])

  const handleClick = () => {
    localStorage.removeItem("name")
  }

  return (
    <div>
      {name}
      <button onClick={handleClick}>Remove localStorage item</button>
    </div>
  )
}

export default App