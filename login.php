<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" type="text/css" href="StylesFolder/loginStyles.css">
</head>
<body>
    <div id="form1">
        <form action="processLogin.php" method="POST">
            <p>
                <label>Username</label>
                <input type="text" id="user" name="user"/>
            </p>
            <p>
                <label>Password</label>
                <input type="password" id="pass" name="pass"/>
            </p>
            <p>
                <input type="submit" id="btn" name="Login"/>
            </p>
        </form>
    </div>

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