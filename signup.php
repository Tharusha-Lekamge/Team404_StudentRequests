<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup Page</title>
    <link rel="stylesheet" type="text/css" href="StylesFolder/loginStyles.css">
</head>
<body>
    
    <div id="form1">
        <form class="login-form" onsubmit = "return validation()" action="processSignup.php" method="POST" >
            <h1>Signup</h1>
            <p>
                <label>E-mail</label>
                <input required="" type="email" id="email" name="email"/>
            </p>
            <p>
                <label>Username</label>
                <input required="" type="text" id="user" name="user"/>
            </p>
            <p>
                <!-- Password must contain least one number and one uppercase and lowercase letter, and at least 8 or more characters-->
                <label>Password</label> 
                <input required="" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" id="pass" name="pass"/>
                <br>
                <label>Password must contain least one number and one uppercase and lowercase letter, and at least 8 or more characters</label>
            </p>
            <p>
                <label>Re-enter Password</label>
                <input required="" type="password" id="Repass" name="Repass"/>
            </p>
            <p>
                <input type="submit" value="Register" id="btn" name="signup"/>
            </p>
        </form>
    </div>

    <script>  
    function validation()  
    {  
        var id=document.f1.user.value;  
        var ps=document.f1.pass.value; 
        if (Repass.innerHTML == pass.innerHTML){
            alert("Correct";)
        } else{
            alert("Password no match")
        }
        if(id.length=="" && ps.length=="") {  
            alert("User Name and Password fields are empty");  
            return false;  
        }
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