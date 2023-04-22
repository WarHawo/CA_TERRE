/* Un programme qui affiche son nom de fichier */

function printName() {
  const myArgv = process.argv[1];
  let title = myArgv.split('/');
  
  let result = title[title.length - 1]; 

  return result;
}


console.log(printName());

/* process.argv.slice(1) retourne un table contenant les arguments tab[0]=chemin du fichier tab[1] = premier argument */
