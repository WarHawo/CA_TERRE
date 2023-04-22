/* un programme qui affiche le résultat d’une puissance. L'exposant ne peut pas etre negatif*/

function myExp() {
  const a = Number(process.argv[2]);
  const b = Number(process.argv[3]);

  if (isNaN(a) || isNaN(b) || b < 0 || process.argv[4])
    return "Erreur : donner deux nombres en argument pour avoir le résultat d'une puissance. L'exposant ne peut pas etre negatif.";
  else
    return a ** b;
}

console.log(myExp());