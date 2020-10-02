var urlBase = 'http://www.cookiebook.team/API';
var urlExtension = '.php';

var field = "";
var order = "";
var userID = 0;
//var email = "";
var date = "";
var currentId;
var currentData;

function updateInfo()
{
    var contactId = currentId;
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var cookie = document.getElementById("cookie").value;
    //var date = document.getElementById("date").value;

    var jsonPayload = '{"contactid" : "' + contactId + '","firstname" : "' + first + '", "lastname" : "' + last + '", "phonenumber" : "' + phone + '", "email" : "' + email + '", "userid" : "' + userID + '", "favoritecookie" : "' + cookie + '"}'
    var url = urlBase + '/EditContact' + urlExtension;
    var request = new XMLHttpRequest();
    request.open("POST", url, false);
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    try
    {
        request.send(jsonPayload);
        var jsonObject = JSON.parse(request.responseText);
        alert(jsonObject.info);
    }
    catch(err)
    {
        alert(err.message);
    }
}

function addContact()
{
    var first = document.getElementById("first").value;
    var last = document.getElementById("last").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var cookie = document.getElementById("cookie").value;
    var userID = document.getElementById("userId").value;
    //var userID = window.sessionStorage.getItem("userId");
    //var date = document.getElementById("date").value;

    var jsonPayload = '{"firstname" : "' + first + '", "lastname" : "' + last + '", "phonenumber" : "' + phone + '", "email" : "' + email + '", "userid" : "' + userID + '", "favoritecookie" : "' + cookie + '"}'
    var url = urlBase + '/AddContact' + urlExtension;

    var request = new XMLHttpRequest();
    request.open("POST", url, false);
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");

    console.log(first + " " + last + " " + phone + " " + email + " " + cookie);
    if(first && last && phone && email && cookie)
    {
         try
        {
            request.send(jsonPayload);
            var jsonObject = JSON.parse(request.responseText);
            date = jsonObject.datecreated;
            alert(jsonObject.info);
        }

        catch(err)
        {
            alert(err.message);
        }
    }
    else
    {
        document.getElementById("addContact").innerHTML = "Please fill out fields";
    }
   
}

function addRow(data)
{
    const myTable = document.getElementById("cookieTable");

    const row = myTable.insertRow(1);
    row.style.textAlign = "center";

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);
    const cell8 = row.insertCell(7);

    const firstName = document.getElementById("first").value;
    const lastName = document.getElementById("last").value;
    const phoneNumber = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const cookie = document.getElementById("cookie").value;

    //console.log(firstName);

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = phoneNumber;
    cell4.innerHTML = email;
    cell5.innerHTML = cookie;
    cell6.innerHTML = date;
    cell7.innerHTML = '<button type="edit";class="btn btnEdit" onclick="openWindow1();updateInfo()">Edit</button>';
    cell8.innerHTML = '<button type="delete";class="btn btnDelete" onclick="deleteRow(this);">Delete</button>';
}


function closeWindow()
{
    document.getElementById("addWindow").style.display = "none";
}

function openWindow()
{
    document.getElementById("addWindow").style.display = "block";   
}
function openWindow1()
{
    document.getElementById("updateWindow").style.display = "block";   
}
function closeWindow1()
{
    document.getElementById("updateWindow").style.display = "none";
}

function deleteContact()
{   
    var url = urlBase + '/DeleteContact.' + urlExtension;
    var jsonPayload = '{userid" : "' + userID + '",contactid" :"' + contactId + '"}';
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    request.send(jsonPayload);

    try
    {
        request.onreadystatechange = function()
        {
            if(this.readyState == 4 && this.status == 200)
            {
                var jsonObject = JSON.parse(request.responseText);
                document.getElementById("").innerHTML = " Cookies Eaten!";
            }
        }

    }
    catch(err)
    {
        document.getElementById("").innerHTML = err.message;
    }
}

function clear()
{
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cookie").value = "";
    document.getElementById("date").value = "";
}

function search()
{
    var search = document.getElementById("search").value;

    var jsonPayload = '{"search" : "' + search + '", "userid" : "' + userID + '", "field" : "' + field + '", "order" : "' + order + '"}'
    var url = urlBase + '/SearchContacts'+ urlExtension;
    var request = new XMLHttpRequest();
    request.open("POST", url, false);
    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    try
    {
        request.send(jsonPayload);
        var jsonObject = JSON.parse(request.responseText);
        addRow(jsonObject.results);
    }
    catch(err)
    {
        alert(err.message);
    }
}