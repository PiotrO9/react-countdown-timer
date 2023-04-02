import { useState, useEffect } from 'react'
import './Segment.scss'

function Segment({number}: ISegmentParams) {
    const [time, setTime] = useState<number>(1)
    
    // useEffect(() => {
    //     setTimeout(() => {
    //         setTime(time)
    //     }, 1000);
    // })

    return (
        <div className="SegmentElement" key={number}>
            <div className="Segment">
                <div className="Segment__display--top">
                    {time}
                </div>
                <div className="Segment__display--bottom">
                    {time}
                </div>
                <div className="Segment__overlay flip">
                    <div className="Segment__overlay--top">
                        {time}
                    </div>
                    <div className="Segment__overlay--bottom">
                        {time}
                    </div>
                </div>
            </div>
        </div>
    )
}

interface ISegmentParams {
    number: any
}

export default Segment