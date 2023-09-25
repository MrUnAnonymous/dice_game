var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector("img").setAttribute("src" , `images/dice${randomNumber1}.png`);

document.getElementById("img2").setAttribute("src" , `images/dice${randomNumber2}.png`)

if ( randomNumber1 > randomNumber2 ) {
    document.getElementById("header").innerHTML = "Player 1 wins";
} else if ( randomNumber1 < randomNumber2 ) {
    document.getElementById("header").innerHTML = "Player 2 wins";
} else {
    document.getElementById("header").innerHTML = "DRAW";
}
