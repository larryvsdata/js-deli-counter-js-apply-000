var katzDeliLine=[]


function takeANumber(currentLine,name){
  
  katzDeliLine[currentLine]=name;
  
  return "Welcome, "+name+". You are number "+ currentLine +" in line.";
}