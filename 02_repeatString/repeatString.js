const repeatString = function(stringToRepeat, numberOfRepeats) {
    let repeatedString = "";
    if(numberOfRepeats < 0){ return "ERROR"}
    for(let i = 0; i < numberOfRepeats; i++){
        repeatedString += stringToRepeat;
    };
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
