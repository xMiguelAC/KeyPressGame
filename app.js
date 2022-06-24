console.log("conectado jevi");

let Teclas = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]

const board = document.getElementById("board");
let letter = document.querySelector("#board span");
let counter = document.querySelector(".section .title span");
let life = document.querySelector(".life span");
let point = 0;
let vida = 3;
let corazon;
let finish = false;
let timing = 2500; 
let h6 = document.getElementById("h6");
let hs = document.querySelector("h3 span");
let hsp;
// console.log(hs);

let vidas = {
    full: "❤️❤️❤️",
    mid: "❤️❤️",
    low: "❤️",
    empty: "☠️"
}


if (typeof(Storage) !== 'undefined') {
    console.log("hay storage")
    hsp = sessionStorage.highScore;
    hs.innerHTML = hsp;
    console.log("high score:"+hsp)
    if (hsp == undefined){
        hsp = 0;
        console.log("high score:"+hsp)
    }
  } else {
   console.log("no hay storage")
  }


function changeLetter(letter){
    randomLetter = Teclas[Math.floor(Math.random() * Teclas.length)];
    letter.innerHTML = randomLetter;
    h6.innerHTML = "";
    
}

    let timer = setInterval(() => {
        changeLetter(letter);
    }, timing); 


let tecla = addEventListener("keypress", function Press(event){
    let press = event.key.toUpperCase();
    let letra = letter.innerHTML

    if (press == letra){
        point++
        timing = timing-100
        counter.innerHTML = point;
        changeLetter(letter);
    } else {
        console.log("no es igual");
        vida--

        if (vida == 3){
            corazon = vidas.full
        } else if (vida == 2){
            corazon = vidas.mid
        } else if (vida == 1) {
            corazon = vidas.low
        } else {

            if (point > parseInt(hsp)){
                sessionStorage.highScore = point;
                hsp = sessionStorage.highScore;
                hs.innerHTML = hsp;
            } else {
                console.log("no se actualizara el high score... TONTO!!")
            }

            corazon = vidas.empty;
            letter.innerHTML = "GAME OVER!";
            h6.innerHTML = "Click para reiniciar!";
            clearInterval(timer)
            finish = true;
        }
        life.innerHTML = corazon
    }
})

let click = addEventListener("click", function Clicado(event) {
    
    if(finish == true){
        console.log("dio click")
        point = 0;
        counter.innerHTML = point;
        vida = 3;

        if(event.target.innerHTML == "GAME OVER!" || event.target.innerHTML == "Click para reiniciar!"){
            location.reload();
        }
    }
})
