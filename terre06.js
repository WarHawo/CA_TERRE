/* Programme qui affiche l’inverse de la chaîne de caractères donnée en argument. */

function inversStr() {
  const argOutput = process.argv.slice(2);
  const myArgv = argOutput[0];
  let result = "";

  if (argOutput[1] || !myArgv ) {
    return "only one argument is autorized"
  } else {
    for (let i = (myArgv.length) -1  ; i >= 0 ; i--) {
        result += myArgv[i];
      }
  }
  return result;
}

console.log(inversStr());