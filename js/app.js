/*
 * Funcionalidad de tu producto
 */


var restaurantsArray = [] 

var $restaurantsInput =$("#input-search");

$(document).ready(loadPage);
  
  function loadPage(){
  	splashView();
  	viewPrincipal();
  	printResults();
  	$("#input-search").keyup(filtered);{

  	}


  }

/*Funcion para imprimir los resiltados en pantalla*/
function printResults(restaurantsInfomation) {
	/*Crear con el DOM*/
    
	var $newSection = $("<article/>", {
		"class": "food"
	});

	var $title = $("<h3/>");
	var $addres = $("<p/>"); 
	var $buttonMasInfo = $("<button type='button'  data-toggle='modal' data-target='#myModal'/>", );

/*Asignado valores*/
    $title.text(restaurantsData.name);
    $addres.text(restaurantsData.direction);
    $buttonMasInfo.text("More Info");

    $newSection.append($title);
    $newSection.append($addres);
    $newSection.append($buttonMasInfo);

    $("#container-restaurants").prepend($newSection);

}


/*Funcion para la primera Vista*/ 
function splashView() {
	setTimeout(function(){
		$("#seccion-1").fadeOut(1500);
	},3000);
}

function viewPrincipal(){
	setTimeout(function(){
		$("#seccion-2").fadeIn(1500)
	},3000);
}
/*Funcionpara  filtrar la data y que el  usuario encuentre un resultado*/
function filtered(e){
	e.preventDefault();
	var searchRetaurants = $restaurantsInput.val().toLowerCase();
	  if( $restaurantsInput.val().trim().length > 0) {
	  	for(var i=0; i<restaurantsData.length; i++ ) {
	  		var restaurantsInfomation= restaurantsData.name;
	  		var filterRestaurants = restaurantsData.filter(function(restaurantsInfomatio){
	  			return restaurantsInfomation.name.toLowerCase().indexOf(searchRetaurants)>=0;
	  		});
	  		
	  
	  	}

	  	$("#container-restaurants").empty();
	  	filterRestaurants.forEach(function(restaurantsInfomation){
	  	printResults(restaurantsInfomation);

	  	});
	  }else{
	  	$("#container-restaurants").empty();
	  	restaurantsData.forEach(function(restaurantsInfomation){
	  	printResults(restaurantsInfomation);
	
	  });

	  }





}




/*function filtered(){
	var $nameRestaurants = restaurants.filter(restaurants => restaurants.name);
}

function filterInput(){
	var searchRetaurants = $("#input-search").val().toLowerCase();
	 if($("#input-search").val().trim().length > 0) {
	     

	 	 return restaurantsArray.valueRestaurant.toLowerCase().indexOf(searchRetaurants) >= 0;

	 }*/
/*var $nameRestaurants = restaurants.filter(restaurants => restaurants.name);
/*console.log($nameRestaurants);*/

 

