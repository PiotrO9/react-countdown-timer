function GetTimeToCount(): Date {
    let today = new Date()
    today.setDate(today.getDate() + 14)
    return today
}

function GetTimeToCountWithDays(days: number): Date {
    let today = new Date()
    today.setDate(today.getDate() + days)
    return today
}

export default GetTimeToCount