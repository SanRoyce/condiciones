function marcar(){

let img = document.querySelector('img');

if(img.className == 'no_border'){
    img.className = 'red_border'
    img.src = 'https://cdn-icons-png.flaticon.com/512/61/61355.png'
}else{
    img.className = 'no_border'
    img.src = 'https://cdn-icons-png.flaticon.com/512/44/44622.png'
}

}