
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    console.log("set cookie");
}

function login(event){
    event.preventDefault();

    var input_user = document.getElementById("username").value
    var input_password = document.getElementById("password").value
    

    for (user of admins) {
        if (user.name == input_user && user.password == input_password){
            sessionStorage.setItem('username', user.name);
            sessionStorage.setItem('password', user.password);
            
       
           
            window.location.href = "./"+user.url;
            return;
        }
    }
    window.alert("Sai tên đăng nhập hoặc mật khẩu!");
}


var sessionName =     sessionStorage.getItem('username');
var sessionPass =     sessionStorage.getItem('password');

for (user of admins){


if ( sessionName == user.name 
    && sessionPass == user.password 
    ) {
    window.location.href = "./"+user.url;
}
}