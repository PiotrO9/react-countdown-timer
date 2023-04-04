import { useState, useEffect, useRef } from 'react'
import './App.scss'
import SegmentTimeSpan from './components/SegmentTimeSpan'
import GetTimeToCount from './assets/utils/GetTimeToCount'
import GetSecondsBetweenDates from './assets/utils/GetSecondsBetweenDates'
import SplitTimeAmountIntoUnits from './assets/utils/SplitTimeAmountIntoUnits'
import SegmentTimeParams from './assets/Models/Classes/SegmentTimeParams'

function App() {
  const emptyDateObject: SegmentTimeParams = { days: 0, hours: 0, minutes: 0, seconds: 0 }
  const [timeInSeconds, setTimeInSeconds] = useState<number>(GetSecondsBetweenDates(GetTimeToCount()))
  const [timeInUnits, setTimeInUnits] = useState<SegmentTimeParams>(emptyDateObject)
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
      console.log(timeInUnits.days)
     }
    
  }, [timeInSeconds])

  return (
    <div className="App">
      <main>
        <h1>
          We're launching soon
        </h1>
        <div className="timerContainer">
        <SegmentTimeSpan timeUnit={"Days"} time={timeInUnits.days}/>
        <SegmentTimeSpan timeUnit={"Hours"} time={timeInUnits.hours}/>
        <SegmentTimeSpan timeUnit={"Minutes"} time={timeInUnits.minutes}/>
        <SegmentTimeSpan timeUnit={"Seconds"} time={timeInUnits.seconds}/>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
