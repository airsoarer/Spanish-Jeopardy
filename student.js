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

        // Get Firebase ref 
        var ref = firebase.database().ref('Boards');
        ref.on('child_added', function(snapshot){
            var data = snapshot.val();
            var key = snapshot.key;
            
            // Board Div
            var boardDiv = document.createElement("div");
            boardDiv.classList.add("row");
            boardDiv.classList.add("boardDiv");
            boardDiv.id = key + "div";

            // Board Title
            var h1 = document.createElement("h1");
            h1.textContent = data.Info.Board;

            // Board Title Div
            var boardTitleDiv = document.createElement("div");
            boardTitleDiv.classList.add("col");
            boardTitleDiv.classList.add("s8");
            boardTitleDiv.classList.add("boardTitleDiv");
            boardTitleDiv.id = key + "titleDiv";
            boardTitleDiv.appendChild(h1);

            // Board Description
            var p = document.createElement("p");
            p.textContent = data.Info.Description;

            // Board Description Div
            var boardDescriptionDiv = document.createElement("div");
            boardDescriptionDiv.classList.add("col");
            boardDescriptionDiv.classList.add("s4");
            boardDescriptionDiv.classList.add("boardDescriptionDiv");
            boardDescriptionDiv.id = key + "descriptionDiv";
            boardDescriptionDiv.appendChild(p);

            // Button
            var btn = document.createElement("button");
            btn.classList.add("button");
            btn.classList.add("play");
            btn.textContent = "Play";
            btn.id = key + "btn";

            // Play Button Div
            var btnDiv = document.createElement("div");
            btnDiv.classList.add("btnDiv");
            btnDiv.id = key + "btnDiv";
            btnDiv.appendChild(btn);

            // Description and Button
            var dAndB = document.createElement("div");
            dAndB.classList.add("col");
            dAndB.classList.add("s4");
            dAndB.classList.add("dAndBDiv");
            dAndB.id = key + "dAndB";
            dAndB.appendChild(btnDiv);
            dAndB.appendChild(boardDescriptionDiv);

            boardDiv.appendChild(boardTitleDiv);
            boardDiv.appendChild(dAndB);

            document.getElementById('boards').appendChild(boardDiv);
        });

        $(document.body).on("click", '.play', play);
    }

    function play(){
        var fid = $(this).attr("id");
        var id = $(this).attr('id');
        id = id.split("btn");
        id = id[0];

        location.replace("board.html?board=" + id + "?type=student");
    }
})();