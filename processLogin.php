<?php 
    //getting values from the form

    $username = $_POST["user"];
    $password = $_POST['pass'];

    //To-do: Prvent Mysql Injection
    $username = stripcslashes($username);  
    $password = stripcslashes($password);  


    //Connect to server and select database
    $host = "localhost";  
    $user = "root";  
    $password = '';  
    $db_name = "db01";  
      
    $con = mysqli_connect($host, $user, $password, $db_name);  
    if(mysqli_connect_errno()) {  
        die("Failed to connect with MySQL: ". mysqli_connect_error());  
    }

    $sql = "select * from login where username = '$username' and password = '$password'";  
    $result = mysqli_query($con, $sql);  
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
    $count = mysqli_num_rows($result);  

    if($count == 1){  
        echo "<h1><center> Login successful </center></h1>";  
    }  
    else{  
        echo "<h1> Login failed. Invalid username or password.</h1>";  
    } 
    /*
    if ($row['userName'] == $username && $row['password'] == $password){
        echo "<h1><center> Login successful </center></h1>";
    }
    else{  
        echo "<h1> Login failed. Invalid username or password.</h1>";
    }

*/
?>