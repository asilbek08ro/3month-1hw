function checkInput() {
    var inputText = document.getElementById("textInput").value;
    var isLink = (inputText.includes(".") && (inputText.includes("https://") || inputText.includes("http://")));
    if (isLink) {
        document.getElementById("textInput").style.backgroundColor = "green";
    } else {
        document.getElementById("textInput").style.backgroundColor = "red";
    }
}

function checkEmail() {
    var emailText = document.getElementById("emailInput").value;
    var isEmail = (emailText.includes(".") && emailText.includes("@"));
    if (isEmail) {
        document.getElementById("emailInput").style.backgroundColor = "green";
    } else {
        document.getElementById("emailInput").style.backgroundColor = "red";
    }
}