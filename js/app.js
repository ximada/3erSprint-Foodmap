/*
 * Funcionalidad de tu producto
 */


/*console.log(data.results[0].name);
*/
/*var nameRestaurants= data.results;*//**/
$(document).ready(loadPage);
  
  function loadPage(){
  	splashView();
  	viewPrincipal();
  }


/*Funcion para la primera Vista*/ 
function splashView() {
	setTimeout(function(){
		$("#seccion-1").fadeOut(1500);
	},3000);
}

function viewPrincipal(){
	setTimeout(function(){
		$("#seccion-2").fadeInt(1500)
	},3000);
}

 

