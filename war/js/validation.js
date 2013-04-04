function formvalidation(){
	var ueesnimi = document.apply.eesnimi;  
	var uperenimi = document.apply.perenimi;  
	var uemail = document.apply.email;  
	var usynnikuu = document.apply.synnikuu;  
	var usynnipaev = document.apply.synnipaev;  
	var usynniaasta = document.apply.synniaasta;  
	var uerakond = document.apply.reg_erakond;  
	var uregioon = document.apply.reg_regioon;

	var fail1, fail2, fail3, fail4, fail5, fail6, fail7, fail8;
	
	fail1 = eesnimi_validation(ueesnimi,2,40);
	fail2 = perenimi_validation(uperenimi,2,40);
	fail3 = ValidateEmail(uemail);
	fail4 = selectsp(usynnipaev);
	fail5 = selectsk(usynnikuu);
	fail6 = selectsa(usynniaasta);
	fail7 = selectpar(uerakond);
	fail8 = selectpiir(uregioon);
	
	if(fail1 && fail2 && fail3 && fail4 && fail5 && fail6 && fail7 && fail8){
		alert('Teie kandidatuur on edukalt lisatud.');  
//		window.location.reload()
	} else {
		return false;
	}
	
//	if(eesnimi_validation(ueesnimi,2,40)){  
//		if(perenimi_validation(uperenimi,2,40)){  
//			if(ValidateEmail(uemail)){   
//				if(selectsp(usynnipaev)){  
//					if(selectsk(usynnikuu)){  
//						if(selectsa(usynniaasta)){  
//							if(selectpar(uerakond)){  
//								if(selectpiir(uregioon)){  
//									alert('JEE!!!1!ykssz');  
//									window.location.reload() 
//								}
//							}
//						}
//					}  
//				}  
//			}  
//		}  
//	} 
//	return false;  
} 

function eesnimi_validation(unimi,mx,my)  
{  
	var unimi_len = unimi.value.length;  
	if (unimi_len == 0 || unimi_len >= my || unimi_len < mx)  
	{  

		document.getElementById("eesn").className = "input_error";
		document.getElementById("eesnimi_error").innerHTML="Eesnime pikkus peab olema "+mx+" - "+my;  
		unimi.focus();  
		return false; 		
	}  

	document.getElementById("eesn").className = "";
	document.getElementById("eesnimi_error").innerHTML="";
	return true;  
}  

function perenimi_validation(unimi,mx,my)  
{  
	var unimi_len = unimi.value.length;  
	if (unimi_len == 0 || unimi_len >= my || unimi_len < mx)  
	{  	
		document.getElementById("peren").className = "input_error";
		document.getElementById("perenimi_error").innerHTML="Perenime pikkus peab olema "+mx+" - "+my;  
		unimi.focus();  
		return false; 			
	}  
	document.getElementById("peren").className = "";
	document.getElementById("perenimi_error").innerHTML="";  
	return true;  
}  

function ValidateEmail(uemail)  
{  
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(uemail.value.match(mailformat))  
	{  
		document.getElementById("mail").className = "";
		document.getElementById("email_error").innerHTML="";
		return true;  
	}  
	else  
	{  
		document.getElementById("mail").className = "input_error";
		document.getElementById("email_error").innerHTML="E-mail peab olema õiges formaadis";
		uemail.focus();  
		return false;  
	}  
}  

function selectsp(uvalik)  
{  
	if(uvalik.value == "default")  
	{  
		document.getElementById("sp").className = "input_error";
		document.getElementById("synnisp_error").innerHTML="Vali sünnipäev";
		uvalik.focus();  
		return false;			
	}  
	document.getElementById("sp").className = "";
	document.getElementById("synnisp_error").innerHTML="";
	return true;
}  

function selectsk(uvalik)  
{  
	if(uvalik.value == "default")  
	{  
		document.getElementById("sk").className = "input_error";
		document.getElementById("synnisk_error").innerHTML= "Vali sünnikuu";
		uvalik.focus();  
		return false;					
	}  
	document.getElementById("sk").className = "";
	document.getElementById("synnisk_error").innerHTML="";
	return true;
}  

function selectsa(uvalik)  
{  
	if(uvalik.value == "default")  
	{  
		document.getElementById("sa").className = "input_error";
		document.getElementById("synnisa_error").innerHTML="Vali sünniaasta"; 
		uvalik.focus();  
		return false;				
	}  
	document.getElementById("sa").className = "";
	document.getElementById("synnisa_error").innerHTML="";
	return true;
}  

function selectpar(uvalik)  
{  
	if(uvalik.value == "default")  
	{  
		document.getElementById("r_era").className = "input_error";
		document.getElementById("partei_error").innerHTML="Vali erakond";  
		uvalik.focus();  
		return false;			
	}  
	document.getElementById("r_era").className = "";
	document.getElementById("partei_error").innerHTML="";
	return true;
}  

function selectpiir(uvalik)  
{  
	if(uvalik.value == "default")  
	{  
		document.getElementById("r_reg").className = "input_error";
		document.getElementById("piirkond_error").innerHTML="Vali piirkond";
		uvalik.focus();  
		return false;
	}  
	else  
	{  
		document.getElementById("r_reg").className = "";
		document.getElementById("piirkond_error").innerHTML="";
		return true;
	}  
}  


function algstaatus() {
	
	document.getElementById("r_reg").className = "";
	document.getElementById("r_era").className = "";
	document.getElementById("sa").className = "";
	document.getElementById("sk").className = "";
	document.getElementById("sp").className = "";
	document.getElementById("mail").className = "";
	document.getElementById("peren").className = "";
	document.getElementById("eesn").className = "";
	document.getElementById("eesnimi_error").innerHTML="";
	
	document.getElementById("perenimi_error").innerHTML="";
	document.getElementById("email_error").innerHTML="";
	document.getElementById("synnisp_error").innerHTML="";
	document.getElementById("synnisk_error").innerHTML="";
	document.getElementById("synnisa_error").innerHTML="";
	document.getElementById("partei_error").innerHTML="";
	document.getElementById("piirkond_error").innerHTML="";
	
}