<?php 
    //getting values from the form

    $username = $_POST["user"];
    $password = $_POST["pass"];

    //Connect to server and select database
    $host = "localhost";  
    $user = "root";  
    $sqlPass = '';  
    $db_name = "login";  

    $con = mysqli_connect($host, $user, $sqlPass, $db_name);  
    if(mysqli_connect_errno()) {  
        die("Failed to connect with MySQL: ". mysqli_connect_error());  
    }

    //To-do: Prvent Mysql Injection;  
    $username = stripcslashes($username);  
    $password = stripcslashes($password);  
    $username = mysqli_real_escape_string($con, $username);  
    $password = mysqli_real_escape_string($con, $password);  

    
    $sql = "select * from users where username = '$username' and password = '$password'";  
    $result = mysqli_query($con, $sql);  
    $row = mysqli_fetch_array($result);  
    $count = mysqli_num_rows($result);  
/*
    if($count == 1){  
        echo "<h1><center> Login successful </center></h1>";  
    }  
    else{  
        echo "<h1> Login failed. Invalid username or password.</h1>";  
    } */

    if ($row['username'] == $username && $row['password'] == $password){
        echo "<h1><center> Login successful </center></h1>";
        header("Location:index.html");
        exit();
    }
    else{  
        echo "<h1> Login failed. Invalid username or password.</h1>";
    }


?>