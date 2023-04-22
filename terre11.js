/* Programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h. */

/* if heure supp à 12 faire heure -12 et rajouter PM sinon juste rajouter AM*/

function transformTo12() {
  const myArgv = process.argv[2];
  let hour = myArgv[0] + myArgv[1] - 0;
  let minute = myArgv[3] + myArgv[4] - 0;
  let token =":"

  if (!myArgv || process.argv[3] || myArgv.length !== 5 || !myArgv.indexOf(token))
    return 'Erreur: entrez en argument une heure en format 24h (node ./terre11.js "12:34")';
  if (isNaN(hour) || isNaN(minute) || hour > 23 || minute > 59)
    return 'Erreur: entrez en argument une heure en format 24h (node ./terre11.js "12:34")';
  
  if (hour== 12)
     return hour + token + minute + " PM";
  else if (hour == 00)
    return 12 + token + minute + " AM";
  else if (hour > 12) {
    hour = hour - 12;
    return hour + token + minute + " PM";
  }
  return hour + token + minute + " AM";
}

console.log( transformTo12());