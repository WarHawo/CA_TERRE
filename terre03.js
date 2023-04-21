/* un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.
*/

function alphabetAt() {
  const  argOutput = process.argv.slice(2)
  const myArgv = argOutput[0];
  let abc = [];
  if (!myArgv || argOutput[1])
    return "erreur";
  let i = myArgv.charCodeAt(0);

  if ((myArgv.length > 1) || (i < 97 || i > 122)){ 
    return "Seulement une lettres en miniscules est acceptée"
  } else {
    for (; i <= 122 ; i++) {
      abc += String.fromCharCode(i);
    }
  }
  return (abc);
}

console.log(alphabetAt());