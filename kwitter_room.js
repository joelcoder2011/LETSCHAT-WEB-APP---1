// Your web app's Firebase conf
var firebaseConfig = {
      apiKey: "AIzaSyDCR6cjlchWZXFMeund-0yWOn7abZ1VLdA",
      authDomain: "kwitter-fd108.firebaseapp.com",
      databaseURL: "https://kwitter-fd108-default-rtdb.firebaseio.com",
      projectId: "kwitter-fd108",
      storageBucket: "kwitter-fd108.appspot.com",
      messagingSenderId: "1086891159461",
      appId: "1:1086891159461:web:ab001bfb9205e1c453424c"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
