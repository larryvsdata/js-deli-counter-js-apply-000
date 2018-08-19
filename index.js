var katzDeliLine=[]


function takeANumber(currentLine,name){
  katzDeliLine[currentLine-1]=name;
  return "Welcome, "+name+". Youare number "+currentLine+" in line.";
}