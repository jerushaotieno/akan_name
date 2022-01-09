// Backend JS code

var akanName = function (year, month, date, gender) {   
    var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var date = new Date(year, --month, date);

    if (gender === "Male") {
        return date && maleNames[date.getDay()];

    } else {
        return date && femaleNames[date.getDay()];
    }
}

// Frontend JS code

$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();

        var year = parseInt($("#year_of_birth").val());
        var month = parseInt($("#birth_month").val());
        var date = parseInt($("#birth_date").val());
        var gender = $("input:radio[name=gender]:checked").val();
        var result = akanName(year, month, date, gender);
        alert("Your Akan Name is " + result);
        

//refresh page
        document.getElementById("form").reset();
    });
});
