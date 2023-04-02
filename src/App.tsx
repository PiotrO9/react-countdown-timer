import { useState, useEffect } from 'react'
import './App.scss'
import Segment from './components/Segment'

function App() {
  const [time, setTime] = useState<number>(1)

  return (
    <div className="App">
      <main>
        <h1>
          We're launching soon
        </h1>
        <div className="timerContainer">
          <Segment number={time}/>
          <Segment number={time}/>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
