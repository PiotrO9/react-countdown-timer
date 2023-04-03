import { useState, useEffect } from 'react'
import './Segment.scss'

function Segment({number, position}: ISegmentParams) {
    const [time, setTime] = useState<number>(number)
    
    useEffect(() => {
      
    })

    return (
        <div className='SegmentElement'  key={number}>
            <div className={`Segment ${position == 'left' ? 'left': 'right'}`}>
                <div className="dot"></div>
                <div className="Segment__display--top">
                    {time}
                    <div></div>
                </div>
                <div className="Segment__display--bottom">
                    {time}
                    <div></div>
                </div>
                <div className="Segment__overlay flip">
                    <div className={`Segment__overlay--top ${position == 'left' ? 'left': 'right'}`}>
                        {time}
                    </div>
                    <div className={`Segment__overlay--bottom ${position == 'left' ? 'left': 'right'}`}>
                        {time}
                    </div>
                </div>
            </div>
        </div>
    )
}

interface ISegmentParams {
    number: number,
    position: string
}

export default Segment