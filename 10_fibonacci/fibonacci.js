const fibonacci = function(numPos) {
    let position = parseInt(numPos);

    if(position < 0 || typeof position == "string"){return "OOPS"};

    let fibSeq = generateFibSequence(numPos+1);
    return fibSeq[numPos];
};

function generateFibSequence(sequenceLength){
    let fibSequence = [0,1];//includes first two numbers
    for(let i =2; i < sequenceLength;  i++){
        fibSequence.push(fibSequence[i-2]+fibSequence[i-1]);
    };
    return fibSequence;
};

// Do not edit below this line
module.exports = fibonacci;
