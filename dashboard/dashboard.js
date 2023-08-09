import { auth, onAuthStateChanged, doc, getDoc, db, setDoc, updateDoc, query, collection, getDocs } from "../firebaseConfig.js"

const username = document.querySelector("#username");

const whoIam = document.querySelector("#whoIam");
whoIam.addEventListener("click", switchToCandidateOrRecruiterHandler)

const jobPost = document.querySelector("#jobPost")
jobPost.style.display = "none"

const jobPostArea = document.querySelector('#jobPostArea');


getSignedInUser()
getAllJobs();


let loggedInUserId;
let recruiter;

async function getSignedInUser() {
    await onAuthStateChanged(auth, async (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid)

            loggedInUserId = uid

            const docRef = doc(db, "Users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());


                const { username: usernameFromDB, recruiter: recruiterFromDB } = docSnap.data()

                recruiter = recruiterFromDB

                username.innerText = usernameFromDB;
                whoIam.innerText = `Switch to ${recruiter ? "candidate" : "recruiter"}`

                if (recruiter) {
                    jobPost.style.display = 'block'
                } else {
                    jobPost.style.display = 'none'
                }




            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
        } else {
            alert("You are not signed in")
            setTimeout(() => {
                window.location.href = "../index.html"
            }, 2000);
        }
    });
}



async function switchToCandidateOrRecruiterHandler() {
    console.log("switchToCandidateOrRecruiterHandler Working Properly!")
    const userDetails = doc(db, "Users", loggedInUserId);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userDetails, {
        recruiter: !recruiter
    });
    getSignedInUser()

}



async function getAllJobs() {
  console.log("Getting All Jobs")

  const q = query(collection(db, "posts"))

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
      const {
          country,
          city,
          companyName,
          designation,
          endingSalary,
          startingSalary,
          jobType,

      } = doc.data();

      const content = `

          <div id="jobPostArea">

        <div class="">
            <div class="">
                <p class="">Indeed Team</p>
                <p class="">Database Programmer</p>
                <p class="">Rs100k - 150k</p>
            </div>
            <div class=""><img src="" alt=""></div>
        </div>
        <div class="">
            <p class="">A Bachelor’s Degree from an accredited college or university with a major in computer
                science or a closely related field, including course work in both applications programming and
                systems analysis.</p>
        </div>
        <div class=""><button class="" type="button">Hybird<span class=""></span></button>
            <p class=""> Karachi, Pakistan</p>
        </div>
        <div class="">
            <p class="">1 day ago</p>
        </div>
    </div>
      `;

      const myPostElement = document.createElement('div');
      myPostElement.innerHTML = content;
      myPostElement.style =
          'border: 1px solid black; border-radius: 15px; padding: 50px';
      jobPostArea.appendChild(myPostElement);

      console.log(doc.id, " => ", doc.data());
  });
}
