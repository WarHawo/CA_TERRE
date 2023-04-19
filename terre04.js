/*  programme qui permet de déterminer si l’argument donné est un entier pair ou impair*/

function pairImpair() {
  const  myArgv = process.argv.slice(2)
  const letter = myArgv[0];
  
  let num = Number(letter);
  if (!isNaN(num)) {
    if ((num % 2) == 0) {
      return "pair";
    } else {
      return "impair";
    }
  } else {
     return "Tu ne me la mettras pas à l’envers.";
    }
}

console.log(pairImpair());

/* Number(letter) convertie tous les chiffre en number si lettre type devient Nan alors que ParseInt(letter) estime le type du premier cactere exemple typeOf(1abc) = number 
*/