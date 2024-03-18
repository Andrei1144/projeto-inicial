var botao = document.getElementById("botao");
botao.addEventListener("click", alertar);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var cep = document.getElementById("cep");
var logadouro = document.getElementById("logadouro");
var numero = document.getElementById("numero");
var complemento = document.getElementById("complemento");
var bairro = document.getElementById("bairro");
var cidade = document.getElementById("cidade");
var estado = document.getElementById("estado");


function alertar(){
    //alert(nome.value + " Clicou no botao!!!");
    saida.innerText = "Nome: " + " " + nome.value+ 
                      "\n E-mail: "+ " " + email.value+
                      "\n Telefone: "+ " " + telefone.value+
                      "\n CEP: "+ " " + cep.value+
                      "\n Logadouro: "+ " " + logadouro.value+
                      "\n Numero: "+ " " + numero.value+
                      "\n Complemento: "+ " " + complemento.value+
                      "\n bairro: "+ " " + bairro.value+
                      "\n cidade: "+ " " + cidade.value+
                      "\n estado: "+ " " + estado.value;
}