import React, { useState } from 'react'

export const Content = () => {

  const [name, setName] = useState('Kennedy');
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ['Bob', 'Kelvin', 'Kennedy'];
    const int = Math.floor(Math.random() * 3)
    setName(names[int])
  }

  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  }
  const handleClick2 = () => {
    console.log(count);
  }
  const handleClick3 = (e) => {
    console.log(e.target);
  }
  return (
    <main>
      <p>
        Hello {name}
      </p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click this second button</button>
      <button onClick={handleClick2}>Click this third button</button>
    </main>
  )
}
