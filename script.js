function isEmail(email) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#submitButton").click(function () {

    let errorMessage = "";
    let fieldsMissing = "";

    if ($("#email").val() == "") {
        fieldsMissing += "<br>Email"
    }

    if ($("#phone").val() == "") {
        fieldsMissing += "<br>Telephone"
    }

    if ($("#password").val() == "") {
        fieldsMissing += "<br>Password"
    }

    if ($("#passwordConfirm").val() == "") {
        fieldsMissing += "<br>Confirm Password"
    }

    if (fieldsMissing != "") {
        errorMessage += "The following field(s) are missing:" + fieldsMissing;
    }

    if (isEmail($("#email").val()) == false) {
        errorMessage += "<p>Your email is not valid</p>";
    }

    if ($.isNumeric($("#phone").val()) == false) {
        errorMessage += "<p>Your phone number is not numeric</p>";
    }

    // Тут хочу зробити перевірку щоб було 10 цифр
    // if ($("#phone").val() != 10) {
    //     errorMessage += "<p>Your phone number is not 10 numeric</p>";
    // }

    if ($("#password").val() != $("#passwordConfirm").val()) {
        errorMessage += "<p>Your passwords don't match</p>";
    }

    if (errorMessage != "") {
        $("#errorMessage").html(errorMessage);
    } else {
        $("#successMessage").show();
        $("#errorMessage").hide();
    }
});