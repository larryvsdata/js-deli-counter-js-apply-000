var katzDeliLine=[]
var =0;

function takeANumber(currentLine,name){
  
  katzDeliLine[currentLine]=name;
  currentLine+=1;
  return "Welcome, "+name+". You are number "+ currentLine +" in line.";
}