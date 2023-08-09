import { addDoc, collection, db } from "../firebaseConfig.js"

const companyName = document.querySelector("#companyName")
const designation = document.querySelector("#designation")
const startingSalary = document.querySelector("#startingSalary")
const endingSalary = document.querySelector("#endingSalary")
const jobTypeSelection = document.querySelector("#jobTypeSelection")
const jobLocationSelection = document.querySelector("#jobLocationSelection")
const jobSubmitBtn = document.querySelector("#jobSubmitBtn")
jobSubmitBtn.addEventListener("click", postJobHandler)

async function postJobHandler() {
    console.log("postJobHandler is working!!!")

    if (
        !companyName.value ||
        !designation.value ||
        !startingSalary.value ||
        !endingSalary.value ||
        !jobTypeSelection.checked ||
        !jobLocationSelection.value|| // Check against "select" value
        !description.value
    ) {
       return alert('All fields are required');
    }

    

    const userAdded = await addDoc(collection(db, "Post"), {
        companyName: companyName.value,
        designation: designation.value,
        startingSalary: startingSalary.value,
        endingSalary: endingSalary.value,
        jobTypeSelection: jobTypeSelection.checked,
        jobLocationSelection: jobLocationSelection.value,
    })

    alert('Post added successfully, moving to jobs page, so you can have a look');
    window.location.href = '../dashboard/dashboard.html';

}