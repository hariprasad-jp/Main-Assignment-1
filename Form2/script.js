
let submitError = document.getElementById('submit-error')
let submitBtn = document.getElementById('submit')


submitBtn.addEventListener('click', () => {

    // console.log(validatePassword())
    // console.log(validateName())
    // console.log(validateEmail())
    // console.log(validateRepeat())

    if (validateName() && validateEmail() && validatePassword() && validateRepeat()) {

        submitBtn.removeAttribute("aria-disabled")
        submitBtn.innerHTML = "Submit"
        validateForm()

    }
    else {
        submitError.innerHTML = 'Please resolve the errors';
    }

})

function validateForm() {

    // console.log('validate forms called')
    submitError.innerHTML = '';
    window.location.href = "success.html";

}


function validateName() {


    let nameError = document.getElementById('username-error')
    let name = document.getElementById('username')
    let flag = false;


    if (name.value.trim() == '') {
        nameError.innerHTML = 'username cannot be blank';


    } else if (name.value.length < 5) {
        nameError.innerHTML = 'username must not be less than 5 characters';
    }
    else {
        nameError.innerHTML = '';
        flag = true;
    }


    return flag

}

function validateEmail() {

    let email = document.getElementById('email');
    let emailError = document.getElementById('email-error')
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email.value.trim() == '') {
        emailError.innerHTML = 'Email cannot be blank';
        return false;
    } else if (!email.value.match(regEx)) {
        emailError.innerHTML = 'Email not in global format';
        return false;
    } else {
        emailError.innerHTML = '';
        return true;
    }

}





function validatePassword() {


    let password = document.getElementById('password');
    let passwordError = document.getElementById('password-error');

    let indicator = document.querySelector(".indicator");
    let weak = document.querySelector(".weak");
    let medium = document.querySelector(".medium");
    let strong = document.querySelector(".strong");
    let text = document.querySelector(".text");
    let regExpWeak = /[a-z]/;
    let regExpMedium = /\d+/;
    let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
    let whitespaceRegExp = /^$|\s+/;


    if (password.value != "") {
        indicator.style.display = "block";
        indicator.style.display = "flex";
        if (password.value.length <= 3 && (password.value.match(regExpWeak) || password.value.match(regExpMedium) || password.value.match(regExpStrong))) no = 1;
        if (password.value.length >= 6 && ((password.value.match(regExpWeak) && password.value.match(regExpMedium)) || (password.value.match(regExpMedium) && password.value.match(regExpStrong)) || (password.value.match(regExpWeak) && password.value.match(regExpStrong)))) no = 2;
        if (password.value.length >= 6 && password.value.match(regExpWeak) && password.value.match(regExpMedium) && password.value.match(regExpStrong)) no = 3;
        if (password.value.length <= 3 && (password.value.match(regExpWeak) && password.value.match(whitespaceRegExp) || password.value.match(regExpMedium) && password.value.match(whitespaceRegExp) || password.value.match(regExpStrong) && password.value.match(whitespaceRegExp))) no = 4;
        if (password.value.length >= 6 && ((password.value.match(regExpWeak) && password.value.match(regExpMedium) && password.value.match(whitespaceRegExp)) || (password.value.match(regExpMedium) && password.value.match(regExpStrong) && password.value.match(whitespaceRegExp)) || (password.value.match(regExpWeak) && password.value.match(regExpStrong) && password.value.match(whitespaceRegExp)))) no = 5;
        if (password.value.length >= 6 && password.value.match(regExpWeak) && password.value.match(regExpMedium) && password.value.match(regExpStrong) && password.value.match(whitespaceRegExp)) no = 6;
        if (password.value.match(whitespaceRegExp)) no = 7;
        if (no == 4 || no == 5 || no == 6 || no == 7) {
            text.textContent = "White spaces are not allowed";
            text.style.display = "block";
            indicator.style.display = "none";
            password.value = "";


        }
        if (no == 1) {
            weak.classList.add("active");
            text.style.display = "block";
            text.textContent = "Your password is too week";
            text.classList.add("weak");

        }
        if (no == 2) {
            medium.classList.add("active");
            text.textContent = "Your password is medium";
            text.classList.add("medium");

        } else {
            medium.classList.remove("active");
            text.classList.remove("medium");
        }
        if (no == 3) {
            weak.classList.add("active");
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent = "Your password is Strong";
            text.classList.add("strong");

        } else {
            strong.classList.remove("active");
            text.classList.remove("strong");
        }


    } else {
        indicator.style.display = "none";
        text.style.display = "none";
        // return true;
    }



    if (password.value.trim() == '') {
        passwordError.innerHTML = 'Password cannot be blank';
        return false;
    } else if (password.value.length < 6 || password.value.length > 20) {
        passwordError.innerHTML = 'Password length cannot be less than 6 characters or more than 20 characters';
        return false;
    } else {
        passwordError.innerHTML = '';
        return true;
    }
}

function validateRepeat() {
    let password = document.getElementById('password')
    let repeatPassword = document.getElementById('repeat')
    let repeatError = document.getElementById('repeat-error')

    if (password.value != repeatPassword.value) {
        repeatError.innerHTML = 'Password mismatch';
        return false;
    } else {
        repeatError.innerHTML = '';
        return true
    }

}
