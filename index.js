
let sum = 0;

let negativeNumberArray = [];


function handleStringCalculator(e){
    e.preventDefault();

    let inputStr = document.getElementById('inputValue').value;

    let resultArray = inputStr.match(/-?\d+/g);

    try {
        if (!resultArray) {
            if (document.getElementById('valid').classList.contains('d-none')) {
                document.getElementById('valid').classList.remove('d-none');
                document.getElementById('valid').classList.add('d-block');    
                document.getElementById('invalid').classList.add('d-none');
            }else{
                document.getElementById('valid').classList.add('d-block');    
                document.getElementById('invalid').classList.add('d-none');
            }
            document.getElementById('valid').innerHTML = sum;
            return console.log(sum);
        }else{
            resultArray.map((item,index)=>{
                if (parseInt(item) < 0) {
                    negativeNumberArray.push(item);
                }else if (parseInt(item) < 1000){
                    sum += parseInt(item);
                }else{
                    sum = 0; 
                }
            });    
        }
        if (negativeNumberArray.length > 0) {
            
            throw `negative numbers not allowed ${negativeNumberArray}`;
        }else{
            if (document.getElementById('valid').classList.contains('d-none')) {
                document.getElementById('valid').classList.remove('d-none');
                document.getElementById('valid').classList.add('d-block');    
                document.getElementById('invalid').classList.add('d-none');
            }else{
                document.getElementById('valid').classList.add('d-block');    
                document.getElementById('invalid').classList.add('d-none');
            }
            document.getElementById('valid').innerHTML = sum;
        }
    } catch (error) {
        if (document.getElementById('invalid').classList.contains('d-none')) {
            document.getElementById('invalid').classList.remove('d-none');
            document.getElementById('invalid').classList.add('d-block');    
            document.getElementById('valid').classList.add('d-none');
        }else{
            document.getElementById('invalid').classList.add('d-block');    
            document.getElementById('valid').classList.add('d-none');
        }
        document.getElementById('invalid').innerHTML = error;
    }
    document.getElementById('inputValue').value = '';
    
}

handleStringCalculator();

