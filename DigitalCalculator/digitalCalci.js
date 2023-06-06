//index.html
insert = ( num ) => {
document.calculator.input.value +=  num ;
}
equal = () => {
    var exp = document.calculator.input.value ;
    console.log( exp ) ;
    if( exp ){
        document.calculator.input.value = eval( exp ) ;
        console.log( document.calculator.input.value ) ;
    }
}
backspace = () => {
    var exp = document.calculator.input.value ;
    console.log( exp ) ;
    document.calculator.input.value = exp.substring( 0 , exp.length - 1 ) ;
    console.log( exp ) ;
}
clear = () => {
    //var exp = ' ' ;
    //var exp = document.calculator.input.value ;
    //console.log(exp);
    document.calculator.input.value = ' ' ;
    //console.log(exp);
}