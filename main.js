const numeroSenha = document.querySelector('.parametro-senha_texto');
const botoes = document.querySelectorAll('.parametro-senha_botao');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

function diminuiTamanho () {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;}
        numeroSenha.textContent = tamanhoSenha;
        geraSenha ();
        classificaSenha();
}

function aumentaTamanho () {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;}
        numeroSenha.textContent = tamanhoSenha;
        geraSenha ();
        classificaSenha ();
}

botoes [0].onclick = diminuiTamanho;
botoes [1].onclick = aumentaTamanho;

const campoSenha = document. querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
for (i=0; i < checkbox.length; i++){
    checkbox [i].onclick = geraSenha;
}

const letrasMaiuculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#%*?&$';

function geraSenha () {
    let alfabeto = '';
    if (checkbox[0].checked) {
    alfabeto = alfabeto + letrasMaiuculas
}
if (checkbox[1].checked){
    alfabeto = alfabeto + letrasMinusculas;
}
if (checkbox[2].checked){
    alfabeto = alfabeto + numeros;
}
if (checkbox[3].checked){
    alfabeto = alfabeto + simbolos;
}

console.log(alfabeto);
let senha = '';
for (let i = 0; i < tamanhoSenha; i++) {
    let numeroAleatorio = Math.random() * alfabeto.length;
    numeroAleatorio = Math.floor(numeroAleatorio);  
    senha = senha + alfabeto[numeroAleatorio];
}
campoSenha.value = senha;
classificaSenha ();
}

const forçaSenha = document.querySelector ('.força');

function classificaSenha() {
    forçaSenha.classList.remove("fraca","media","forte");
    if (tamanhoSenha > 11) {
        forçaSenha.classList.add ("forte");
    } else if ( tamanhoSenha > 5 && tamanhoSenha < 12) {
        forçaSenha.classList.add("media");
    } else if (tamanhoSenha < 6) {
        forçaSenha.classList.add("fraca");
    }
}
