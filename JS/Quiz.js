
/**
 * @author : Yilmaz
 *
 */

window.document.addEventListener("DOMContentLoaded", init, false);

var spielerAnzahl = 0;

var scrollingText = "| Web Quiz - Quiz Challenge "
var anfang = 0,
    ende = scrollingText.length;
var aktuellText = "";

function init() {

	var btnLogin = document.getElementById("btnLogin")

	btnLogin.addEventListener("click", addSpieler, false);

	setInterval(laufText, 130);
}

function laufText() {
	aktuellText += scrollingText.substring(anfang, ende) + " " + scrollingText.substring(0, anfang);
	document.getElementById("scrollingTitel").innerHTML = aktuellText;
	anfang++;
	if (anfang == ende)
		anfang = 0;
	aktuellText = "";
}

function addSpieler() {
	console.log(spielerAnzahl);
	var txtLogin = document.getElementById("txtLogin").value;
	var aktuellScore = 0;
	if (txtLogin == "")
		alert(" Fehler: Bitte schreiben Sie eine gültige Name! ");
	else {
		spielerAnzahl++;
		var tableRow = document.getElementById("spielerRow" + spielerAnzahl);
		var cellList = tableRow.getElementsByTagName("td");
		cellList[0].innerHTML= txtLogin ;
		cellList[1].innerHTML= aktuellScore;
		
		//tableN.style.visibility= "visible";

	}
}
