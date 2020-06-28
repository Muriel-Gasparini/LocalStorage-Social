const LOGIN = document.getElementById("login")
const INPUT_USER = document.getElementById("userName")
const INPUT_PASSWORD = document.getElementById("userPassword")

LOGIN.addEventListener("click", loginUser)

function DEBUG(){
    sessionStorage.clear()
    verifySession()
}

function validateUser(){

    let allUsers = Object.keys(localStorage)
    let userFound = false

    return new Promise((resolve, reject) => {

        allUsers.forEach(user => {
            if(user === INPUT_USER.value){
                userFound = true
            }
        });

        if(userFound){

            resolve({user: INPUT_USER.value})

        } else {

            reject({userFound: userFound})
        }

    })


}

function validatePassword(user){

    return new Promise((resolve, reject) => {
        if(localStorage.getItem(user.user) == INPUT_PASSWORD.value){

            resolve({passFound: true})
            
        } else {

            reject({passFound: false})
        }
    })

   
}

function redirectLoginToHome(){
    const PAGE_LOGIN_HOME = document.location.href.replace("index.html", "pages/home.html")
    return document.location = PAGE_LOGIN_HOME
}


async function loginUser(){

    try {
        const USER_SEARCH = await validateUser()
        const PASS_SEARCH = await validatePassword(USER_SEARCH)
        const LOGIN_SUCESS = await redirectLoginToHome()
        
        return createSession()
   
    } catch (error) {
        
        if(error.userFound === false){
            document.getElementById("userNotification").innerHTML = "O usuário informado não existe."
            document.getElementById("passNotification").innerHTML = ''
        }

        if(error.passFound === false){
            document.getElementById("passNotification").innerHTML = "A senha informada está incorreta."
            document.getElementById("userNotification").innerHTML = ''
        }
        
    }

}

