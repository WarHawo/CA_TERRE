/* Programme qui affiche la racine carrée d’un entier positif. */

function mySqrt() {
  const a = Number(process.argv[2]);

  if (!Number.isInteger(a) || a < 0 || process.argv[3])
    return "Erreur : donnez un entier positif en argument";
  return a**0.5; 
}

console.log(mySqrt());