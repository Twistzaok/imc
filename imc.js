const Enviar = document.getElementById('Enviar');

function CalcularIMC () {
    const Nome = document.getElementById('Nome').value;
    const Altura = document.getElementById('Altura').value;
    const Peso = document.getElementById('Peso').value;
    const Resultado = document.getElementById('Resultado');

    if (Nome !== '' && Altura !== '' && Peso !== '') {
        const IMC = (Peso / (Altura * Altura)).toFixed(1);
        let IMCClasse = '';

        if (IMC < 18.5){
            IMCClasse = 'Abaixo do Peso';
        }else if (IMC < 25) {
            IMCClasse = 'Peso Ideal';
        }else if (IMC < 30){
            IMCClasse = 'Acima do Peso';
        }else if (IMC < 35){
            IMCClasse = 'Obesidade I';
        }else if (IMC < 40){
            IMCClasse = 'Obesidade II';
        }else {
            IMCClasse = 'Obesidade III';
        }

        Resultado.textContent = `${Nome}, seu resultado é: ${IMC}, sendo considerado: ${IMCClasse}`;
    }else {
        Resultado.textContent = 'Preencha todos os campos.';
    }
}

Enviar.addEventListener('click', CalcularIMC);