const buttonO = document.querySelector(".buttonO");
const buttonX = document.querySelector(".buttonX");

let playerSign = 'O';
let computerSign = 'X';


buttonO.addEventListener("click", function() { playerSign = 'O';
                                 computerSign = 'X';
                                })
buttonX.addEventListener("click", function() { playerSign = 'X';
                                computerSign = 'O';
                               })

const button = document.querySelectorAll("table button");
const td = document.querySelectorAll("table td");

let randomArray = [];
for(let i = 0; i < 9; i++) {
  randomArray.push(i);
}


for(let i = 0; i < 9; i++) {
	button[i].addEventListener("click", write);
  
  function write() {
  
    button[i].remove;
    td[i].textContent = playerSign;
  
    if(randomArray.length > 1) {
      let c;  
      randomArray = randomArray.filter(function(arr) { return arr != i;});
      c = randomArray[Math.floor(Math.random()*randomArray.length)];
      randomArray = randomArray.filter(function(arr) { return arr != c; });
      td[c].textContent = computerSign;
    }
  }
}

