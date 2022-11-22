const sumAll = function(num1, num2) {
    if(Number.isInteger(num1) && Number.isInteger(num2) && num1 >= 0 && num2 >= 0){
        let sum = 0;
        let arrNum = [num1, num2];
        let sortedArr = arrNum.sort(function(a, b){return a - b});
        for(let i = sortedArr[0]; i <= sortedArr[1]; i++){
            sum += i;
        }
        return sum;
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
