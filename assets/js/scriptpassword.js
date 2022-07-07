function ingresar() {
    value1 = document.querySelector('#select1').value;
    value2 = document.querySelector('#select2').value;
    value3 = document.querySelector('#select3').value;
    par = document.querySelector('#texto')
    let img = document.querySelector('img');

    if( (value1 + value2 + value3) == 911 ){
        par.innerHTML = 'Password 1 correcta'
        img.src = 'https://cdn-icons-png.flaticon.com/512/61/61355.png'
    }else if((value1 + value2 + value3) == 714 ){
        par.innerHTML = 'Password 2 correcta'
        img.src = 'https://cdn-icons-png.flaticon.com/512/61/61355.png'

    }
    else{
        par.innerHTML = 'Password incorrecta'
        img.src = 'https://cdn-icons-png.flaticon.com/512/44/44622.png'

    }
}
