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
function isValidEmail(email) { const re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLocaleLowerCase());
}


//////event listener
//// creating event listener for submit button
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log(username.value);
    ////check if username is empty.
    if (username.value==="") {

    showError(username, "Username is required");
    }
    else{
        showSuccess(username)
    }
    if (email.value==="") {

        showError(email, "Email is required");
        }
        else if (!isValidEmail(email.value)){
            showError(email,"Email is invalid")

        }
        
        else{
            showSuccess(email)
        }
        if (password.value==="") {

            showError(password, "Password is required");
            }
            else{
                showSuccess(password)
            }
            if (password2.value==="") {

                showError(password2, "Confirm Password is required");
                }
                else{
                    showSuccess(password2)
                }
});

