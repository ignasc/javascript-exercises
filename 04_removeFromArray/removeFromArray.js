const removeFromArray = function(array, ...args) {
    let modifiedArray = [];

    modifiedArray = array.filter(
        (element)=>{

            for(let i = 0; i < args.length; i++){
                if(args[i] === element){
                    return false;
                };
            };

            return true;
        }
    )
    
    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
