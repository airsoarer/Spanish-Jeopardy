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

            // Board Description
            var p = document.createElement("p");
            p.textContent = data.Info.Description;

            // Board Description Div
            var boardDescriptionDiv = document.createElement("div");
            // boardDescriptionDiv.classList.add("col");
            // boardDescriptionDiv.classList.add("s4");
            boardDescriptionDiv.classList.add("boardDescriptionDiv");
            boardDescriptionDiv.id = key + "descriptionDiv";
            boardDescriptionDiv.appendChild(p);

            // Board Title Div
            var title = document.createElement("div");
            title.classList.add("col");
            title.classList.add("s8");
            title.classList.add("titleDiv");
            title.id = key + "title";
            title.appendChild(h1);

            // Board Title and Descritption Div
            var boardTDDiv = document.createElement("div");
            boardTDDiv.classList.add("col");
            boardTDDiv.classList.add("s8");
            boardTDDiv.classList.add("boardTitleAndDescriptionDiv");
            boardTDDiv.id = key + "titleAndDescriptionDiv";
            // boardTDDiv.appendChild(title);
            // boardTDDiv.appendChild(boardDescriptionDiv);

            // Play Button
            var playBtn = document.createElement("button");
            playBtn.classList.add("button");
            playBtn.classList.add("play");
            playBtn.textContent = "Play";
            playBtn.id = key + "playBtn";

            // Play Button Div
            var btnDiv = document.createElement("div");
            btnDiv.classList.add("btnDiv");
            btnDiv.id = key + "btnDiv";
            btnDiv.appendChild(playBtn);

            // Edit Button 
            var editBtn = document.createElement("button");
            editBtn.classList.add("button");
            editBtn.classList.add("edit")
            editBtn.textContent = "Edit";
            editBtn.id = key + "editBtn";

            // Edit Button Div
            var editDiv = document.createElement("div");
            editDiv.classList.add("editBtnDiv");
            editDiv.id = key + "editBtnDiv";
            editDiv.appendChild(editBtn);

            // Delete Button 
            var deleteBtn = document.createElement("button");
            deleteBtn.classList.add("delete");
            deleteBtn.classList.add("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.id = key + "deleteBtn";

            // Delete Button Div
            var deleteDiv = document.createElement("div");
            deleteDiv.classList.add("deleteBtnDiv");
            deleteDiv.id = key + "deleteBtnDiv";
            deleteDiv.appendChild(deleteBtn);
            $(deleteDiv).show();

            // Delete Button Two
            var deleteBtn2 = document.createElement("button");
            deleteBtn2.classList.add("deleteTwo");
            deleteBtn2.classList.add("button");
            deleteBtn2.textContent = "Are you sure you want to delete this Board";
            deleteBtn2.id = key + "deleteBtnTwo";

            // Delete Button Div Two
            var deleteDiv2 = document.createElement("div");
            deleteDiv2.classList.add("deleteBtnDivTwo");
            deleteDiv2.id = key + "deleteBtnDivTwo";
            deleteDiv2.appendChild(deleteBtn2);
            $(deleteDiv2).hide();

            // Buttons Div
            var btnsDiv = document.createElement("div");
            btnsDiv.classList.add("BtnsDiv");
            btnsDiv.classList.add("col");
            btnsDiv.classList.add("s4");
            btnsDiv.id = key + "BtnsDiv";
            btnsDiv.appendChild(btnDiv);
            btnsDiv.appendChild(editDiv);
            btnsDiv.appendChild(deleteDiv2);
            btnsDiv.appendChild(deleteDiv);

            boardDiv.appendChild(title);
            boardDiv.appendChild(btnsDiv);

            document.getElementById('boards').appendChild(boardDiv);
        });

        $(document.body).on("click", '.play', play);
        $(document.body).on("click", '.edit', edit);
        $(document.body).on("click", '.delete', delFunction);
        $(document.body).on("click", '.deleteTwo', delTwo);
    }

    function play(){
        var fid = $(this).attr("id");
        var id = $(this).attr('id');
        id = id.split("play");
        id = id[0];

        location.replace("board.html?board=" + id + "?type=teacher");
    }

    function edit(){
        var id = $(this).attr('id');
        id = id.split("editBtn");
        id = id[0];

        location.replace("create.html?id=" + id + "?mode=update");
    }

    function delFunction(){
        var fid = $(this).attr("id");
        var id = $(this).attr('id');
        id = id.split("deleteBtn");
        id = id[0];

        $(this).hide();
        $('#' + id + "deleteBtnDivTwo").show();

        setTimeout(function(){
            $('#' + id + "deleteBtnDivTwo").hide();
            $('#' + fid).show();
        }, 3000);

    }

    function delTwo(){
        var id = $(this).attr('id');
        id = id.split("deleteBtnTwo");
        id = id[0];

        // Get firebase ref 
        var ref = firebase.database().ref('Boards/' + id);
        ref.remove();

        $('#' + id + 'boardDiv').empty();
    }
})();