let inputStr = "1,-2,3,-4";

let numberArray = inputStr.match(/-?\d+/g);

let sum = 0;

let negativeNumberArray = [];


function handleStringCalculator(resultArray){
    try {
        if (!resultArray) {
            return console.log(sum);
        }else{
            resultArray.map((item,index)=>{
                if (parseInt(item) < 0) {
                    negativeNumberArray.push(item);
                }else if (parseInt(item) < 1000){
                    sum += parseInt(item);
                }
            });    
        }
        if (negativeNumberArray.length > 0) {
            throw `negative numbers not allowed ${negativeNumberArray}`;
        }else{
            console.log(sum);
        }
    } catch (error) {
        console.log(error);
    }
    
}

handleStringCalculator(numberArray);

