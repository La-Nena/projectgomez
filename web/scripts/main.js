$(document).ready(function(){

    var imagenes = document.querySelectorAll("#cars img");

    for(var i=0;imagenes.length;i++){

        imagenes[i].addEventListener("click",Price,false);

    }

    var checkbox = document.querySelectorAll("#container #container1 input");
   
    for(var i=0;checkbox.length;i++){

        if($('input').is(':checked')){

            checkbox[i].addEventListener("click",add,false);

        }

    }

    //THIS SHIT NO WORK. Maybe later i can use.
    /*var checkbox = document.querySelectorAll("#container #container1 input");

    for (var i=0;checkbox.length;i++){

        if($("checkbox").prop("checked", true)){
        checkbox[i].addEventListener("click",add,false);
        }
    }*/

})

function Price(e){

    var Ferrari = 20000;
    var Mustang = 30000;
    var Chevrolet = 40000;
    var Camaro = 50000;

    if(e.target == F){

        alert("The price is " + Ferrari);

    }
    else if (e.target == C){

        alert("The price is " + Chevrolet)

    }
    else if (e.target == Ca){

        alert("The price is " + Camaro);

    }
    else if (e.target == M){

        alert("The price is "  + Mustang);
    
    } else {

        alert("Nada ps");
    }

}


//Here I will write the function that will 
//add the price of the parts with the price of the cars
//------------------------------------------------------

function add(e){
    
    /*var Cars = [
        "Ferrari"="20000",
        "Mustang"="30000",
        "Chevrolet"="40000",
        "Camaro"="50000"
    ]*/
    
    var Ferrari = 20000;
    var Mustang = 30000;
    var Chevrolet = 40000;
    var Camaro = 50000;
    var Cornets = 3000;
    var Carpets = 2000;
    var VerticalDoors = 5000;
    var Neon = 10000;
    var FC = Ferrari+Cornets;

    if (e.target == one){


    alert("Ahora el precio del" + Ferrari + "es de " + FC);
    
    }
}
