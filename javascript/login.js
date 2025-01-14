function login(){
let username = document.querySelector('#username').value
let Password = document.querySelector('#Password').value

if(username == "abcd" && Password == "1234"){
    alert("Login Success")
}
else{
    alert("Login Failed")
}

}