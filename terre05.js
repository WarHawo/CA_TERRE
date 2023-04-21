/* Un programme qui affiche le résultat et le reste d’une division entre deux nombres. */

function myDiv(myArgv) {
  const a = myArgv[0];
  const b = myArgv[1];

  let result = Math.floor(a / b);
  let reste = a % b ;

  if ( !myArgv || myArgv[2] || isNaN(result) )
    return "Erreur : donner deux nombres en argument pour avoir la division (./node terre05.js 'a' 'b')";
  if ( result == 0 || b == 0 || myArgv[2] ) {
    return "Erreur : division par 0 ou  a < b";
  }
  return ('resultat: ' +  result + '\nreste: ' +  reste);
}


const myArgv = process.argv.slice(2);
console.log(myDiv(myArgv));