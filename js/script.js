var eventType = prompt("Enter the type of event you are attending:");
var tempFahr = prompt("Enter the current temperature:");
var result = ("Since it is") + (" ") + tempFahr + (" ") + ("degrees and you are going to something") + (" ") + eventType + (" ") + ("you should wear");

if(eventType === "casual" && tempFahr < 54)
{
  console.log(result + (" ") + ("something comfy. Like a coat!")) 
}else if( eventType === "casual" && tempFahr >= 54 && tempFahr <= 70)
{
    console.log(result + (" ") + ("something comfy. Like a jacket!")) 
}else if( eventType === "casual" && tempFahr > 70)
{
    console.log(result + (" ") + ("something comfy. No jacket!"))
}else if(eventType === "semi-formal" && tempFahr < 54) 
{
  console.log(result + (" ") + ("a polo and a coat."))
}else if( eventType === "semi-formal" && tempFahr >= 54 && tempFahr <= 70)
{
  console.log (result + (" ") + ("a polo and a jacket."))
}else if( eventType === "semi-formal" && tempFahr > 70)
{
    console.log(result + (" ") + ("a polo, no jacket."))
}else if(eventType === "formal" && tempFahr < 54) 
{
    console.log(result + (" ") + ("a suit and a coat."))
}else if(eventType === "formal" && tempFahr >= 54 && tempFahr <= 70)
{
    console.log(result + (" ") + ("a suit and a jacket."))
}else if(eventType === "formal" && tempFahr > 70)
{
    console.log(result + (" ") + ("a suit, no jacket."))
}
