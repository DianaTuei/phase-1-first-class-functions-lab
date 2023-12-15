// Code your solution in this file!
const returnFirstTwoDrivers = function(){
    const drivers = ["Antonia", "Nuru"];
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(){
    const drive = ["Amari", "Mo"];
    return drive.slice(-2);
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function(fare){
        return fare * integer;
    };
}

const fareDoubler = createFareMultiplier(2);
const doubleFare = fareDoubler(10);

const fareTripler = createFareMultiplier(3);
const tripleFare = fareTripler(20);

const allDrivers = ["Antonia", "Nuru", "Amari", "Mo", "Driver5"];

function selectDifferentDrivers(drivers, selectionFunction){
    return selectionFunction(drivers);
}

const firstTwoDrivers = selectDifferentDrivers(allDrivers, returnFirstTwoDrivers);
const lastTwoDrivers = selectDifferentDrivers(allDrivers, returnLastTwoDrivers);