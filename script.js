$(document).ready(function () {

    // Validar Nome de Usuário
    $("#usercheck").hide();
    let usernameError = true;
    $("#usernames").keyup(function () {
        validateUsername();
    });

    function validateUsername() {
        let usernameValue = $("#usernames").val();
        if (usernameValue.length === "") {
            $("#usercheck").show();
            usernameError = false;
            return false;
        } else if (usernameValue.length < 3 || usernameValue.length > 10) {
            $("#usercheck").show();
            $("#usercheck").html("**length of username must be between 3 and 10");
            usernameError = false;
            return false;
        } else {
            $("#usercheck").hide();
            usernameError = true;
        }
    }

    // "Validar Email
    const email = document.getElementById("email");
    let emailError = true;
    email.addEventListener("blur", () => {
        let regex = 
        /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if (regex.test(s)) {
            email.classList.remove("is-invalid");
            emailError = true;
        } else {
            email.classList.add("is-invalid");
            emailError = false;
        }
    });

    // Validar Senha
    $("#passcheck").hide();
    let passwordError = true;
    $("#password").keyup(function () {
        validatePassword();
    });
    function validatePassword() {
        let passwordValue = $("#password").val();
        if (passwordValue.length === "") {
            $("#passcheck").show();
            passwordError = false;
            return false;
        }
        if (passwordValue.length < 3 || passwordValue.length > 10) {
            $("#passcheck").show();
            $("#passcheck").html(
                "**length of your password must be between 3 and 10"
            );
            $("#passcheck").css("color", "red");
            passwordError = false;
            return false;
        } else {
            $("#passcheck").hide();
            passwordError = true;
        }
    }

    // "Validar Confirmação de Senha
    $("#conpasscheck").hide();
    let confirmPasswordError = true;
    $("#conpassword").keyup(function () {
        validateConfirmPassword();
    });
    function validateConfirmPassword() {
        let confirmPasswordValue = $("#conpassword").val();
        let passwordValue = $("#password").val();
        if (passwordValue !== confirmPasswordValue) {
            $("#conpasscheck").show();
            $("#conpasscheck").html("**Password didn't Match");
            $("#conpasscheck").css("color", "red");
            confirmPasswordError = false;
            return false;
        } else {
            $("#conpasscheck").hide();
            confirmPasswordError = true;
        }
    }

    // "Botão de Enviar
    $("#submitbtn").click(function () {
        validateUsername();
        validatePassword();
        validateConfirmPassword();
        email.dispatchEvent(new Event('blur')); 
        
        if (
            usernameError &&
            passwordError &&
            confirmPasswordError &&
            emailError
        ) {
            return true;
        } else {
            return false;
        }
    });
});