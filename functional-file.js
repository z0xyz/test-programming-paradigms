// we think in terms of 'functional programming' about 'importing&exporting' functions 
// we'll be creating a template functions that can be applied to anything , and accept any input to work , as long as the domain of inputs is (acceptable / can be processed at this very function )


function elementGetter(elementId) {
    let ndoeObject = document.getElementById(elementId)
    return(ndoeObject)
}

function checkValue(ndoeObject) {
    if (ndoeObject.value == ''){
        ndoeObject.style.backgroundColor = 'red'
    }
    else {
        console.log(`The ${ndoeObject.attributes.name.value} has a value of ${ndoeObject.value} `)
        return (true)
    }
}

function createUser(ndoeObject , secondNodeObject) {
    this.username = ndoeObject.vlaue 
    this.password = secondNodeObject.value
}

function formValidate(event , ndoeObject , secondNodeObject) {
    event.preventDefault()
    ndoeObject =  elementGetter('username')
    secondNodeObject = elementGetter('password')
    checkValue(ndoeObject)
    checkValue(secondNodeObject)

    let userObject = new createUser(ndoeObject , secondNodeObject)
    console.log(userObject)
}
elementGetter('user-input').addEventListener("submit",formValidate,false)

