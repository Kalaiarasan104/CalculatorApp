function calculator(task) {
    if ( typeof(number1) != "number" || typeof(number2) != "number" ) {
        try {
            throw err ;
        } catch (err) {
            result =  "Invalid input...." ;
            document.getElementById('result').textContent = 'invalid input'; 
        } 
    } else {
        number1 = parseInt(document.getElementById('number1').value) ;
        number2 = parseInt(document.getElementById('number2').value) ;
        console.log(typeof number1);
        console.log(number2);
        if ( task == "add" ) {
            var result = number1 + number2 ;
            //document.getElementById('addResult').innerHTML = result ; 
       } else if ( task == "sub" ) {
            result = number1 - number2 ;
       }else if ( task == "mult" ) {
            result = number1 * number2 ;
       }else if ( task == "div" ) {
            result = number1 / number2 ;
       } else if ( task == "mod" ){
            result = number1 % number2 ;
       }
       document.getElementById('result').innerHTML = result ; 
    }  
}

//test case 
testCalculator = (expectedResult , actualResult ) => {
    if(expectedResult == actualResult){

    } else {
        console.log( "test case failed" ) ;
    }
}

