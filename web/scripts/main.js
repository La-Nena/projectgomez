var selectedCarPrice; 

var listOfCars = [];

$(document).ready(function(){
    getCarsFromDatabase();
    
    var imagenes = $('.cars img');
    $('body').on('click','img', Price);
    $('body').on('click','img', calculateTotalPrice);

    $(':checkbox').change(function() {
        calculateTotalPrice();
    });
})


function getCarsFromDatabase(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/cars/",
        cache: false,
        success: function(data){
          listOfCars = data;
        },
        error: function(data){
        }
      });
}

function calculateTotalPrice(){
    var checkboxes = $(":checkbox:checked");
    var totalPriceOfParts = 0;
    totalPriceOfParts += selectedCarPrice;

    checkboxes.each(function(index, object) {
        var partPrice = parseInt(object.value, 10);
        totalPriceOfParts += partPrice;
    });

     $('#text').val(totalPriceOfParts);
}

function Price(e){
    debugger;
    var selectedCar = e.target.id;

    for(var i = 0; i < listOfCars.length; i++){
        if(listOfCars[i].name == selectedCar){
            selectedCarPrice = parseInt(listOfCars[i].price, 10);
        }
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
