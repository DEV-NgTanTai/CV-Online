
var url = window.location.href; //   Ví dụ: google.com/login.html
var parts = url.split("/");
var lastPart = parts[parts.length - 1];
console.log(lastPart); //   Output: login.html

var adminOfThisPage
for (user of admins) {
    if (user.url == lastPart){
        adminOfThisPage = user;
        break;
    }
}
var sessionName =     sessionStorage.getItem('username');
var sessionPass =     sessionStorage.getItem('password');

if ( sessionName != adminOfThisPage.name 
    || sessionPass != adminOfThisPage.password 
    ) {
    document.getElementById("txt").textContent = "Bạn không có quyền truy cập vào trang này!"
    document.cookie = "";
}
function logout() {
    sessionStorage.setItem("password",null);
    sessionStorage.setItem("username",null);
    window.location.replace("./login.html");
}