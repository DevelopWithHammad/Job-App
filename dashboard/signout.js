const signoutBtn = document.querySelector("#signoutBtn")
signoutBtn.addEventListener("click", signoutHandler)




async function signoutHandler() {
    console.log("Signout is working!!")
    alert("Signing out...Please wait!")
    setTimeout(() => {
        window.location.href = "../login/login.html"
    }, 2000);
}
