// Backend JS code

var akanName = function generateAkanName(year, month, date, gender) {
    let maleNames = [];
    let femaleNames = [];

    maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    
    const birthDay = new Date(year, month, date);
    let day = birthDay.getDay();

    if (gender === "Male") {
        return day && maleNames[birthDay.getDay()];

    } else {
        return day && femaleNames[birthDay.getDay()];
    }
}

// Frontend JS code

$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault()

        let year = parseInt($("#year_of_birth").val());
        let month = parseInt($("#birth_month").val());
        let date = parseInt($("#birth_date").val());
        let gender = $("input:radio[name=gender]:checked").val();
        let result = akanName(year, month, date, gender);

        alert("Your Akan name is" + result);

//refresh page
        document.getElementById("form").reset();
    });
});