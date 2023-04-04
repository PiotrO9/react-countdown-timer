import { useState, useEffect } from 'react'
import './Segment.scss'
import ISegmentParams from '../assets/Models/Interfaces/ISegmentParams'
import Position from '../assets/Models/Enums/Position'

function Segment({number, position}: ISegmentParams) {
    const [time, setTime] = useState<number>(number)

    useEffect(() => {
        setTime(number)
    })

    return (
        <div className='SegmentElement'  key={number}>
            <div className={`Segment ${position == Position.Left ? Position.Left: Position.Right}`}>
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



export default Segment