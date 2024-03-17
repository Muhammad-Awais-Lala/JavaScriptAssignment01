// Alert Name 
document.getElementById("altnam").onclick=function()
{
    let name = "Muhammad Awais S/O Muhammad Hayyat";
document.getElementById("altnam").onclick=alert(name)
}

// Alert Number 
document.getElementById("altnum").onclick=function()
{
    document.getElementById("altnum").onclick=alert("WMAD-191373")
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                    // CLEAR BUTTENS

document.getElementById("clearop").onclick=function()
{
    document.getElementById("output").innerHTML=" "; 
}

document.getElementById("clearset").onclick=function()
{
    document.getElementById("statement").innerHTML=" "
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Show Variables Name 
document.getElementById("showvar").onclick=function()
{
    document.getElementById("output").innerHTML=" ";
    document.getElementById("output").style.textAlign="left"
    document.getElementById("output").innerHTML="<ul><li>A variable name can't contain spaces</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li> <li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, userAlert and myVar are legal.</li><li>Capital letters are fine, but be careful. Variavle names are case sensitive. A rose is not a Rose. If you assign the string 'Floribandas' to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty.</li></ul>";
}

// Show cammel case Example  
document.getElementById("showcam").onclick=function()
{
    document.getElementById("output").innerHTML=" ";
    document.getElementById("output").innerHTML="camelCaseFormat"
}
    let num1= 8;
    let num2= 5;
// Sum of Two Numbers 
document.getElementById("sum").onclick=function()
{
    document.getElementById("statement").innerHTML="let num1 = "+num1+"<br>let num2 ="+num2+ "<br>Sum= " +num1+"+"+num2 ;
    document.getElementById("output").innerHTML=" ";
    document.getElementById("output").innerHTML=num1+num2;
}

// Subtract 2 Numbers 
document.getElementById("sub").onclick=function()
{
    document.getElementById("statement").innerHTML=""
    document.getElementById("statement").innerHTML="let num1 = "+num1+ "<br>let num2 = "+num2+ "<br> Answer=" +num1+"-"+num2;
    document.getElementById("output").innerHTML=" ";
    document.getElementById("output").innerHTML=num1-num2;
}
// Multiply 2  Numbers 
document.getElementById("mul").onclick=function()
{
    document.getElementById("statement").innerHTML=""
    document.getElementById("statement").innerHTML="let num1 = "+num1+ "<br>let num2 = "+num2+ "<br> Answer=" +num1+"x"+num2;
    document.getElementById("output").innerHTML=" ";
    document.getElementById("output").innerHTML=num1*num2;
}
// devide 2 numbers 
document.getElementById("divid").onclick=function()
{
    document.getElementById("statement").innerHTML=""
    document.getElementById("statement").innerHTML="let num1 = "+num1+ "<br>let num2 = "+num2+ "<br> Answer=" +num1+"/"+num2;
    document.getElementById("output").innerHTML=" ";
    document.getElementById("output").innerHTML=num1/num2;
}

//Calculate Equation
document.getElementById("calcsum").onclick=function()
{
    let equ =  15 / 3 + 23 * 4 - (3 + 6)
    document.getElementById("statement").innerHTML=""
    document.getElementById("statement").innerHTML="let equ =  15 / 3 + 23 * 4 - (3 + 6)"
    document.getElementById("output").innerHTML=" ";
    document.getElementById("output").innerHTML=15 / 3 + 23 * 4 - (3 + 6);
}