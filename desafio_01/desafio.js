//MANEIRA TRADICIONAL

const nome = "Carlos";
const peso = 84;
const altura = 1.88;

const imc = peso / (altura * altura);

console.log(imc.toFixed(2));


//MANEIRA MAIS OUSADA USANDO FUNÇOES
 
function calcularImc(nome, peso, altura) {
  const imc = peso / (altura * altura);
  if (imc >= 30) {
    console.log(`Prezado, ${nome} você está acima do peso! Com IMC:${imc.toFixed(2)}`);
  } else if (imc < 29.9) {
    console.log(`Prezado, ${nome} você não está acima do peso! Seu IMC:${imc.toFixed(2)}`);
  }
}

calcularImc("Eurico", 84, 1.88);



