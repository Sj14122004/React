import { StrictMode } from 'react'
import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
// function  MyApp(){
//     return (
//       <h1>custom react !</h1>
//     );
// }

// const newElement = (
//   <a href = "https://google.com" target = '_blank'>Google</a>
// )
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <MyApp />
//     new
//   </StrictMode>,
// )
// const reactElements = React.createElement(
//   'a',
//   {href: "https://google.com", target: '_blank'},
//   'click me to go to the shiva'
// )
ReactDom.createRoot(document.querySelector('#root')).render(
  // newElement,
  // reactElements
  <App/>
)