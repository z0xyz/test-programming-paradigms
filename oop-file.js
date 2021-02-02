// //designing logical computation using the oop paradigm : 

// we can think of the differnet "separate objects" we have at the 'File.html' file 
// -Form object 
//     -has two inputs
//     -has one submit button 
//     -have a method (which is triggered when the button is fired )


// Validation (can be another object)
//     -holds the validation logic (that we'll use later on)

validationObject = {
    checkInput : function(event) {
        event.preventDefault();
        if (userInputObject.userInput.value.length == 0) {
            userInputObject.userInput.style.backgroundColor = 'red'
        }
        if (userInputObject.userPassword.value.length == 0) {
            userInputObject.userPassword.style.backgroundColor = 'red'
        }
        else {
            let newUser = new createUser()
            console.log(newUser)
            newUser.greet()
            return (true)
        }
    }
}


function formConstruct() {
    this.userForm= document.getElementById('user-input')
    this.userInput = document.getElementById('username')
    this.userPassword = document.getElementById('password')
}

function createUser() {
    this.name = userInputObject.userInput.value
    this.password = userInputObject.userPassword
    this.greet = function(){
        console.log(`hello , how you doing ${this.name}`)
    }
}

let userInputObject = new formConstruct()
userInputObject.userForm.addEventListener('submit',validationObject.checkInput,false)
