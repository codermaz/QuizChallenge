/**  
 * @author : Yilmaz
 * 
 */

function init() {
	
	var btnLogin = document.getElementById("btnLogin")
	
	btnLogin.addEventListener("click",addSpieler,false);

	setInterval(laufText,150);
}

var scrollingText = "| Web Quiz - Quiz Challenge "
var anfang=0, ende=scrollingText.length;
var aktuellText = "";	

function laufText() {
	aktuellText+=scrollingText.substring(anfang, ende)+" "+scrollingText.substring(0,anfang);
	document.getElementById("scrollingTitel").innerHTML=aktuellText;
	anfang++;
	if (anfang==ende) 
		anfang=0;
	aktuellText="";	
}

function addSpieler() {
	var txtLogin = document.getElementById("txtLogin");
	if (txtLogin.value=="")
		alert(" Fehler: Bitte schreiben Sie eine gültige Name! ");
}


