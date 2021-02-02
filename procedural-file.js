function formSubmit(event) {
    event.preventDefault()
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    const enteredUserName = username.value
    const enteredPassword = password.value
    if (enteredUserName.trim().length === 0) {
        username.style.backgroundColor = 'red'
        window.alert("username is invalid !")
        return
    }
    if (enteredPassword.trim().length <= 5 ) {
        password.style.backgroundColor = 'red'
        alert("The password must be 6 chars or more !")
        return 
    }
    let someUser = {
        'userName' : enteredUserName ,
        'userPassword' : enteredPassword
    }

    console.log(someUser)
    console.log(`Hello i'm ${someUser.userName}`)
}


document.addEventListener("submit",formSubmit,false)
