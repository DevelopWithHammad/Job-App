import { auth, signInWithEmailAndPassword } from "../firebaseConfig.js"

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn")
loginBtn.addEventListener("click", loginHandler)

async function loginHandler() {

    try {
        console.log("Login Handler working properly!")
        console.log(email.value, password.value)

        const userCredentials = await signInWithEmailAndPassword(auth, email.value, password.value)

        if (userCredentials) {
            console.log(userCredentials.user.uid)
            alert("User is successfully Logged in! Diverting you to the Dashboard...")
            setTimeout(() => {
                window.location.href = "../dashboard/dashboard.html"
            }, 2000);
        }
        else {
            console.log("User not found")
        }


    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)

        if (errorCode === "auth/wrong-password") {
            return alert("Wrong Password!")
        }
        if (errorCode === "auth/user-not-found") {
            return alert("Wrong Email!")
        }
    }
}