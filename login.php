<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <title>Login Page</title>
    <link rel="stylesheet" type="text/css" href="StylesFolder/loginStyles.css">
</head>

<body class="text-center">

    
    <br>


        <form action="processLogin.php" class="login-form" method="POST">
        <h1 class="h3 mb-3 font-weight-normal">Please Log in</h1>
            <p>
                <label class="sr-only">Username</label>
                <input type="text" class="form-control" id="user" name="user"/>
            </p>
            <p>
                <label class="sr-only">Password</label>
                <input type="password" class="form-control" id="pass" name="pass"/>
            </p>
            <p>
                <input type="submit" id="btn" name="Login"/>
            </p>
        </form>


    <script>  
    function validation()  
    {  
        var id=document.f1.user.value;  
        var ps=document.f1.pass.value;  
        if(id.length=="" && ps.length=="") {  
            alert("User Name and Password fields are empty");  
            return false;  
        }  
        else  
        {  
            if(id.length=="") {  
                alert("User Name is empty");  
                return false;  
            }   
            if (ps.length=="") {  
            alert("Password field is empty");  
            return false;  
            }  
        }                             
    }  
</script>
</body>
</html>