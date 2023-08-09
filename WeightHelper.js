let calcBMI = function(ht, wt) {

    if ( ht <= 0 || wt <= 0 ) {
        return false;
    }

    return wt/ht/ht * 10000;

};

let weightHelper = function (ht, wt) {

    let bmi = calcBMI(ht, wt), 
        result;

    if (!(bmi)) return "Invalid fields";

    switch (true) {
        case ( bmi < 18.5): 
            result =  "Underweight";
            break;
        case ( bmi < 25 ): 
            result =  "Normal weight";
            break;
        case ( bmi < 30 ): 
            result =  "Overweight";
            break;
        default: 
            result =  "Obese";
    }

    // console.log({wt, ht, bmi, result});

    return result;

};

module.exports = weightHelper;
