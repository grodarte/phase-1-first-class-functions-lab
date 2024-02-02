const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2)
}

const returnLastTwoDrivers = function (array) {
    return array.slice(-2)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
]

function createFareMultiplier(fareMultiplier) {
    return function(fare){
        return fareMultiplier * fare
    }
    }

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, driverSelector) {
    if (driverSelector === returnFirstTwoDrivers){
        return arrayOfDrivers.slice(0,2)
    }
    else if (driverSelector === returnLastTwoDrivers){
        return arrayOfDrivers.slice(-2)
    }
}