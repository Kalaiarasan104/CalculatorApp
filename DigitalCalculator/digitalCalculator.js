//index2.html
appendToDisplay = ( value ) => {
    var display = document.getElementById( 'display' ) ;
    display.value += value ;
  }
calculate = () => {
    var display = document.getElementById( 'display' ) ;
    var result = eval( display.value ) ;
    display.value = result ;
  }
clearDisplay = () => {
    var display = document.getElementById( 'display' ) ;
    display.value = '' ;
  }
backspace = () => {
    var display = document.getElementById('display');
    display.value = display.value.substring(0, display.value.length - 1);
    console.log(display.value);
}