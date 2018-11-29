var eventType = prompt("Enter the type of event you are attending:");
var tempFahr = prompt("Enter the current temperature:");
var clothingSuggestion = " ";
var becauseTemperature = " ";
var beforeResult = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear";

if(eventType === "casual" && tempFahr < 54) {
  clothingSuggestion = " something comfy.";
  becauseTemperature = " Like a coat!";
}else if( eventType === "casual" && tempFahr >= 54 && tempFahr <= 70) {
    clothingSuggestion = " something comfy.";
    becauseTemperature = " A jacket perhaps!";
}else if( eventType === "casual" && tempFahr > 70) {
    clothingSuggestion = " something comfy.";
    becauseTemperature = " No jacket needed!";
}else if(eventType === "semi-formal" && tempFahr < 54) {
  clothingSuggestion = " a polo ";
  becauseTemperature = "and a coat.";
}else if( eventType === "semi-formal" && tempFahr >= 54 && tempFahr <= 70) {
  clothingSuggestion = " a polo ";
  becauseTemperature = "and a jacket.";
}else if( eventType === "semi-formal" && tempFahr > 70) {
    clothingSuggestion =  " a polo.";
    becauseTemperature = " No jacket needed!";
}else if(eventType === "formal" && tempFahr < 54) {
    clothingSuggestion = " a suit ";
    becauseTemperature = "and a coat.";
}else if(eventType === "formal" && tempFahr >= 54 && tempFahr <= 70) {
    clothingSuggestion = " a suit ";
    becauseTemperature = "and a jacket.";
}else if(eventType === "formal" && tempFahr > 70) {
    clothingSuggestion = " a suit.";
    becauseTemperature = " No jacket needed!";
}else{
    clothingSuggestion = " SOME CLOTHES PLEASE.";
    becauseTemperature = " BECAUSE IT'S THE RIGHT THING TO DO, THANK YOU!"
}

var result = beforeResult + clothingSuggestion + becauseTemperature;
console.log(result);
