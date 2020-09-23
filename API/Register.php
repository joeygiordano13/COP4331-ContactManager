<?php
   // Register a user.
   $inData = getRequestInfo();

   $username = $inData['username'];
   $password = $inData['password'];
   $datecreated = date("Y/m/d");
   $datelaston = $datecreated;

   echo $datecreated;

   // connect to mysql database
   $conn = new mysqli('localhost', 'root', '8C@UnIoOwUK2k7gZl%N9Mi', 'cookiebook');

   // check for connectivity issues
   if ($conn->connect_error) 
   {
      returnWithError($conn->connect_error);
   }
   else
   {
      // query the database with the user information
      $sql = "INSERT into users(username,password,datecreated,datelaston) VALUES ('" . $username . "','" . $password . "','" . $datecreated . "','" . $datelaston . "')";
      // check if records are inserted
      if($result = $conn->query($sql) != TRUE)
		{
			returnWithError($conn->error);
      }
      else
      {
         returnWithInfo($userid, "registered user!");
      }
		$conn->close();
	}

   function getRequestInfo()
   {
      return json_decode(file_get_contents('php://input'), true);
   }

   function sendResultInfoAsJson($obj)
   {
      header('Content-type: application/json');
      echo $obj;
   }

   function returnWithError($err)
   {
      $retValue = '{"error":"' . $err . '"}';
      sendResultInfoAsJson($retValue);
   }

   function returnWithInfo($userid, $info)
   {
      $retValue = '{"userid":' . $userid . ',"info":"' . $info '"}';
		sendResultInfoAsJson($retValue);
   }
?>
