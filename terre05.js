/* Un programme qui affiche le résultat et le reste d’une division entre deux nombres. */

function myDiv() {
  const a = process.argv[2];
  const b = process.argv[3];

  /* parsing */
  if (!a || !b || isNaN(Number(a)) || isNaN(Number(b)) || process.argv[4])
    return "Erreur : donner deux nombres en argument pour avoir la division (./node terre05.js 'a' 'b')";

  let result = Math.floor( a/ b);
  let rest = a % b;
  
  if (result == 0 || b == 0)
    return "Erreur : division par 0 ou  a < b";
  return ('resultat: ' +  result + '\nreste: ' +  rest);

}

console.log(myDiv());