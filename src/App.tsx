import { useState, useEffect, useRef } from 'react'
import './App.scss'
import SegmentTimeSpan from './components/SegmentTimeSpan'
import GetTimeToCount from './assets/utils/GetTimeToCount'
import GetSecondsBetweenDates from './assets/utils/GetSecondsBetweenDates'
import SplitTimeAmountIntoUnits from './assets/utils/SplitTimeAmountIntoUnits'

function App() {
  const emptyDateObject = { days: 0, hours: 0, minutes: 0, seconds: 0 }
  const [timeInSeconds, setTimeInSeconds] = useState<number>(GetSecondsBetweenDates(GetTimeToCount()))
  const [timeInUnits, setTimeInUnits] = useState<Object>(emptyDateObject)
  const timerId: any = useRef()

  useEffect(() => {
    timerId.current = setInterval(() => {
      setTimeInSeconds(prev => prev - 1)
    }, 1000)
    return () => clearInterval(timerId.current)
  }, [])

  useEffect(() => {
    if(timeInSeconds == 0) {
      clearInterval(timerId.current)
    }
    else {
      setTimeInUnits(SplitTimeAmountIntoUnits(timeInSeconds))
      console.log(timeInUnits)
     }
    
  }, [timeInSeconds])

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
