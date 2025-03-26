const palindromes = function (string) {
    let cleanCharArray = cleanupString(string);

    let stringLength = cleanCharArray.length;
    
    for(let i = 0; i < stringLength; i++){
        if(cleanCharArray[i] != cleanCharArray[stringLength - 1 - i]){return false}
    };

    return true;
};

function cleanupString(string){
    let charArray = string.toLowerCase().split("");

    charArray = charArray.filter((element)=>{
        return isItValidChar(element);
    });

    return charArray;
};

function isItValidChar(char){
    let invalidChars = [
        " ",
        "'",
        "-",
        ";",
        ":",
        ",",
        ".",
        "!",
        "?",
        "<",
        ">",
    ];
    return invalidChars.indexOf(char) < 0 ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
