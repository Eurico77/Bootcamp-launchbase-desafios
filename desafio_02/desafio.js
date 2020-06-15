//Desafios para fortalecer alguns conceitos, entre eles:
//Objetos;
//Vetores.

const empresa = {
  Nome: " Rocketseat",
  Cor: "Roxo",
  Foco: "Programação",
  Endereco: {
    Rua: "Rua Guilherme Gembala",
    Número: "260",
  },
};

console.log(
  ` a empresa ${empresa.Nome} esta localizada em ${empresa.Endereco.Rua}, ${empresa.Endereco.Número}`
);

const programadores = {
  nome: "Eurico",
  idade: 22,
  tecnologias: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "Python", especialidade: "Data Science" },
    { nome: "JavaScript", especialidade: "Web/Mobile" },
  ],
};

console.log(`o usuario ${programadores.nome} tem ${programadores.idade}
anos, e usa a tecnologia ${programadores.tecnologias[0].nome}
com especialidade em ${programadores.tecnologias[0].especialidade}
`);
