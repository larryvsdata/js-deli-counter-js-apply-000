var katzDeliLine=[]


function takeANumber(currentLine,name){
  katzDeliLine[currentLine-1]=name;
  return "Welcome, "+name+". You are number "+currentLine+" in line.";
}