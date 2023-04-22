/* programme qui détermine si une liste d’entiers est triée ou pas.
*/

function triee()
{
  const arg = process.argv.slice(2);
  let num = [];

  if (!arg[1])
    return "Erreur: entrer en paramètre des entiers";
  for (let i = 0, j = 0; i < arg.length; i++) {
    num[j]= Number(arg[i]);
    j++;
    if (isNaN(Number(arg[i])))
      return "Erreur: entrer en paramètre des entiers";
  }
  if (num[0] > num[1]) {
    for (let i = 1; i < num.length - 1 ; i++) {
      if (num[i] < num[i + 1])
        return "Pas triée !";
    }
  }
  else if (num[0] <= num[1])
  { 
    for (let i = 1; i < num.length - 1 ; i++) {
      if (num[i] > num[i + 1])
        return "Pas triée !";
    }
  }
  return "Triée !"
}

console.log(triee());