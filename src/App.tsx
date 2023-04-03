import { useState, useEffect } from 'react'
import './App.scss'
import SegmentTimeSpan from './components/SegmentTimeSpan'

function App() {
  const [time, setTime] = useState<number>(1)

  return (
    <div className="App">
      <main>
        <h1>
          We're launching soon
        </h1>
        <div className="timerContainer">
        <SegmentTimeSpan timeUnit={"Days"}/>
        <SegmentTimeSpan timeUnit={"Hours"}/>
        <SegmentTimeSpan timeUnit={"Minutes"}/>
        <SegmentTimeSpan timeUnit={"Seconds"}/>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
