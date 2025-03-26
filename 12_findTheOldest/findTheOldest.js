const findTheOldest = function(listOfPeople) {
    let oldestPerson = listOfPeople[0];

    listOfPeople.forEach(person => {

        if(getPersonAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath) < getPersonAge(person.yearOfBirth, person.yearOfDeath)){
            oldestPerson = person;
        };
    });

    return oldestPerson;
};

function getPersonAge(dateOfBirth, dateOfDeath){
    let deathDate = dateOfDeath ? dateOfDeath : new Date().getFullYear();
    return parseInt(deathDate) - parseInt(dateOfBirth);
};

// Do not edit below this line
module.exports = findTheOldest;
