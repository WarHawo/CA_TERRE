/* Programme qui affiche si un nombre est premier ou pas.
 */

function isPremier(myArgv) {
  const n = Number(myArgv[0]);

  if (isNaN(n) || myArgv[1]) {
    return "Erreur : donnez un nombre en argument";
  }
  else{
    if (n < 2)
      return "Non, " + n + " n’est pas un nombre premier.";
    for(let i = 2; i <= Math.sqrt(n); i++) {
      if ((n % i) == 0)
        return "Non, " + n + " n’est pas un nombre premier.";
    }
    return "Oui, " + n + " est un nombre premier.";
  }
} 

const myArgv = process.argv.slice(2);
console.log(isPremier(myArgv));

