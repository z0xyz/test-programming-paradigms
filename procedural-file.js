// let boxRed = document.getElementsByClassName('box-red').item(0)

// for (let i = 0 ; i < 100 ; i++) {
//     boxRed.style.marginLeft = `${i+1}%`
// }


// let passwordInput = document.getElementById('password')
// let i = 0 ;

// function passwordMatch() {
//     if (i < 3) {
//         i += 1
//         if (passwordInput.value != "1234") {
//             passwordInput.style.backgroundColor = 'red'
//         }
//     }
//     else {
//         passwordInput.parentNode.removeChild(passwordInput)
//     }
// }

// passwordInput.addEventListener("focusout",passwordMatch,false)


// Things that i will do after the internet is back :
// -finsih the tar / backup part 
// -learn about the 'staically & dynamic and these stuff about js'
// -complete 'objects' in 'js : definitive guide'
// -learn dispatching events
// -learn about clock object , and how to delay stuff for a while 
// -Check out the the return statement & break ... someone once said 
// that when you add the return statement , you're canceling the function execution so that we don't continue in the code 
// like for instance if you have a function with two consecutive if conditional statements , and you wanna make sure if one of these functions evaluated to true to stop the sequential execution of the following statments following this if fnction function 
// you may also have mutliple if statements within a function , and if any one of these if statements checked something in the expression , you can use a return false to exist the function and the subsequent checks / if statements won't be executed 



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