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
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
      //Start code

      //End code
});});}
getData();
function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room_name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}
function redirectToRoomName()
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}