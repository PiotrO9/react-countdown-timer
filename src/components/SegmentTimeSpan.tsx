import Segment from "./Segment"
import './SegmentTimeSpan.scss'

function SegmentTimeSpan(props: any) {
    return (
        <div className="SegmentTimeSpan">
            <div className="Segments">
                <Segment number={1}/>
                <Segment number={1}/>
            </div>
            <div className="TimeUnit">
                <p>{props.timeUnit}</p>
            </div>
        </div>
    )
}

export default SegmentTimeSpan