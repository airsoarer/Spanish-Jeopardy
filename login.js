(function(){
    $(document).ready(init);
    var config = {
        apiKey: "AIzaSyD5t54w5Btl7sAnWV4Sqh95pfLPVzPC7IQ",
        authDomain: "spanish-jeoperdy.firebaseapp.com",
        databaseURL: "https://spanish-jeoperdy.firebaseio.com",
        projectId: "spanish-jeoperdy",
        storageBucket: "spanish-jeoperdy.appspot.com",
        messagingSenderId: "738971990589"
    };

    function init(){
        firebase.initializeApp(config);
        $('.enter').on('click', login);
        $('.enter').keyup(function(event){
            if(event.keyCode === 13){
                console.log("working");
                login();
            }
        });
    }

    function login(){
        // Get email and pass
        var email = $('#email').val();
        var pass = $('#pass').val();

        // Get Firebase auth ref
        var auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, pass);

        stateChanged();
    }

    function stateChanged(){
        firebase.auth().onAuthStateChanged(firebaseUser =>{
            if(firebaseUser){
                location.replace('teacher.html');
            }else{
                alert("Incorrect Email or Password");
            }
        });
    }
})();
