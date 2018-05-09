let user = "Pavel";
let dom = function () {
    function showUser(username) {
        if(username === ''){
            return;
        }
        let isUser = (username !== null)
        user = username;
        if(isUser){
            document.getElementById('headerUsername').innerHTML = '<h1>' + username + '</h1>';
            document.getElementsByClassName('exit')[0].innerHTML = '<img src = "img/Logout-512.png" alt="logout" class="exit">'
        }
        else{
            document.getElementById('headerUsername').innerHTML = '';
            document.getElementsByClassName('exit')[0].innerHTML = '<img src = "img/SignIn.png" alt="logout" class="exit">'
        }
    }

    function showPhotoPost() {
        
    }

}