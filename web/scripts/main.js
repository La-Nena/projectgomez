var selectedCarPrice; 
var listOfCars = [];
var listOfParts = [];

$(document).ready(function(){
    getCarsFromDatabase();
    getPartsFromDataBase();
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
function getPartsFromDataBase(){
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/parts/",
        cache: false,
        success: function(data){
          listOfParts = data;
        },
        error: function(data){
        }
      });
}

function calculateTotalPrice(){

    var checkboxes = $(":checkbox:checked");
    var totalPriceOfParts = 0;

    if(checkboxes == true){
        selectBox = checkboxes;
        for(var i=0;i<listOfParts.length;i++){
            if(listOfParts[i].name == selectBox.id){
                totalPriceOfParts = parseInt(listOfParts[i].price, 10);
            }
        }
        totalPriceOfParts += selectedCarPrice;
    }
    /*checkboxes.each(function(index, object) {
        var listOfParts = parseInt(object.value, 10);
        totalPriceOfParts += listOfParts;
    });*/
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