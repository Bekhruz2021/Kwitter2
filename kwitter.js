function addUser()
{
user_name = document.getElementById("user_name").value;
localStorage.setItem("user_name", user_name);
window.location = "kwitter_room.html";
}
const firebaseConfig = {
  apiKey: "AIzaSyCfRsQD1SHw4rfYxkLoFYgvZbdes4Bm1lA",
  authDomain: "kwitter-app-855a1.firebaseapp.com",
  databaseURL: "https://kwitter-app-855a1-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-855a1",
  storageBucket: "kwitter-app-855a1.appspot.com",
  messagingSenderId: "655426464759",
  appId: "1:655426464759:web:3528c8c370499fa08c1cf2",
  measurementId: "G-P7DLDJEF0D"
};
firebase.initializeApp(firebaseConfig);