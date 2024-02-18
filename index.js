let concluidoEL = document.querySelector("#concluido");
let bolinhaEL = document.querySelector("#bolinha");
let inputEL = document.querySelector("#inome");
let nomeEL = document.querySelector("#nome");
let userEL = document.querySelector("#user");
let statusEL = document.querySelector("#status");
let limparEL = document.querySelector("#remover");
let icpfEL = document.querySelector("#icpf");
let cpfEL = document.querySelector("#cpf");

function func() {
	bolinhaEL.classList.toggle("none");
  if(inputEL.value === '') {
  	setTimeout(function() {inputEL.placeholder = 'Insira o nome aqui'; bolinhaEL.classList.toggle("none");}, 437);
  } else if (icpfEL.value.length != 11) {
  	setTimeout(function() {icpfEL.value = ''; icpfEL.placeholder = 'CPF invalido'; bolinhaEL.classList.toggle("none");}, 1000);
  } else {
  	setTimeout(function(){bolinhaEL.classList.toggle("none"); userEL.classList.remove("none"); nomeEL.innerHTML = 'Nome: ' + inputEL.value; limparEL.classList.toggle("none"); statusEL.classList.toggle("green"); statusEL.classList.toggle("red"); statusEL.innerHTML = 'Status: Nome sujo'; cpfEL.innerHTML = 'CPF:' + icpfEL.value}, 7500);
}
  
}
//inputEL.placeholder = "Nome retirado com sucesso!";
function ret() {
	bolinhaEL.classList.toggle("none");
	setTimeout(function(){bolinhaEL.classList.toggle("none"); statusEL.innerHTML = 'Status: Nome limpo'; statusEL.classList.toggle("green"); statusEL.classList.toggle("red"); inputEL.placeholder = "Nome retirado com sucesso!"; inputEL.value = ''; icpfEL.value = '';limparEL.classList.toggle("none") }, 7500);
}
