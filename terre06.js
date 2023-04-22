/* Programme qui affiche l’inverse de la chaîne de caractères donnée en argument. */

function inversStr() {
  const myArgv = process.argv[2];
  let result = "";

  if (!myArgv || process.argv[3])
    return "Erreur: seulement une seule chaîne de caractères est autorisée en argument";

  for (let i = (myArgv.length) -1  ; i >= 0 ; i--) {
      result += myArgv[i];
    }
  return result;
}

console.log(inversStr());