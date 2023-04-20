/*  programme qui permet de déterminer si l’argument donné est un entier pair ou impair*/

function pairImpair() {
  const argOutput = process.argv.slice(2)
  const myArgv = argOutput[0];
  
  let num = Number(myArgv);
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

/* Number(myArgv) convertie tous les chiffre en number si lettre type devient Nan alors que ParseInt(myArgv) estime le type du premier cactere exemple typeOf(1abc) = number 
*/