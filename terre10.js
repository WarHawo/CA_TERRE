/* Programme qui affiche si un nombre est premier ou pas.
 */

function isPremier() {
  const myArgv = process.argv.slice(2);
  const n = Number(myArgv[0]);

  if (isNaN(n) || myArgv[1]) {
    return "erreur";
  }
  else{
    if (n < 2) {
      return "Non, " + n + " n’est pas un nombre premier.";
    }
    for(let i = 2; i <= Math.sqrt(n); i++) {
      if ((n % i) == 0) {
        return "Non, " + n + " n’est pas un nombre premier.";
      }
    }
    return "Oui, " + n + " est un nombre premier.";
  }
} 
console.log(isPremier());

