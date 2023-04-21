/* Un programme qui affiche son nom de fichier */

function printName() {
  let result = "" ; 
  const myArgv = process.argv.slice(1);
  let title = myArgv[0].split('/');
  
  result = title[title.length - 1]; 

  return result;
}


console.log(printName());

/* process.argv.slice(1) retourn un table contenant les aguments tab[0] chemin du fichier tab[1] = premier argument */