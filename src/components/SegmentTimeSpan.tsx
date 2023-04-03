import { useState } from "react"
import Segment from "./Segment"
import './SegmentTimeSpan.scss'

function SegmentTimeSpan(props: any) {
    const [numberToSent, setNumberToSet] = useState(1)

    return (
        <div className="SegmentTimeSpan">
            <div className="Segments">
                <Segment number={1} position="left"/>
                <Segment number={numberToSent} position="right"/>
            </div>
            <div className="TimeUnit">
                <p>{props.timeUnit}</p>
            </div>
        </div>
    )
}

export default SegmentTimeSpan