/* Programme qui affiche si un nombre est premier ou pas.
 */

function isPremier() {
  const n = Number(process.argv[2]);

  if (isNaN(n) || process.argv[3])
    return "Erreur : donnez un nombre en argument";

  if (n < 2)
    return "Non, " + n + " n’est pas un nombre premier.";
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if ((n % i) == 0)
      return "Non, " + n + " n’est pas un nombre premier.";
  }
  return "Oui, " + n + " est un nombre premier.";
} 

console.log(isPremier());

