/*==========================================
Crie um programa que armazena um array de usuários (objetos),
 cada usuário tem um nome e suas tecnologias


============================================*/

const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] },
];

function mostraTechs(user) {
  for (let i = 0; i < user.length; i++) {
    console.log(`o ${user[i].nome} trabalha com ${user[i].tecnologias}`);
  }
}

////////////////////////////////////////////////

// Busca por tecnologia
function checaSeUsuarioUsaCSS(usuario) {
  for (let tecnologia of usuario.tecnologias) {
    if (tecnologia == "CSS") return true;
  }
  return false;
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}

//mostraTechs(usuarios);
checaSeUsuarioUsaCSS(usuarios);
