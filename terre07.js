/* Programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.
*/

function inversStr() {
  const myArgv = process.argv[2];

  if (isNaN(Number(myArgv)) && myArgv && !process.argv[3])
    return myArgv.length;
  else
    return "Erreur: seulement une seule chaîne de caractères est autorisée en argument";
}

console.log(inversStr()); 