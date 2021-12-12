// Backend JS code

var akanName = function(y, m, d, g) {
    var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var d = new Date(y, --m, d);
    if (g === "Male") {
        return d && maleNames[d.getDay()];
    } else {
        return d && femaleNames[d.getDay()];
    }
}

// Frontend JS code

$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        var y = parseInt($("#year_of_birth").val());
        var m = parseInt($("#birth_month").val());
        var d = parseInt($("#birth_date").val());
        var g = $("input:radio[name=gender]:checked").val();
        var result = akanName(y, m, d, g);
        alert("My Akan name is: " + result);

//refresh page
        document.getElementById("form").reset();
    });
});