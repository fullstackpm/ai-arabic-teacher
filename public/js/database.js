// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set,  } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4l6yGORH8FMCYs8Drn1bQn2j2-jjplUE",
  authDomain: "ai-arabic-teacher-7a7f3.firebaseapp.com",
  projectId: "ai-arabic-teacher-7a7f3",
  storageBucket: "ai-arabic-teacher-7a7f3.appspot.com",
  messagingSenderId: "356056893159",
  appId: "1:356056893159:web:6fd35417956bac120fc442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);            
// document.getElementById("advanceBtn").addEventListener('click', function(e){
//     e.preventDefault();
//     set(ref(db, 'students/'+data.student.id), JSON.stringify(data))
// });
document.getElementById("advanceBtn").addEventListener('click', function(e) {
  e.preventDefault();
  const newStudentRef = db.ref('students').push(); // Generate a new unique ID
    data.studentId = newStudentRef.key; // Assign the generated ID to studentId

    newStudentRef.set(data)
      .then(() => {
        console.log('Student data saved with ID:', newStudentRef.key);
      })
      .catch((error) => {
        console.error('Error adding student data:', error);
      });
    });