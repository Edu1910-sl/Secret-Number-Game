let listNumberRandom = [];
let limitNumber = 10;
let secretNumber = generateRamdomNumber();
let Try = 1;

function exibirTextoNaTela(tag, texto) {
let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

function exibirMensagemInicial () {
       exibirTextoNaTela("h1", "secret number game");
       exibirTextoNaTela("p", "choices a number between 1 to 10");
}

function verificarChute() {
let chute = document.querySelector("input").value;
    
    if(chute == secretNumber) {
        exibirTextoNaTela ("h1", "That's right!");
let palavraTry = Try> 1? "attempt" : "attempts";
let mensagemTry = `you found the secret number with ${Try} ${palavraTry} !`;
        exibirTextoNaTela ("p", mensagemTry );
        document.getElementById("reiniciar").removeAttribute("disabled");
    } 
     else {
    if (chute>secretNumber) {
         exibirTextoNaTela("p", "the secret number is smaller");
           
    }
     else{
        exibirTextoNaTela("P", "the secret number is bigger");
      }
      Try++;
      cleanBoard();
    }
}

function generateRamdomNumber() {
let numberChoice = parseInt(Math.random() * limitNumber + 1);
    let QuantidaEeElementosListas = listNumberRandom.length;

      if (QuantidaEeElementosListas == limitNumber) {
          listNumberRandom =[];
}

      if(listNumberRandom.includes(numberChoice)) {
         return generateRamdomNumber();
    }else{
      listNumberRandom.push(numberChoice);
      console.log(listNumberRandom)  
      return numberChoice;  
    }
}

function cleanBoard() {
    chute = document.querySelector('input');
    chute.value = "";
}

function reiniciarJogo (){

   secretnumber = generateRamdomNumber ();
   cleanBoard();
   Try = 1;
   exibirMensagemInicial();
   document.getElementById("reiniciar").setAttribute("disable",true);

}