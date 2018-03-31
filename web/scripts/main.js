var selectedCarPrice = 0;

var listOfCars = [];
var listOfParts = [];

$(document).ready(function () {
    getCarsFromDatabase();
    getPartsFromDataBase();

    $('body').on('click', 'img', selectCar);
    $(':checkbox').change(calculateTotalPrice);
})


function getCarsFromDatabase() {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/cars/",
        cache: false,
        success: function (data) {
            listOfCars = data;
        },
        error: function (data) {
        }
    });
}
function getPartsFromDataBase() {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/parts/",
        cache: false,
        success: function (data) {
            listOfParts = data;
        },
        error: function (data) {
        }
    });
}

function calculateTotalPrice() {
    var checkboxes = $(".form-check-input:checkbox:checked");
    var totalPriceOfParts = 0;

    if (checkboxes.length > 0) {
        for (var i = 0; i < listOfParts.length; i++) {
            for (var j = 0; j < checkboxes.length; j++) {
                if (checkboxes[j].id == listOfParts[i].name) {
                    totalPriceOfParts += parseInt(listOfParts[i].price, 10);
                }
            }
        }
    }

    var totalPrice = selectedCarPrice + totalPriceOfParts;
    $('#sumTextbox').val(totalPrice);
}

function selectCar(event) {
    var selectedCar = event.target.id;

    for (var i = 0; i < listOfCars.length; i++) {
        if (listOfCars[i].name == selectedCar) {
            selectedCarPrice = parseInt(listOfCars[i].price, 10);
        }
    }

    calculateTotalPrice();
}