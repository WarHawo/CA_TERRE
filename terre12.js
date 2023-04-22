/* programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h. */

function transformTo24() {
  const myArgv = process.argv[2];
  let hour = myArgv[0] + myArgv[1] - 0;
  let minute = myArgv[3] + myArgv[4] - 0;
  let token = ":"
  
  if (!myArgv || process.argv[3] || myArgv.length !== 7 || !myArgv.indexOf(token))
    return 'Erreur: entrez en argument une heure en format 12h (node ./terre11.js "12:34PM")';
  if (isNaN(hour) || isNaN(minute) || hour > 23 || minute > 59)
    return 'Erreur: entrez en argument une heure en format 12h (node ./terre11.js "12:34PM")';
  if ((myArgv.indexOf("AM") == -1) && (myArgv.indexOf("PM") == -1))
    return 'Erreur: entrez en argument une heure en format 12h (node ./terre11.js "12:34PM")';

    if (myArgv.indexOf("AM") == -1) //heure format 02:50PM
  {
    if (hour == 0)
      return "Erreur: 00:00PM n'existe pas c'est 00.00AM"
    else if (hour == 12)
      return "00" + token + minute;
    else if (hour < 12)
      hour += 12;
    return hour + token + minute;
  }
  if (hour > 12)
    return "Erreur: remplacer AM par PM";
  return hour + token + minute;


}
console.log(transformTo24());