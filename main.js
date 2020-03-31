var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "DJS" && password == "djs#123") {
    alert("WOOP WOOP!!Login successfull!!");
    window.location = "https://djsandscreation.github.io/djsandsCreations006/";
    // window.location = "success.html"; 
    // Redirecting to other page.
    return false;
  } else {
    attempt--; // Decrementing by one.
    alert("Opps!! You have " + attempt + " attempts left;");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}