/* Programme qui affiche la racine carrée d’un entier positif. */

function mySqrt() {
  const myArgv = process.argv.slice(2);
  const a = Number(myArgv[0]);

  if (isNaN(a) || a < 0 || myArgv[1]) {
    return "erreur";
  } else {
    return Math.sqrt(a);
  }
}
console.log(mySqrt());