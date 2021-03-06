<?php
if(isset($_POST['signup'])){
    $host = "localhost";  
    $user = "root";  
    $sqlPass = '';  
    $db_name = "login";  

    $con = mysqli_connect($host, $user, $sqlPass, $db_name);  
    if(mysqli_connect_errno()) {  
        die("Failed to connect with MySQL: ". mysqli_connect_error());  
    }
    
    $username=$_POST['user'];
    $email=$_POST['email'];
    $password=password_hash($_POST['pass'], PASSWORD_DEFAULT);

    $checkQuery="SELECT * FROM users where (username=:username ||  email=:email)";
    $check = $dbh -> prepare($checkQuery);
    $check->bindParam(':uemail',$email,PDO::PARAM_STR);
    $check->bindParam(':uname',$username,PDO::PARAM_STR);
    $check->execute();
    $results = $check->fetchAll(PDO::FETCH_OBJ);
    
    if($check->rowCount() == 0) {
        $sql="INSERT INTO users (username, email, password) VALUES(:username, :email, :password)";
        $query = $dbh->prepare($sql);
        $query->bindParam(':username',$username,PDO::PARAM_STR);
        $query->bindParam(':email',$email,PDO::PARAM_STR);
        $query->bindParam(':password',$password,PDO::PARAM_STR);
        $query->execute();
        $lastInsertId = $dbh->lastInsertId();
        If ($lastInsertId) {
            $msg="You have signup Successfully";
        } else {
            $msg="Something wrong here. Try again";
        }
    } else {
        $msg="User already exist. Try again";
    }
    echo ($msg);
}
