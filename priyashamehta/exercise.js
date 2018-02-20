var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = salary;
};

// get salaries larger than given salary
exercise.findBiggerSalaries = function(){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a filtered list of salaries.
    //     Return salaries larger than exercise.salary
    //
    //     Example: salaries larger than 300K is 8
    // ---------------------------------------------------
    var dataLength = exercise.salaries.dataLength;
    var currentSalary = 0.0;
    var numberLargerSalaries = 0;
    for (var i=0; i < dataLength; i++){
        currentSalary = Number(exercise.salaries[i][18]);
        if(largerSalary(currentSalary)){
            numberLargerSalarie++;
        }

    }
    return numberLargerSalaries;
};

// filter function
exercise.largerSalary = function largerSalary(item){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a boolean (true/false) if item
    //     is larger than exercise.salary
    // ---------------------------------------------------

    return item > exercise.salary;

};