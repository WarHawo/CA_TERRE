/* un programme qui affiche le résultat d’une puissance. L'exposant ne peut pas etre*/

function myExp() {
  const myArgv = process.argv.slice(2);
  const a = Number(myArgv[0]);
  const b = Number(myArgv[1]);

  if (isNaN(a) || isNaN(b) || b < 0 || myArgv[2]) {
    return "erreur";
  } else {
    return a ** b;
  }
}
console.log(myExp());