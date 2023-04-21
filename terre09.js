/* Programme qui affiche la racine carrée d’un entier positif. */

function mySqrt(myArgv) {
  const a = Number(myArgv[0]);

  if (isNaN(a) || a < 0 || myArgv[1]) {
    return "Erreur : donnez un chiffre positif en argument";
  } else {
    return Math.sqrt(a);
  }
}

const myArgv = process.argv.slice(2);
console.log(mySqrt(myArgv));