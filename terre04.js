/*  programme qui permet de déterminer si l’argument donné est un entier pair ou impair*/

function pairImpair() {
  const myArgv = process.argv[2];

  if (!myArgv)
     return "Erreur: veuillez donner en argument un entier";

  let num = Number(myArgv);

  if (!isNaN(num) && myArgv.indexOf('.') == -1) {
    if ((num % 2) == 0) 
      return "pair";
    return "impair";
  }
  return "Tu ne me la mettras pas à l’envers.";
}

console.log(pairImpair());

/* Number(myArgv) convertie tous les chiffre en number si lettre type devient Nan alors que ParseInt(myArgv) estime le type du premier cactere exemple typeOf(1abc) = number 
*/