const returnFirstTwoDrivers = array => array.slice(0, 2);
const returnLastTwoDrivers = array => array.slice(array.length - 2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (n) => (fare) => fare * n;
const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;
const selectDifferentDrivers = (array, functionName) => functionName(array);