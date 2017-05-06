/**  
 * @author : Yilmaz
 * 
 */

function init() {
	
	var btnLogin = document.getElementById("btnLogin")
	
	btnLogin.addEventListener("click",addSpieler,false);
	
}

function addSpieler() {
	var txtLogin = document.getElementById("txtLogin");
	if (txtLogin.value=="")
		alert(" Fehler: Bitte schreiben Sie eine gültige Name! ");
}


