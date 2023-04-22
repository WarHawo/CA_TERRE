/* un programme qui affiche les arguments qu’il reçoit ligne par ligne, peu importe le nombre d’arguments.
*/

function printArg () {
  const myArgv = process.argv.slice(2);
  for (let i = 0 ; i < myArgv.length ; i++) {
    console.log(myArgv[i]);
  }
}

printArg();

/* process.argv.slice(2) retourne un tableau contenant tous les arguments */