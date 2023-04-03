function GetSecondsBetweenDates(date: Date): number {
    let destinationDate: Date = new Date(date)
    let nowDate: Date = new Date()
    return Math.abs(destinationDate.getTime() - nowDate.getTime())/1000
}

export default GetSecondsBetweenDates