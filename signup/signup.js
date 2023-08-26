import {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    db,
    doc,
    setDoc
  }
  
    from "../firebaseConfig.js"

 

  
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const username = document.querySelector("#username");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const cPassword = document.querySelector("#cPassword");
  const signupBtn = document.querySelector("#signupBtn");
  signupBtn.addEventListener("click", signupHandler)
  
  async function signupHandler() {
    if (!firstName.value || !lastName.value || !username.value || !email.value || !password.value || !cPassword.value) {
      return alert("All fields are required!")
    }
  
    if (password.value.length < 6) {
      return alert("Password should be at least 6 characters!")
    }
  
    if (password.value !== cPassword.value) {
      return alert("Password and confirm password are not match!")
    }
  
    console.log(firstName.value, lastName.value, username.value, email.value, password.value, cPassword.value)
  
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email.value, password.value)
  
      if (userCredentials) {
        console.log(userCredentials.user.uid)
  
        await setDoc(doc(db, "Users", userCredentials.user.uid), {
          firstName: firstName.value,
          lastName: lastName.value,
          username: username.value,
          email: email.value,
          recruiter: false
        })
  
  
  
        alert("User is successfully registered! Diverting you to the login page...")
        setTimeout(() => {
          window.location.href = "../login/login.html"
        }, 1000);
  
  
      }
  
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
    }
  
  }