import { useState, useEffect } from 'react'
import './App.scss'
import SegmentTimeSpan from './components/SegmentTimeSpan'
import GetTimeToCount from './assets/utils/GetTimeToCount'
import GetSecondsBetweenDates from './assets/utils/GetSecondsBetweenDates'

function App() {
  const [time, setTime] = useState<number>(1)
  const [targetTime, setTargetTime] = useState<number>()

  useEffect(() => {
    console.log(GetSecondsBetweenDates(GetTimeToCount()))
  })

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
