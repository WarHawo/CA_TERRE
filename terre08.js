/* un programme qui affiche le résultat d’une puissance. L'exposant ne peut pas etre negatif*/

function myExp(myArgv) {
  const a = Number(myArgv[0]);
  const b = Number(myArgv[1]);

  if (isNaN(a) || isNaN(b) || b < 0 || myArgv[2]) {
    return "Erreur : donner deux nombres en argument pour avoir le résultat d'une puissance. L'exposant ne peut pas etre negatif.";
  } else {
    return a ** b;
  }
}

const myArgv = process.argv.slice(2);
console.log(myExp(myArgv));