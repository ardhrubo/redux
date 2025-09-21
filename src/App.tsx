import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { increment, decrement,incrementByAmount } from './redux/counter/counterSlice'
import { useAppDispatch, useAppSelector } from './hook/hooks'

function App() {

  const dispatch = useAppDispatch()

  const count = useAppSelector((state: any) => state.counter.value)

  return (
    <>
      <Navbar count={count} />

    

      <button onClick={() => dispatch(incrementByAmount(5))}>+</button>
      
      Currently count is {count}.
      
      <button onClick={() => dispatch(decrement())}>-</button>



    </>
  )
}

export default App
