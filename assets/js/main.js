//seleciona o formulário e o coloca dentro de uma constante
const form = document.querySelector("#formulario");

//essa função evita que o evento padrão ocorra ao usar o submit
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputPeso = Number(e.target.querySelector("#peso").value);
    const inputAltura = Number(e.target.querySelector("#altura").value);

   const peso = inputPeso;
   const altura = inputAltura;
    

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNiveisImc(imc);
    const msg = `Seu imc é ${imc} ${nivelImc}.`;
    setResultado(msg, true);
    
});

function getNiveisImc(imc) {
    const niveis = ["Abaixo do peso", "Peso normal", "Sobrepeso", 
    "Obesidade grau 1" , "Obesidade grau 2" , "Obesidade grau 3"];

    if (imc >= 39.9) return niveis[5];
    if (imc >= 34.9) return niveis[4];
    if (imc >= 29.9) return niveis[3];
    if (imc >= 24.9) return niveis[2];
    if (imc >= 18.5) return niveis[1];
    if (imc < 18.5) return niveis[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}

//evento que adiciona o resultado dentro do html
function setResultado(mensagem, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = " ";
    const p = criaP();

    if (isValid) {
        p.classList.add("paragrafo-resultado");
    } else {
        p.classList.add("bad");
    }
    p.innerHTML = mensagem;
    resultado.appendChild(p);
}

