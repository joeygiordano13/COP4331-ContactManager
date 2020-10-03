var urlBase = "http://www.cookiebook.team/API";
var urlExtension = ".php";

var field = "name";
var order = "name";
var userID = 0;
var email = "";
//var date = "";
var currentId;

function updateInfo()
{
    var contactId = currentId;
    var first = document.getElementById("newfirst").value;
    var last = document.getElementById("newlast").value;
    var phone = document.getElementById("newphone").value;
    var email = document.getElementById("newemail").value;
    var cookie = document.getElementById("newcookie").value;
    //var date = document.getElementById("date").value;

    var jsonPayload = '{"userid" : "' + userID + '", "contactid" : "' + contactId + '","firstname" : "' + first + '", "lastname" : "' + last + '", "email" : "' + email + '", "phonenumber" : "' + phone + '", "favoritecookie" : "' + cookie + '"}'
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

    readCookie();

    var jsonPayload = '{"userid" : "' + userID + '", "firstname" : "' + first + '", "lastname" : "' + last + '", "phonenumber" : "' + phone + '", "email" : "' + email + '", "favoritecookie" : "' + cookie + '"}'
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
            // date = jsonObject.datecreated;
            // console.log(date);
            alert(jsonObject.info);
        }

        catch(err)
        {
            alert(err.message);
        }
    }
    else
    {
        document.getElementById("addError").innerHTML = "Please fill out fields";
    }
   
} 
/*
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
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();

    date = mm + '/' + dd + '/' + yyyy;
    //console.log(firstName);

    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = phoneNumber;
    cell4.innerHTML = email;
    cell5.innerHTML = cookie;
    cell6.innerHTML = date;
    cell7.innerHTML = '<button type="edit";class="btn btnEdit" onclick="openWindow1();updateInfo()">Edit</button>';
    cell8.innerHTML = '<button type="delete";class="btn btnDelete" onclick="deleteRow(this);deleteContact();">Delete</button>';
}
*/

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

function deleteContact(data)
{   
    var contactId = data;
    var url = urlBase + '/DeleteContact' + urlExtension;
    var jsonPayload = '{"userid" : "' + userID + '", "contactid" : "' + contactId + '"}';
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    

    try
    {
        request.send(jsonPayload);
    }
    catch(err)
    {
        alert(err.message);
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

    var jsonPayload = '{"userid" : "' + userID + '", "search" : "' + search + '", "field" : "' + field + '", "order" : "' + order + '"}'
    var url = urlBase + '/SearchContacts'+ urlExtension;
    var request = new XMLHttpRequest();
    request.open("POST", url, false);
    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    try
    {
        request.send(jsonPayload);
        var jsonObject = JSON.parse(request.responseText);
        buildTable(jsonObject.results);
    }
    catch(err)
    {
        alert(err.message);
    }
}

function readCookie()
{
	userID = -1;
	var data = document.cookie;
	var splits = data.split(",");
	for(var i = 0; i < splits.length; i++) 
	{
		var thisOne = splits[i].trim();
		var tokens = thisOne.split("=");
		if( tokens[0] == "userid" )
		{
			userID = parseInt( tokens[1].trim() );
        }
        else if ( tokens[0] == "email" )
        {
            email = tokens[1];
        }
	}
    
    // Cookie expired.
	if( userID < 0 )
	{
		window.location.href = "index.html";
	}
	else
	{
		//document.getElementById("inputUsername").innerHTML = "Logged in as " + email;
	}
}

function buildTable(data)
{
    var table = document.getElementById('cookieTable')

   
        for(var i = 0; i < data.length; i++)
        {   
            var row = `<tr>
                    <td>${data[i].firstname}</td>
                    <td>${data[i].lastname}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].phonenumber}</td>
                    <td>${data[i].favoritecookie}</td>
                    <td>${data[i].datecreated}</td>
                    <td><button type="edit";class="btn btnEdit" onclick="openWindow1();updateInfo()">Edit</button></td>
                    <td><button type="delete";class="btn btnDelete"; onclick="deleter(${data[i].contactid});">Delete</button></td>
                    </tr>`
        
            table.innerHTML += row
        }
}
function deleter(buttonID)
{
    console.log("***" + buttonID + "***");
    var currentID = buttonID;
    if(confirm('Are you sure you want to delete?'))
        deleteContact(currentID);
    document.location.reload(true);
}

function doLogout()
{
	userId = 0;
	userName = "";
	document.cookie = "userName= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
	window.location.href = "index.html";
}