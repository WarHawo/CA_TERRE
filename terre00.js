/* Programme qui affiche l’alphabet en lettres minuscules suivi d’un retour à la ligne. 
** J'utilise le code ASCII des carctere 
*/

function alphabet() {
  let abc = [];

  for (let i = 97; i < 123 ; i++) {
    abc += String.fromCharCode(i);
  }
  return abc;
}

console.log(alphabet())