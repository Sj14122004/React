import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Before:", count);

    setCount(count + 1);

    console.log("After:", count);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>
    </>
  );
}

export default App;
