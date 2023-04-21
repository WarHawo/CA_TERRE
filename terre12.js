function transformTo24(time) {
  let hour = "";
  let minute = "";
  let token = ":";
  
  if(!time)
    return "erreur";
  if (time.length !== 7 || (time.indexOf(token) == -1)) {
    return "erreur: mauvais format";
  }
  if ((time.indexOf("AM") == -1) && (time.indexOf("PM") == -1)) {
    return "mauvais format";
  }
  for(let i = 0; i < time.length ; i++) {
    if (time[i] !== token && hour.length < 2)
      hour += time[i];
    if(time[i] == token && time[i + 1]) {
      i++;
      minute += time[i];
      if (time[i + 1])
          minute += time[i + 1];
    }
  }
  if (isNaN(Number(hour)) || isNaN(Number(minute))
      || (Number(hour) > 23 || Number(minute) > 59)) {
    return "erreur: veuillez rentrer une vrai heure";
  }

 if (Number(hour) > 13)
      return "erreur: mauvais format";
  if (time.indexOf("AM") == -1) //heure format 02:50P.M
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


const argvOutPut = process.argv.slice(2);
const myArgv = argvOutPut[0];
console.log( transformTo24(myArgv))