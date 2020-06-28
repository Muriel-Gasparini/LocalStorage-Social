function createSession(){
    sessionStorage.setItem("online", true)
}


function verifySession(){
    if(!sessionStorage.getItem("online")){
        redirectHomeToLogin()
    }
}

function redirectHomeToLogin(){
    const PAGE_HOME_LOGIN = document.location.href.replace("pages/home.html", "index.html")
    return document.location = PAGE_HOME_LOGIN
}

function redirectCreateToLogin(){
    const PAGE_CREATE_LOGIN = document.location.href.replace("pages/create-account.html", "index.html")
    return document.location = PAGE_CREATE_LOGIN
}


function DEBUG(){
    sessionStorage.clear()
    verifySession()
}