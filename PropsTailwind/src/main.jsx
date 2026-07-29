import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Card from './Components/Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Card username = "shivam" btntext = "click me"/>
    <Card username = "golu" btntext = "visit me"/>
    <Card username = "golu" btntext = "visit me"/> */}
  </StrictMode>,
)
