/* Programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h. */

/* if heure supp à 12 faire heure -12 et rajouter PM sinon juste rajouter AM*/

function transformTo12(myArgv) {
  let hour = "";
  let minute = "";
  let token = ":";
  
  if (!myArgv || myArgv.length !== 5 || (myArgv.indexOf(token) == -1))
    return "Erreur: entrez en argument une heure en format 24h (node ./terre11.js '12:34')";
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
    return "Erreur: entrez en argument une heure en format 24h (node ./terre11.js '12:34')";
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

const argvOutPut = process.argv.slice(2);
const myArgv = argvOutPut[0];
console.log( transformTo12(myArgv));