var katzDeliLine=[]
var currentLine=0;

function takeANumber(katzDeliLine,name){
  
  katzDeliLine[currentLine]=name;
  currentLine+=1;
  return "Welcome, "+name+". You are number "+ currentLine +" in line.";
}