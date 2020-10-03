var userID = 0;
var email = "";

function doLogin()
{
    var usernameInput = document.getElementById("inputUsername").value;
    var passwordInput = document.getElementById("inputPassword").value;

    var jsonPayload = JSON.stringify({email : usernameInput, password : passwordInput});

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "http://www.cookiebook.team/API/Login.php", true);

    //xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://206.189.193.36/');
    //xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(jsonPayload);

    // Is called when xhr finishes the request
    xhr.onload = function() {
        if(xhr.status == 500)
        {
            document.getElementById("loginResult").innerHTML = `500 internal server error`;
        } 
        else if(xhr.status == 200)
        {
            var jsonObject = JSON.parse(xhr.response);
            userID = jsonObject.userid;
            if(userID)
            {
                document.getElementById("loginResult").innerHTML = `Login Success!`;
                saveCookie();
                window.location.href = "contacts.html";
            }
            else
            {
                document.getElementById("loginResult").innerHTML = `${jsonObject.error}`;
            }
        }
        else
        {
            document.getElementById("loginResult").innerHTML = `Unspecified error: error code ${xhr.status}`;
        }
    };
    xhr.onerror = function() { // only triggers if the request couldn't be made at all
        document.getElementById("loginResult").innerHTML = `Network Error`;
    };

    //Only needed for network testing
    /*
    xhr.onprogress = function(event) { // triggers periodically
        // event.loaded - how many bytes downloaded
        // event.lengthComputable = true if the server sent Content-Length header
        // event.total - total number of bytes (if lengthComputable)
        alert(`Received ${event.loaded} of ${event.total}`);
    };
    */
}

function doRegister()
{
    var usernameInput = document.getElementById("inputUsername").value;
    var passwordInput = document.getElementById("inputPassword").value;
    var confirmPasswordInput = document.getElementById("inputConfirmPassword").value;

    if(passwordInput != confirmPasswordInput)
    {
        document.getElementById("loginResult").innerHTML = `Passwords do not match`;
        return;
    }

    var jsonPayload = JSON.stringify({email : usernameInput, password : passwordInput});

    var xhr = new XMLHttpRequest();

    xhr.open("POST", "http://www.cookiebook.team/API/Register.php", true);
    xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xhr.send(jsonPayload);

    // Is called when xhr finishes the request
    xhr.onload = function() {
        if(xhr.status == 500)
        {
            document.getElementById("loginResult").innerHTML = `500 internal server error`;
        } 
        else if(xhr.status == 200)
        {
            var jsonObject = JSON.parse(xhr.response);
            userID = jsonObject.userid;
            if(typeof jsonObject.error == 'undefined')
            {
                showLogin();
                document.getElementById("loginResult").innerHTML = `${jsonObject.info}`;
            }
            else
            {
                document.getElementById("loginResult").innerHTML = `${jsonObject.error}`;
            }
        }
        else
        {
            document.getElementById("loginResult").innerHTML = `Unspecified error: error code ${xhr.status}`;
        }
    };
    xhr.onerror = function() { // only triggers if the request couldn't be made at all
        document.getElementById("loginResult").innerHTML = `Network Error`;
    };

    //Only needed for network testing
    /*
    xhr.onprogress = function(event) { // triggers periodically
        // event.loaded - how many bytes downloaded
        // event.lengthComputable = true if the server sent Content-Length header
        // event.total - total number of bytes (if lengthComputable)
        alert(`Received ${event.loaded} of ${event.total}`);
    };
    */
}

function showRegister()
{
    document.getElementById("mainForm").innerHTML =
    `
    <form class="form-container" id="mainForm">
    <p id="titleName">Register</p>

      <div class="form-group">
        <label for="inputEmailLabel">Email</label>
        <input type="text" class="form-control" id="inputUsername">
      </div>
      <div class="form-group">
        <label for="inputPasswordLabel">Password</label>
        <input type="password" class="form-control" id="inputPassword">
      </div>
      <div class="form-group">
      <label for="inputConfirmPasswordLabel">Confirm Password</label>
      <input type="password" class="form-control" id="inputConfirmPassword">
      <a onclick="showLogin()"><small id="newAccount" class="form-text text-muted">New user? Register</small></a>
      </div>

      <div class="container">
        <button type="button" onclick="doRegister()" class="btn btn-primary btn-block submit-btn">Submit</button>
      </div>
      <span id="loginResult"></span>
    `
}

function showLogin()
{
    document.getElementById("mainForm").innerHTML =
    `
    <form class="form-container" id="mainForm">
    <p id="titleName">Login</p>
      <div class="form-group">
        <label for="inputEmailLabel">Email</label>
        <input type="text" class="form-control" id="inputUsername">
      </div>
      <div class="form-group">
        <label for="inputPasswordLabel">Password</label>
        <input type="password" class="form-control" id="inputPassword">
        <a onclick="showRegister()"><small id="newAccount" class="form-text text-muted">New user? Register</small></a>
      </div>
      <div class="container">
        <button type="button" onclick="doLogin()" class="btn btn-primary btn-block submit-btn">Submit</button>
      </div>
      <span id="loginResult"></span>
  </form>
    `
}

function saveCookie()
{
	var minutes = 20;
	var date = new Date();
    date.setTime(date.getTime()+(minutes*60*1000));	
	document.cookie = "userid=" + userID + ",email=" + email + ";expires=" + date.toGMTString();
}