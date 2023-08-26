const registerBtn = document.querySelector("#registerBtn");
registerBtn.addEventListener("click", registerBtnHandler)

function registerBtnHandler() {
    if(registerBtn) {
        console.log("registerBtn is working")
        window.location.href = "signup/signup.html"
    }
}

