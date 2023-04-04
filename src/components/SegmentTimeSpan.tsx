import { useState, useEffect, useRef } from "react"
import Segment from "./Segment"
import './SegmentTimeSpan.scss'

function SegmentTimeSpan(props: any) {
    const [firstNumberToSent, setFirstNumberToSet] = useState(props.time)
    const [secondNumberToSent, setSecondNumberToSet] = useState(props.time)
    const leftDigit = useRef<number>()

    useEffect(() => {
        let timeInText = props.time.toString()
        if(timeInText.length < 2) {
            setFirstNumberToSet(0)
            setSecondNumberToSet(timeInText[0])
        }
        else {
            setFirstNumberToSet(timeInText[0])
            setSecondNumberToSet(timeInText[1])
        }
    })

    return (
        <div className="SegmentTimeSpan">
            <div className="Segments">
                <Segment number={firstNumberToSent} position="left"/>
                <Segment number={secondNumberToSent} position="right"/>
            </div>
            <div className="TimeUnit">
                <p>{props.timeUnit}</p>
            </div>
        </div>
    )
}

export default SegmentTimeSpan