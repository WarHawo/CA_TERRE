/* programme qui détermine si une liste d’entiers est triée ou pas.
*/

function suisse(arg)
{
  let num = [];
  if (!arg)
    return "Erreur: entrer en paramètre des entiers";
  for (let i = 0, j = 0; i < arg.length; i++) {
    num[j]= Number(arg[i]);
    j++;
    if (isNaN(Number(arg[i])))
      return "Erreur: entrer en paramètre des entiers";
  }
  for (let i = 0; i < num.length - 1 ; i++) {
    if (num[i] > num[i + 1])
      return "Pas triée !";
  }
  return "Triée !"
}

const arg = process.argv.slice(2);
console.log(suisse(arg));