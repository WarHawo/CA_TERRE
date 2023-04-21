/* Programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.
*/

function inversStr() {
  const argOutput = process.argv.slice(2);
  const myArgv = argOutput[0];

  if (isNaN(Number(myArgv)) && myArgv && !argOutput[1])
    return myArgv.length;
  else
    return "Erreur: seulement une seule chaîne de caractères est autorisée en argument";
}

console.log(inversStr());