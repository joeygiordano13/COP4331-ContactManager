var userID = 0;
var firstName = "";
var lastName = "";
var url = "http://www.cookiebook.team/API/Login.php";

function doLogin()
{
    var usernameInput = document.getElementById("inputUsername").value;
    var passwordInput = document.getElementById("inputPassword").value;

    var jsonPayload = JSON.stringify({username : usernameInput, password : passwordInput});

    var xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    xhr.send(jsonPayload);

    xhr.onload = function() {
        if(xhr.status == 500)
        {
            alert(`500 internal server error`);
        } 
        else if(xhr.status == 200)
        {
            alert(`Response is \"${xhr.response}\"`);
            var jsonObject = JSON.parse(xhr.response);
            alert(`jsonObject is \"${jsonObject}\"`);
            userId = jsonObject.id;
            if(userID == 0)
            {
                alert(`Login fail`)
            }
            else
            {
                alert(`Login Success!`);
            }
        }
        else
        {
            alert(`Unspecified error: error code ${xhr.status}`);
        }
    };
    xhr.onerror = function() { // only triggers if the request couldn't be made at all
        alert(`Network Error`);
    };

    xhr.onprogress = function(event) { // triggers periodically
        // event.loaded - how many bytes downloaded
        // event.lengthComputable = true if the server sent Content-Length header
        // event.total - total number of bytes (if lengthComputable)
        alert(`Received ${event.loaded} of ${event.total}`);
    };
}