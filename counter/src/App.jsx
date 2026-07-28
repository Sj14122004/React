import { useState } from "react";
function App() {
  let[count, setCounter] = useState(15);
  const addValue = () => {
    console.log("button clicked:", count);
    if(count + 1 > 20) return;
    count = count+1;
    setCounter(count);
  }
  const subValue = () => {
    console.log("button clicked");
    if(count - 1 < 0){
      return;
    } 
    setCounter(count-1);
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick = {addValue} >add</button>
      <br />
      <button onClick = {subValue}>sub</button>
    </>
  )
}

export default App
