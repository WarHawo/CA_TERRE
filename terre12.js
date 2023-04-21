function transformTo24() {
  const argvOutPut = process.argv.slice(2);
  const myArgv = argvOutPut[0];

  let hour = "";
  let minute = "";
  let token = ":";
  
  if(!myArgv)
    return "erreur";
  if (myArgv.length !== 7 || (myArgv.indexOf(token) == -1)) {
    return "erreur: mauvais format";
  }
  if ((myArgv.indexOf("AM") == -1) && (myArgv.indexOf("PM") == -1)) {
    return "mauvais format";
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
    return "erreur: veuillez rentrer une vrai heure";
  }

 if (Number(hour) > 13)
      return "erreur: mauvais format";
  if (myArgv.indexOf("AM") == -1) //heure format 02:50P.M
  {
    if (Number(hour) == 12) {
      hour = 0;
     return hour + token + minute;
    }
    if (Number(hour) == 0)
      return "erreur: mauvais format";
    if (Number(hour) < 12)
      hour = Number(hour) + 12;
    return hour + token + minute;
  }
    return hour + token + minute;
}

console.log( transformTo24())