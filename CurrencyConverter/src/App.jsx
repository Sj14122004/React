import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components'
import { a } from 'framer-motion/client'
function App() {
  const[amount,setAmount] = useState()
  const[from, setFrom] = useState("usd")
  const[to, setTo] = useState("inr")
  const[convertedAmount,setConvertedAmount ] = useState()

  const currencyInfo = useCurrencyInfo(from)

  const options =  Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <>
      <div className="w-full h-screen flex flex-wrap
      justify-center items-center bg-cover 
      bg-no-repeat"
      style = {{backgroundImage: `url('https://media.istockphoto.com/id/656293116/photo/data-analyzing-in-foreign-finance-market-the-charts-and-quotes-on-display-analytics-in-pairs.jpg?s=2048x2048&w=is&k=20&c=K4uC1dzhX1_sEmSwPz930SRdusaWcEouGZB3lG2zmtA=')`}}>
         <div className="absolute inset-0 bg-black/60"></div>

        <div className='w-full'>
          <div className='w-full max-w-md mx-auto
          border border-gray-60 rounded-lg p-5
          backdrop-blur-sm bg-white/30'>
            <form 
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}>
              <div className='w-full mb-1'>
                <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                selectCurrency = {from}
                onCurrencyChange={(currency) => 
                  setFrom(currency)
                }
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button type = "button"
                className='absolute left-1/2-translate-x-1/2
                -translate-y-1/2 border-2 border-white rounder-md
                bg-blue-600 text-white px-2 py-0.5 mx-42 rounded-2xl'
                onClick={swap}>
                  Swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                label="to"
                amount={convertedAmount}
                currencyOptions={options}
                selectCurrency = {to}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency = {to}
                amountDisable/>

              </div>
              <button type = "submit" className='w-full bg-blue-600 
              text-white px-4 py-3 rounded-lg'>Convert {from.toLocaleUpperCase() + " "}
              to {to.toUpperCase()}</button>
            </form>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
