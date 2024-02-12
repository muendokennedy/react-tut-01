import React from 'react'

export const Content = () => {

  const handleNameChange = () => {
    const names = ['Bob', 'Kelvin', 'Kennedy'];
    const int = Math.floor(Math.random() * 3)
    return names[int]
  }
  const handleClick = () => {
    console.log('Clicked');
  }
  const handleClick2 = (name) => {
    console.log(`${name} has been clicked`);
  }
  const handleClick3 = (e) => {
    console.log(e.target);
  }
  return (
    <main>
      <p>
        Hello {handleNameChange()}
      </p>
      <button onClick={handleClick}>Click this first button</button>
      <button onClick={() => handleClick2('Kennedy')}>Click this second button</button>
      <button onClick={(e) => handleClick3(e)}>Click this third button</button>
    </main>
  )
}
