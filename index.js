const returnFirstTwoDrivers = (myData) => {
    return myData.slice(0,2)
}
const returnLastTwoDrivers = (myData) => {
    return myData.slice(-2)
}
function selectDifferentDrivers(myData, myFunction) {
    return myFunction(myData)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (myMultiplier) => {
    return (futureFare) => myMultiplier * futureFare;
}
const fareAdjuster = (fare, rate) => {
    const setRate = createFareMultiplier(rate)
    return setRate(fare);
}
const fareDoubler = (fare) => fareAdjuster(fare, 2);
const fareTripler = (fare) => fareAdjuster(fare, 3);