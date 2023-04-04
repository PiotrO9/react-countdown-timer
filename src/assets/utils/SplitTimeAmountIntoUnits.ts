import SegmentTimeParams from "../Models/Classes/SegmentTimeParams"

function SplitTimeAmountIntoUnits(timeAmount: number): SegmentTimeParams {
    const days: number = Math.floor(timeAmount / (86400))
    timeAmount = timeAmount - (days * 86400)
    const hours: number = Math.floor(timeAmount / 3600)
    timeAmount = timeAmount - (hours * 3600)
    const minutes: number = Math.floor(timeAmount / 60)
    timeAmount = timeAmount - (minutes * 60)
    const seconds: number = Math.floor(timeAmount)

    return {
         days,
         hours,
         minutes,
         seconds
        }
}

export default SplitTimeAmountIntoUnits