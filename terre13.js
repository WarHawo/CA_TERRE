/* programme qui prend en paramètre trois entiers et affiche la valeur du milieu.*/

function suisse()
{
  const arg = process.argv.slice(2);
  let a = Number(arg[0]);
  let b = Number(arg[1]);
  let c = Number(arg[2]);

  if (!arg || arg.length != 3)
    return "Erreur: entrer en paramètre au moins deux entiers différents";
  
  if (isNaN(a) || isNaN(b) || isNaN(c))
    return "Erreur: entrer en paramètre au moins deux entiers différents";
  if (a == b && b == c)
    return "Erreur: entrer en paramètre au moins deux entiers différents";
  if ((a <= b) && (b <= c) || (c <= b) && (b <= a))
    return b;
  else if ((b <= a) && (a <= c) || (c <= a) && (a <= b))
    return a;
  else
    return c;
}

console.log(suisse());