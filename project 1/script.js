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
