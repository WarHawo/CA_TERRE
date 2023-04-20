/* Un programme qui affiche le résultat et le reste d’une division entre deux nombres. */

function myDiv() {
  const myArgv = process.argv.slice(2);
  const a = myArgv[0];
  const b = myArgv[1];

  let result = Math.floor(a / b);
  let reste = a % b ;

  if ( isNaN(result) || result == 0 || b == 0 ) {
    return "erreur";
  } else {
    return ('resultat: ' +  result + '\nreste: ' +  reste);
  }
}

console.log(myDiv());