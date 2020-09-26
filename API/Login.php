<?php
   // Login as a user.
   $inData = getRequestInfo();

   $userid = 0;
   $username = "";
   $password = "";
   $datelaston = date("m/d/Y h:i:s a", time());

   // connect to mysql database
   $conn = new mysqli('localhost', 'root', '8C@UnIoOwUK2k7gZl%N9Mi', 'cookiebook');
   // check for connectivity issues
   if ($conn->connect_error) 
   {
      returnWithError("Login Failed.");
   }
   else
   {
      // query the database with the user information
      $sql = "SELECT userid,username,password FROM users where username='" . $inData["username"] . "' AND password='" . $inData["password"] . "'";
      $result = $conn->query($sql);
      // check if user and password match records
      if ($result->num_rows > 0)
      {
         $row = $result->fetch_assoc();
         $userid = $row["userid"];
         // update datelaston
         $update = "UPDATE users SET datelaston='" . $datelaston . "' WHERE userid='" . $userid . "'";
         $conn->query($update);
          
         returnWithInfo($userid, "Successful Login!");
      }
      else
      {
         returnWithError("No Matching Records Found");
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
      $retValue = '{"userid":' . $userid . ',"info":"' . $info . '"}';
		sendResultInfoAsJson($retValue);
   }
?>
