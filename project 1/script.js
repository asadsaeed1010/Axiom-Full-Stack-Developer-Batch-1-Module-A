console.log("asad");
///retriving html elements from dom
const form=document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('password');
const email=document.getElementById('email');
const password2=document.getElementById('password2');
///////////function to update class and message for errors
function showError( input,message){
    /////////get the parent element of the inputfield(.form-control)
    const formControl= input.parentElement;
    ///////overrride the class -add error
    formControl.className="form-control error";
    //////get the small element for the error messsage
    const small =formControl.querySelector('small');
    ////override the text for smalll element usung the input message
    small.innerText =message;

}
//////function to update class for success
function showSuccess(input) {
    /////////get the parent element of the inputfield(.form-control)
    const formControl= input.parentElement;
    ///////overrride the class -add success
    formControl.className="form-control success";
}

///////function to check if email is valid
function checkEmail(input) { const re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (re.test(input.value.trim())){
    showSuccess(input);
} else {
    showError(input,`this is not a valid email`)
}
}

function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if( input.value === " "){
        showError(input,`${getFieldId(input)} is required`);
        }else {
            showSuccess(input);
        }
        
    });
}
function getFieldId(input) {
    return input.id.charAt(0).toUpperCase()+ input.id.slice(1);
}

function checkLength(input, min , max) {
    if( input.value.length < min ){
        showError( input, `${getFieldId(input)} needs to be at least ${min} characters` );
    } else if (input.value.length > max) {
        showError( input, `${getFieldId(input)} needs to be at less ${max} characters` );
    } else{
        showSuccess(input);
    }
}
function checkPasswordMatch(input1,input2){
 if(input1.value=== input2.value){
    showError( input2,"password does not match")
}

}

//////event listener
//// creating event listener for submit button
form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username,3,10);
    checkLength(password,6,30);
    checkEmail(email);
    checkPasswordMatch(password,password2);
});
