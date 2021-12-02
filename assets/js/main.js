let check3 = document.querySelector("#input1");
let check5 = document.querySelector("#input2");
let check7 = document.querySelector("#input3");
let custom = document.querySelector("#input4");
let input = document.querySelector("#input");
let output = document.querySelector("#output");
let secretInput = document.querySelector("#secretInputField");
let btn = document.querySelector("#btn")
let tryy = document.querySelector("#trys")
let versuche = document.querySelector("#versuche")
let chose1 = document.querySelector("#chose1")
let container = document.querySelector("#container")

let rnd = Math.floor(Math.random() * 100);
let trys;
let endGame = 0;
let finish = 0;
if (custom.checked) {
    secretInput.style.display = "block"
}

custom.addEventListener("click", custome => {
    secretInput.style.display = "block"
})


function send() {
    endGame += 1;
    if (check3.checked) {
        trys = 3;
    }
    if (check5.checked) {
        trys = 5;
    }
    if (check7.checked) {
        trys = 7;
    }
    if (custom.checked) {
        trys = Number(secretInput.value);
    }
    if (rnd == input.value) {
        output.innerHTML = "You Win"
        btn.textContent = "New Game"
        btn.disabled = true;
    }
    if (rnd < input.value) {
        output.innerHTML += "↓"
    }
    if (rnd > input.value) {
        output.innerHTML += "↑"
    }
    if (endGame == trys) {
        output.innerHTML = "Game Over"
        btn.disabled = true;
    }


    console.log(rnd);
    output.innerHTML += input.value + "<br>";
    tryy.style.display = "block";
    chose1.style.display = "none"
    input.value = ""

    versuche.textContent = trys





};