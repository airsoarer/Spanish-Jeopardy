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

    var href = window.location.href;
    var uid = href.split("?board=");
    uid = uid[1].split("?type");
    uid = uid[0];
    var type = href.split("?type=");
    type = type[1];

    var data;
    var teamNumber = 0;

    var oneScore = 0;
    var twoScore = 0;
    var threeScore = 0;

    function init(){
        firebase.initializeApp(config);
        // Geet firebase ref 
        var ref = firebase.database().ref('Boards/' + uid);
        ref.on("child_added", function(snapshot){
            var dataTwo = snapshot.val();
            $('.title').text(dataTwo.Board);
        })

        ref.once("child_added", function(snapshot){
            data = snapshot.val();
            $('#cataNameOne').text(data.CatagoryOne.Catagory);
            $('#cataNameTwo').text(data.CatagoryTwo.Catagory);
            $('#cataNameThree').text(data.CatagoryThree.Catagory);
            $('#cataNameFour').text(data.CatagoryFour.Catagory);
            console.log(data);
        });

        $(document.body).on('click', '#plus', addTeam);
        $(document.body).on('click', '.plus', plus);
        $(document.body).on('click', '.minus', minus);
        $(document.body).on('click', 'button', openModal);
        $(document.body).on('click', '#close', closeModal);
        $(document.body).on('click', '#check', check);
        $(document.body).on('click', '#goBack', goBack);

    }

    function goBack(){
        if(type === "teacher"){
            location.replace("teacher.html");
        }

        if(type === "student"){
            location.replace("student.html");
        }
    }
    
    function openModal(){
       var id = $(this).attr("id");
       $(this).text("");
       $(this).prop("disabled", true);
       $(this).css('background-color', '#563444');

        $('#check').text("Check");
        $('#check').prop("disabled", false);
        $('#check').css('background-color', '#4F8699');

       console.log(id);
       $("#modal").show();

       $('#check').show();
       $('.answerDiv').hide();

       //QUESTIONS
       // Catagory One
       if(id === "c1q1"){
        $('.question').text(data.CatagoryOne.SetOne.Question);
       }

       if(id === "c1q2"){
        $('.question').text(data.CatagoryOne.SetTwo.Question);
       }

       if(id === "c1q3"){
        $('.question').text(data.CatagoryOne.SetThree.Question);
       }

       if(id === "c1q4"){
        $('.question').text(data.CatagoryOne.SetFour.Question);
       }

       // Catagory Two
       if(id === "c2q1"){
        $('.question').text(data.CatagoryTwo.SetOne.Question);
       }

       if(id === "c2q2"){
        $('.question').text(data.CatagoryTwo.SetTwo.Question);
       }

       if(id === "c2q3"){
        $('.question').text(data.CatagoryTwo.SetThree.Question);
       }

       if(id === "c2q4"){
        $('.question').text(data.CatagoryTwo.SetFour.Question);
       }

       // Catagory Three
       if(id === "c3q1"){
        $('.question').text(data.CatagoryThree.SetOne.Question);
       }

       if(id === "c3q2"){
        $('.question').text(data.CatagoryThree.SetTwo.Question);
       }

       if(id === "c3q3"){
        $('.question').text(data.CatagoryThree.SetThree.Question);
       }

       if(id === "c3q4"){
        $('.question').text(data.CatagoryThree.SetFour.Question);
       }

       // Catagory Four
       if(id === "c4q1"){
        $('.question').text(data.CatagoryFour.SetOne.Question);
       }

       if(id === "c4q2"){
        $('.question').text(data.CatagoryFour.SetTwo.Question);
       }

       if(id === "c4q3"){
        $('.question').text(data.CatagoryFour.SetThree.Question);
       }

       if(id === "c4q4"){
        $('.question').text(data.CatagoryFour.SetFour.Question);
       }

       // ANSWERS
        // Catagory One
        if(id === "c1q1"){
            $('.answer').text(data.CatagoryOne.SetOne.Answer);
        }

        if(id === "c1q2"){
            $('.answer').text(data.CatagoryOne.SetTwo.Answer);
        }

        if(id === "c1q3"){
            $('.answer').text(data.CatagoryOne.SetThree.Answer);
        }

        if(id === "c1q4"){
            $('.answer').text(data.CatagoryOne.SetFour.Answer);
        }

        // Catagory Two
        if(id === "c2q1"){
            $('.answer').text(data.CatagoryTwo.SetOne.Answer);
        }

        if(id === "c2q2"){
            $('.answer').text(data.CatagoryTwo.SetTwo.Answer);
        }

        if(id === "c2q3"){
            $('.answer').text(data.CatagoryTwo.SetThree.Answer);
        }

        if(id === "c2q4"){
            $('.answer').text(data.CatagoryTwo.SetFour.Answer);
        }

        // Catagory Three
        if(id === "c3q1"){
            $('.answer').text(data.CatagoryThree.SetOne.Answer);
        }

        if(id === "c3q2"){
            $('.answer').text(data.CatagoryThree.SetTwo.Answer);
        }

        if(id === "c3q3"){
            $('.answer').text(data.CatagoryThree.SetThree.Answer);
        }

        if(id === "c3q4"){
            $('.answer').text(data.CatagoryThree.SetFour.Answer);
        }

        // Catagory Four
        if(id === "c4q1"){
            $('.answer').text(data.CatagoryFour.SetOne.Answer);
        }

        if(id === "c4q2"){
            $('.answer').text(data.CatagoryFour.SetTwo.Answer);
        }

        if(id === "c4q3"){
            $('.answer').text(data.CatagoryFour.SetThree.Answer);
        }

        if(id === "c4q4"){
            $('.answer').text(data.CatagoryFour.SetFour.Answer);
        }
    }

    function closeModal(){
        var modal = document.getElementById("modal");
        modal.style.display = "none";
    }

    function check(){
        $('#check').hide();
        $('.answerDiv').css('display', 'block');
    }

    function addTeam(){
        teamNumber++;
        if(teamNumber === 1){
            $('.teamOneDiv').css('display', 'block');
            $('.teams').css('height', '150px');
            $('.plusButton').removeClass('offset-s11').addClass('offset-s8');
        }else if(teamNumber === 2){
            $('.teamTwoDiv').css('display', 'block');
            $('.plusButton').removeClass('offset-s8').addClass('offset-s5');
        }else if(teamNumber === 3){
            $('.teamThreeDiv').css('display', 'block');
            $('.plusButton').remove();
            $('.teamOneDiv').removeClass('col s3').addClass('col s4');
            $('.teamTwoDiv').removeClass('col s3').addClass('col s4');
            $('.teamThreeDiv').removeClass('col s3').addClass('col s4');
        }

        init();
    }

    function plus(){
        var id = $(this).attr('id');
        if(id === "one"){
            oneScore += 100;
            $('#scoreTeamOne').text(String(oneScore));
        }else if(id === "two"){
            twoScore += 100;
            $('#scoreTeamTwo').text(String(twoScore));
        }else if(id === "three"){
            threeScore += 100;
            $('#scoreTeamThree').text(String(threeScore));
        }
        
        init();
    }

    function minus(){
        var id = $(this).attr('id');
        if(id === "one"){
            oneScore -= 100;
            $('#scoreTeamOne').text(String(oneScore));
        }else if(id === "two"){
            twoScore -= 100;
            $('#scoreTeamTwo').text(String(twoScore));
        }else if(id === "three"){
            threeScore -= 100;
            $('#scoreTeamThree').text(String(threeScore));
        }
        
        init();
    }
})();