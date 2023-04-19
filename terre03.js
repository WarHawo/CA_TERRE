/* un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.
*/

function alphabetAt() {
  const  myArgv = process.argv.slice(2)
  const letter = myArgv[0];
  let abc = [];
  let i = letter.charCodeAt(0);

  if ((letter.length > 1) || (i < 97 || i > 122)){ 
    return "Please enter a minisul letter "
  } else {
    for (; i <= 122 ; i++) {
      abc += String.fromCharCode(i);
    }
  }
  return (abc);
}

console.log(alphabetAt());