const reverseString = function(textString) {
    let reversedString = "";

    for(let i = textString.length - 1; i >= 0; i--){
        reversedString += textString[i];
    };

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
