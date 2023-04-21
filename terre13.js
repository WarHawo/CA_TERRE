/* programme qui prend en paramètre trois entiers et affiche la valeur du milieu.*/

function suisse(arg)
{
  if (!arg || arg.length != 3)
    return "Erreur: entrer en paramètre trois entiers différents";

  let a = Number(arg[0]);
  let b = Number(arg[1]);
  let c = Number(arg[2]);
  
  if (isNaN(a) || isNaN(b) || isNaN(c))
    return "Erreur: entrer en paramètre trois entiers différents";
  if (a == b || b == c)
    return "Erreur: entrer en paramètre trois entiers différents";
  if ((a < b) && (b < c) || (c < b) && (b < a))
    return b;
  else if ((b < a) && (a < c) || (c < a) && (a < b))
    return a;
  else
    return c;
}

const arg = process.argv.slice(2);
console.log(suisse(arg));