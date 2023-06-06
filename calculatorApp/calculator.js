toAdd = () => {
    //console.log(addNumber1+addNumber2);
    //return addNumber1 + addNumber2  ;
    //element = document.createElement("h3") ; 
    addNumber1 = parseInt(document.getElementById('addNumber1').value) ;
    addNumber2 = parseInt(document.getElementById('addNumber2').value) ;
    add = addNumber1 + addNumber2 ;
    let addAns = document.getElementById('addResult')
    addAns.innerHTML = add ; 
}
toSub = () => {
    subNumber1 = parseInt(document.getElementById('subNumber1').value) ;
    subNumber2 = parseInt(document.getElementById('subNumber2').value) ;
    sub = subNumber1 - subNumber2 ;
    let subAns = document.getElementById('subResult')
    subAns.innerHTML = sub ; 
}
toMult = () => {
    multNumber1 = parseInt(document.getElementById('multNumber1').value) ;
    multNumber2 = parseInt(document.getElementById('multNumber2').value) ;
    mult = multNumber1 * multNumber2 ;
    let multAns = document.getElementById('multResult')
    multAns.innerHTML = mult ; 
}
toDiv = () => {
    divNumber1 = parseInt(document.getElementById('divNumber1').value) ;
    divNumber2 = parseInt(document.getElementById('divNumber2').value) ;
    div = divNumber1 / divNumber2 ;
    let divAns = document.getElementById('divResult')
    divAns.innerHTML = div ; 
}
toMod = () => {
    modNumber1 = parseInt(document.getElementById('modNumber1').value) ;
    modNumber2 = parseInt(document.getElementById('modNumber2').value) ;
    mod = modNumber1 % modNumber2 ;
    let modAns = document.getElementById('modResult')
    modAns.innerHTML = mod ; 
}