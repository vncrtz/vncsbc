let concluidoEL = document.querySelector("#concluido");
let bolinhaEL = document.querySelector("#bolinha");
let inputEL = document.querySelector("#inome");
let nomeEL = document.querySelector("#nome");
let userEL = document.querySelector("#user");
let statusEL = document.querySelector("#status");
let limparEL = document.querySelector("#remover");

function func() {
	bolinhaEL.classList.toggle("none");
  if(inputEL.value === '') {
  	setTimeout(function() {inputEL.placeholder = 'Insira o nome aqui'; bolinhaEL.classList.toggle("none");}, 437);
  } else {
  	setTimeout(function(){bolinhaEL.classList.toggle("none"); userEL.classList.remove("none"); nomeEL.innerHTML = 'ㅤㅤㅤㅤㅤNome: ' + inputEL.value; limparEL.classList.toggle("none"); statusEL.classList.toggle("green"); statusEL.classList.toggle("red"); statusEL.innerHTML = 'ㅤㅤㅤㅤㅤStatus: Nome sujo'}, 7500);
}
  
}
//inputEL.placeholder = "Nome retirado com sucesso!";
function ret() {
	bolinhaEL.classList.toggle("none");
	setTimeout(function(){bolinhaEL.classList.toggle("none"); statusEL.innerHTML = 'ㅤㅤㅤㅤㅤStatus: Nome limpo'; statusEL.classList.toggle("green"); statusEL.classList.toggle("red"); inputEL.placeholder = "Nome retirado com sucesso!"; inputEL.value = ''; limparEL.classList.toggle("none") }, 7500);
}
