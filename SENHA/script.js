const campoSenha = document.getElementById("campoSenha");
const botaoCopiar = document.getElementById("botaoCopiar");
const botaoGerar = document.getElementById("botaoGerar");
const tamanhoSenha = document.getElementById("tamanhoSenha");
const valorTamanho = document.getElementById("valorTamanho");

const incluirMaiusculas = document.getElementById("incluirMaiusculas");
const incluirMinusculas = document.getElementById("incluirMinusculas");
const incluirNumeros = document.getElementById("incluirNumeros");
const incluirSimbolos = document.getElementById("incluirSimbolos");
const incluirEmojis = document.getElementById("incluirEmojis");

const caracteresMaiusculos = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const caracteresMinusculos = "abcdefghijklmnopqrstuvwxyz";
const caracteresNumericos = "0123456789";
const caracteresSimbolos = "!@#$%^&*()_+[]{}|;:,.<>?";
const caracteresEmojis = "😀😂😍😎🤖👻🔥💡🎉🚀";


tamanhoSenha.addEventListener("input", () => {
    valorTamanho.textContent = tamanhoSenha.value;
});


botaoGerar.addEventListener("click", () => {
    let caracteresDisponiveis = "";
    let senhaGerada = "";

    if (incluirMaiusculas.checked) caracteresDisponiveis += caracteresMaiusculos;
    if (incluirMinusculas.checked) caracteresDisponiveis += caracteresMinusculos;
    if (incluirNumeros.checked) caracteresDisponiveis += caracteresNumericos;
    if (incluirSimbolos.checked) caracteresDisponiveis += caracteresSimbolos;
    if (incluirEmojis.checked) caracteresDisponiveis += caracteresEmojis;

    if (caracteresDisponiveis.length === 0) {
        alert("Selecione pelo menos uma opção!");
        return;
    }

    for (let i = 0; i < tamanhoSenha.value; i++) {
        senhaGerada += caracteresDisponiveis[Math.floor(Math.random() * caracteresDisponiveis.length)];
    }

    campoSenha.value = senhaGerada;
});


botaoCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(campoSenha.value)
        .then(() => alert("Senha copiada para a área de transferência!"))
        .catch(() => alert("Erro ao copiar senha!"));
});
