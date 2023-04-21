/* Programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h. */

/* if heur suppérieur à 12 faire heure -12 et rajouter PM sinon juste rajouter AM*/

function transformTo12() {
  const argvOutPut = process.argv.slice(2);
  const myArgv = argvOutPut[0];

  let hour = "";
  let minute = "";
  let token = ":";
  
  if (myArgv.length !== 5 || (myArgv.indexOf(token) == -1)) {
    return "erreur: mauvais format";
  }
  for(let i = 0; i < myArgv.length ; i++) {
    if (myArgv[i] !== token && hour.length < 2)
      hour += myArgv[i];
    if(myArgv[i] == token && myArgv[i + 1]) {
      i++;
      minute += myArgv[i];
      if (myArgv[i + 1])
          minute += myArgv[i + 1];
    }
  }
  if (isNaN(Number(hour)) || isNaN(Number(minute))
      || (Number(hour) > 23 || Number(minute) > 59)) {
    return "erreur: veuillez rentrer des chiffres";
  }
  if (Number(hour) > 12) {
    hour = Number(hour) - 12;
    return hour + token + minute + " PM";
  }
  else if (Number(hour) == 12)
     return hour + token + minute + " PM";
  else if (Number(hour) == 00)
    return 12 + token + minute + " AM";

  return hour + token + minute;
}

console.log( transformTo12())