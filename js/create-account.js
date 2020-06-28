const INPUT_USER = document.getElementById("createUserName")
const INPUT_PASSWORD = document.getElementById("createUserPassword")
const CREATE_ACCOUNT = document.getElementById("createAccount")


CREATE_ACCOUNT.addEventListener("click", createUser)


function DEBUG() {
    localStorage.clear()
}

function validateCreateUser() {
    return new Promise((resolve, reject) => {
        if (/[\W , \s]/.test(INPUT_USER.value)) {
            reject({validateUser: "spacesCharacter"})

        } else if (INPUT_USER.value.length < 5) {
            reject({validateUser: "lowLength"})

        } else {
            resolve()
        }
    })
}

function validateCreatePassword() {
    return new Promise((resolve, reject) => {
        if (/\s/.test(INPUT_PASSWORD.value) || INPUT_PASSWORD.value.length < 5) {
            reject({validatePass: false})
            
        } else {
            resolve()
        }
    })
}


async function createUser() {

    try {
        const VALIDATE_USER = await validateCreateUser()
        const VALIDATE_PASSWORD = await validateCreatePassword()

        console.log(VALIDATE_USER, VALIDATE_PASSWORD)
        localStorage.setItem(INPUT_USER.value, INPUT_PASSWORD.value)

        return redirectCreateToLogin()

    } catch (error) {
        if(error.validateUser === "spacesCharacter"){
            document.getElementById("createUserNotification").innerHTML = "Não pode conter caracteres especiais e nem espaços."
            document.getElementById("createPassNotification").innerHTML = ''
        }
        
        if (error.validateUser === "lowLength"){
            document.getElementById("createUserNotification").innerHTML = "Requer no minimo 5 caracteres."
            document.getElementById("createPassNotification").innerHTML = ''
        }

        if(error.validatePass === false){
            document.getElementById("createPassNotification").innerHTML = "Digite no minimo 5 caracteres."
            document.getElementById("createUserNotification").innerHTML = ''
        }
    }

        
}