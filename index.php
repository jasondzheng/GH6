<!DOCTYPE html>
<html> 
<head> 
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" /> 
  <title>HomeBase</title> 
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" type="text/javascript"></script>
</head> 
<body>
  <div class="userCreateDetails">
  <div>
    <?php
    session_start();

    if (!isset($_SESSION['username']) {
      echo '<form id="userCreate">
        <br> Please Input the details for registering: <br>
        Username <input type="text"  name="newUsername" id="newUsername">  <br>
        Password <input type="password"  name="newPassword" id="newPassword">  <br>
        <input id="submitCreateUser" type="button" name="submit" value="Create User"/>
      </form>';
    }
    ?>
    <div id="userCreateMsg"></div> 
  </div>
</div>
  <?php
  if (!isset($_SESSION['username']) {  
    echo '<button id="login" class="logins" data-tog = "1">Shelter Login</button>';
  } else {
    echo '<div class="logouts">
      <div id="loggedUser" data-tog="0"></div>
      <button class="btns" id="logout">Logout</button>
    </div>';
  }
  ?>
  <div class = "everything">
  <div class="steps">
    <button id="step1" class="float-left">Locate</button>
    <script type="text/javascript">
        document.getElementById("step1").onclick = function () {
            location.href = "/~wujonathan/Step_1/";
        };
    </script>
    <button id="step2" class="float-middle">Assess</button>
    <script type="text/javascript">
        document.getElementById("step2").onclick = function () {
            location.href = "https://docs.google.com/forms/d/1O6fU_MWmIwuvYN_xxZAH8Y94Hwnw-5LAJVs7UdQJXpo/edit";
        };
    </script>
    <button id="step3" class="float-right">Learn</button>
    <script type="text/javascript">
        document.getElementById("step3").onclick = function () {
            location.href = "/~wujonathan/Step_3/";
        };
    </script>
  </div>
 </div>
    <div class="userLoginDetails">
    <div>
      <form id="userlogin">
        Username <input type="text"  name="username" id="username">  <br>
        Password  <input type="password"  name="password" id="password">  <br>
        <input id="submitLogin" type="button" name="submit" value="Login"/>
      </form>
      <div id="loginUserMsg"></div> 
    </div>
  </div>
 <script type="text/javascript" src="mainpage.js"></script>
</body>
</html>