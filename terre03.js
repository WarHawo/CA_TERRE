/* un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.
*/

function alphabetAt() {

  const myArgv = process.argv[2];
  let abc = [];

  if (!myArgv || myArgv.length > 1)
    return "Erreur: donnez en argument une lettre minuscules";
  let i = myArgv.charCodeAt(0);

  if ((i > 97 && i < 122)){ 
    for (; i <= 122 ; i++) {
      abc += String.fromCharCode(i);
    }
    return (abc);
  }
  return "Erreur: seulement une lettre en miniscule est acceptée"
}

console.log(alphabetAt());