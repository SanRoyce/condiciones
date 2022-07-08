let cantidad1 = document.querySelector("#cantidad1");
let cantidad2 = document.querySelector("#cantidad2");
let cantidad3 = document.querySelector("#cantidad3");
let result = document.querySelector("#total");

function calcular (){
let total = (Number(cantidad1.value) + Number(cantidad2.value) + Number(cantidad3.value));
result.innerHTML = total
let sobran = (total - Number(10))
let faltantes = (Number(10) - total);
if(total == 10){
    result.innerHTML = "Llevas lo necesario :)";
}else if(total > 10){
    result.innerHTML = `Excede maximo por ${sobran} stickers `
}
else if(total < 10){
    result.innerHTML= `¡Aún te faltan ${faltantes} stickers por llevar!`
}
}