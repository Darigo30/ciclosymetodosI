//Llamado de botones
const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");

let num;

const sw = n => {
  switch (n) {
    //Ejercicio 1
    case 1:
    let numerito = Number(prompt("Introduce un número entre el 1 y el 100"));
    if(numerito <= 100){
        for(let i = 0; i <= numerito; i++){
            console.log("El número ingresado es", i);
        };
    } else if (isNaN(numerito)){
        alert("No es un número");
    }
    else{
        alert("El número ingresado es mayor que 100");
    };
        break;
    //Ejercicio 2
    case 2:
      let caballo = "";
        do{
            caballo = prompt("¿De qué color es el caballo blanco de Napoleón?");
        }
        while(!(caballo.trim().toLowerCase() == "blanco"));
        alert ("El caballo de Napoleón es blanco obviooo");
        break;
    //Ejercicio 3
    case 3:
        let mates = Number.parseInt(prompt("¿Cuál es tu promedio en Matemáticas?"));
        let fis = Number.parseInt(prompt("¿Cuál es tu promedio en Física"));
        let cien = Number.parseInt(prompt("¿Cuál es tu promedio en Ciencias?"));
        let div = 3;
            const promediar = (p1, p2, p3, div) =>
            (p1 + p2 + p3)  / div;
            alert("Tu promedio total es de" + " " + Math.trunc(promediar(mates,fis,cien, div)));
        break;
    //Ejercicio 4
    case 4:
        let frutauno = (prompt("Ingrese una fruta por favor"));
        let frutados = (prompt("Ingrese otra fruta por favor"));
        let frutatres = (prompt("Solo otra fruta más :) y listo"));
        let frutarr = [frutauno, frutados, frutatres];
            for (let frutita of frutarr){
                if((frutita).trim().toLowerCase()!== "manzana"){
                    console.log(frutita);
                }
            }
        break;
    //Ejercicio 5
    case 5:
        let nombrecito = (prompt("Hola escribe tu nombre y te diremos cuantas vocales y consonantes tiene"));
        let numeroVocales = nombrecito.match(/[aeiou]/gi).length;
        let numeroTotal = nombrecito.match(/[a-z]/gi).length;
        let numeroConson = numeroTotal - numeroVocales;
            alert("Tu nombre tiene" + " " + numeroVocales + " " + "vocales" + " " + "y" + " " + numeroConson + " " + "consonantes");
        break;
  }
}
//Eventos que accionan el click
uno.addEventListener("click", () => {
    num = 1
    sw(num);
});
dos.addEventListener("click", () => {
    num = 2
    sw(num);
});
tres.addEventListener("click", () => {
    num = 3
    sw(num);
});
cuatro.addEventListener("click", () => {
    num = 4
    sw(num);
  });
cinco.addEventListener("click", () => {
    num = 5
    sw(num);
});



