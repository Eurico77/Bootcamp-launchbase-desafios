/*==========================================
Crie um programa que armazena um array de usuários (objetos),
 cada usuário tem um nome e suas tecnologias
*/

const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] },
];



/*
Fazer uma varredura no array e verifique se o usuario ttrabalha com css ou não

 */

function checkaTrabalhaComCss(usuario) {
  for (let tecnologia of usuario.tecnologias) {
    const encontrei = tecnologia === 'CSS'
    if(encontrei){
      return true
    }
  }
  return false

}



for (let usuario of usuarios) {
  const checkar = checkaTrabalhaComCss(usuario);
  console.log(usuario.nome)
  console.log(checkar)
}


