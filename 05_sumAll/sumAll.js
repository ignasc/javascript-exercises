const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    
    if(checkNumberValidity(firstNum, secondNum)){return "ERROR"};

    let startNum = Math.min(firstNum, secondNum);
    let endNum = Math.max(firstNum, secondNum);
    
    
    for(let i = startNum; i <= endNum; i++){
        sum += i;
    };
    
    return sum;
};

function checkNumberValidity(firstNum, secondNum){
    let numNotValid = false;

    if(Math.min(firstNum, secondNum) < 0){numNotValid = true};

    if(firstNum % 1 > 0 || secondNum % 1 > 0){numNotValid = true};

    if(typeof firstNum != "number" || typeof secondNum != "number"){numNotValid = true};

    return numNotValid;
}

// Do not edit below this line
module.exports = sumAll;
