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
    var id = href.split("?id=");
    id = id[1];
    id = id.split("?mode=");

    var mode = id[1];
    id = id[0];


    function init(){
        firebase.initializeApp(config);
        // Get firebase ref 
        var ref = firebase.database().ref("Boards/" + id);
        ref.on("child_added", function(snapshot){
            var data = snapshot.val();
            $('#board').text(data.Board);
            $('#descript').text(data.Description);
        });

        ref.once('child_added', function(snapshot){
            var data = snapshot.val();

            // Catagory One
            $('#cata1').text(data.CatagoryOne.Catagory);

            $('#c1q1').text(data.CatagoryOne.SetOne.Question);
            $('#c1a1').text(data.CatagoryOne.SetOne.Answer);

            $('#c1q2').text(data.CatagoryOne.SetTwo.Question);
            $('#c1a2').text(data.CatagoryOne.SetTwo.Answer);

            $('#c1q3').text(data.CatagoryOne.SetThree.Question);
            $('#c1a3').text(data.CatagoryOne.SetThree.Answer);

            $('#c1q4').text(data.CatagoryOne.SetFour.Question);
            $('#c1a4').text(data.CatagoryOne.SetFour.Answer);

            // Catagory Two
            $('#cata2').text(data.CatagoryTwo.Catagory);

            $('#c2q1').text(data.CatagoryTwo.SetOne.Question);
            $('#c2a1').text(data.CatagoryTwo.SetOne.Answer);

            $('#c2q2').text(data.CatagoryTwo.SetTwo.Question);
            $('#c2a2').text(data.CatagoryTwo.SetTwo.Answer);

            $('#c2q3').text(data.CatagoryTwo.SetThree.Question);
            $('#c2a3').text(data.CatagoryTwo.SetThree.Answer);

            $('#c2q4').text(data.CatagoryTwo.SetFour.Question);
            $('#c2a4').text(data.CatagoryTwo.SetFour.Answer)

            // Catagory Three
            $('#cata3').text(data.CatagoryThree.Catagory);

            $('#c3q1').text(data.CatagoryThree.SetOne.Question);
            $('#c3a1').text(data.CatagoryThree.SetOne.Answer);

            $('#c3q2').text(data.CatagoryThree.SetTwo.Question);
            $('#c3a2').text(data.CatagoryThree.SetTwo.Answer);

            $('#c3q3').text(data.CatagoryThree.SetThree.Question);
            $('#c3a3').text(data.CatagoryThree.SetThree.Answer);

            $('#c3q4').text(data.CatagoryThree.SetFour.Question);
            $('#c3a4').text(data.CatagoryThree.SetFour.Answer)

            // Catagory Four
            $('#cata4').text(data.CatagoryFour.Catagory);

            $('#c4q1').text(data.CatagoryFour.SetOne.Question);
            $('#c4a1').text(data.CatagoryFour.SetOne.Answer);

            $('#c4q2').text(data.CatagoryFour.SetTwo.Question);
            $('#c4a2').text(data.CatagoryFour.SetTwo.Answer);

            $('#c4q3').text(data.CatagoryFour.SetThree.Question);
            $('#c4a3').text(data.CatagoryFour.SetThree.Answer);

            $('#c4q4').text(data.CatagoryFour.SetFour.Question);
            $('#c4a4').text(data.CatagoryFour.SetFour.Answer)

            $('.size').css("font-size", "18px");
        });

        $('#submit').on('click', function(){
            if(mode === "update"){
                updateData();
            }else{
                getData();
            }
        });
    }

    function getData(){
        // Catagory 1

        // Name
        var name = $('#name').val();
        // Description
        var description = $('#description').val();


        // Catagory One
        var cata1 = $('#cataOne').val();

        // c1q1
        var c1q1 = $('#cOneqOne').val();
        // c1a1
        var c1a1 = $('#cOneaOne').val();

        // c1q2
        var c1q2 = $('#cOneqTwo').val();
        // c1a2
        var c1a2 = $('#cOneaTwo').val();

        // c1q3
        var c1q3 = $('#cOneqThree').val();
        // c1a3
        var c1a3 = $('#cOneaThree').val();

        // c1q4
        var c1q4 = $('#cOneqFour').val();
        // c1a4
        var c1a4 = $('#cOneaFour').val();

        
        // Catagory Two
        var cata2 = $('#cataTwo').val();

        // c2q1
        var c2q1 = $('#cTwoqOne').val();
        // c2a1
        var c2a1 = $('#cTwoaOne').val();

        // c2q2
        var c2q2 = $('#cTwoqTwo').val();
        // c2a2
        var c2a2 = $('#cTwoaTwo').val();

        // c2q3
        var c2q3 = $('#cTwoqThree').val();
        // c2a3
        var c2a3 = $('#cTwoaThree').val();

        // c2q4
        var c2q4 = $('#cTwoqFour').val();
        // c2a4
        var c2a4 = $('#cTwoaFour').val();


        // Catagory Three
        var cata3 = $('#cataThree').val();

        // c3q1
        var c3q1 = $('#cThreeqOne').val();
        // c3a1
        var c3a1 = $('#cThreeaOne').val();

        // c3q2
        var c3q2 = $('#cThreeqTwo').val();
        // c3a2
        var c3a2 = $('#cThreeaTwo').val();

        // c3q3
        var c3q3 = $('#cThreeqThree').val();
        // c3a3
        var c3a3 = $('#cThreeaThree').val();

        // c3q4
        var c3q4 = $('#cThreeqFour').val();
        // c3a4
        var c3a4 = $('#cThreeaFour').val();


        // Catagory Four
        var cata4 = $('#cataFour').val();

        // c4q1
        var c4q1 = $('#cFourqOne').val();
        // c4a1
        var c4a1 = $('#cFouraOne').val();

        // c4q2
        var c4q2 = $('#cFourqTwo').val();
        // c4a2
        var c4a2 = $('#cFouraTwo').val();

        // c4q3
        var c4q3 = $('#cFourqThree').val();
        // c4a3
        var c4a3 = $('#cFouraThree').val();

        // c4q4
        var c4q4 = $('#cFourqFour').val();
        // c4a4
        var c4a4 = $('#cFouraFour').val();

        // Get firebase database ref
        var ref = firebase.database().ref('Boards');

        ref.push({
            Info: {
                Board:name,
                Description:description, 
            },
            
            Catagories: {
                CatagoryOne: {
                    Catagory: cata1,
                    SetOne: {
                        Question: c1q1,
                        Answer:c1a1,
                    },

                    SetTwo: {
                        Question: c1q2,
                        Answer:c1a2,
                    },

                    SetThree: {
                        Question: c1q3,
                        Answer:c1a3,
                    },

                    SetFour: {
                        Question: c1q4,
                        Answer:c1a4,
                    },
                },

                CatagoryTwo: {
                    Catagory: cata2,
                    SetOne: {
                        Question: c2q1,
                        Answer:c2a1,
                    },

                    SetTwo: {
                        Question: c2q2,
                        Answer:c2a2,
                    },

                    SetThree: {
                        Question: c2q3,
                        Answer:c2a3,
                    },

                    SetFour: {
                        Question: c2q4,
                        Answer:c2a4,
                    },
                },

                CatagoryThree: {
                    Catagory: cata3,
                    SetOne: {
                        Question: c3q1,
                        Answer:c3a1,
                    },

                    SetTwo: {
                        Question: c3q2,
                        Answer:c3a2,
                    },

                    SetThree: {
                        Question: c3q3,
                        Answer:c3a3,
                    },

                    SetFour: {
                        Question: c3q4,
                        Answer:c3a4,
                    },
                },

                CatagoryFour: {
                    Catagory: cata4,
                    SetOne: {
                        Question: c4q1,
                        Answer:c4a1,
                    },

                    SetTwo: {
                        Question: c4q2,
                        Answer:c4a2,
                    },

                    SetThree: {
                        Question: c4q3,
                        Answer:c4a3,
                    },

                    SetFour: {
                        Question: c4q4,
                        Answer:c4a4,
                    },
                },
            }
        }).then(function(){
            location.replace('teacher.html');
        });
    }

    function updateData(){
        var ref = firebase.database().ref("Boards/" + id);
        ref.on('value', function(snapshot){
            var data = snapshot.val();

            // Name
            var name = $('#name').val();
            if(name === ""){
                name = data.Info.Board;
            }

            // Description
            var description = $('#description').val();
            if(description === ""){
                description = data.Info.Description;
            }


            // Catagory One
            var cata1 = $('#cataOne').val();
            if(cata1 === ""){
                cata1 = data.Catagories.CatagoryOne.Catagory;
            }

            // c1q1
            var c1q1 = $('#cOneqOne').val();
            if(c1q1 === ""){
                c1q1 = data.Catagories.CatagoryOne.SetOne.Question;
            }
            // c1a1
            var c1a1 = $('#cOneaOne').val();
            if(c1a1 === ""){
                c1a1 = data.Catagories.CatagoryOne.SetOne.Answer;
            }

            // c1q2
            var c1q2 = $('#cOneqTwo').val();
            if(c1q2 === ""){
                c1q2 = data.Catagories.CatagoryOne.SetTwo.Question;
            }

            // c1a2
            var c1a2 = $('#cOneaTwo').val();
            if(c1a2 === ""){
                c1a2 = data.Catagories.CatagoryOne.SetTwo.Answer;
            }

            // c1q3
            var c1q3 = $('#cOneqThree').val();
            if(c1q3 === ""){
                c1q3 = data.Catagories.CatagoryOne.SetThree.Question;
            }

            // c1a3
            var c1a3 = $('#cOneaThree').val();
            if(c1a3 === ""){
                c1a3 = data.Catagories.CatagoryOne.SetThree.Answer;
            }

            // c1q4
            var c1q4 = $('#cOneqFour').val();
            if(c1q4 === ""){
                c1q4 = data.Catagories.CatagoryOne.SetFour.Question;
            }

            // c1a4
            var c1a4 = $('#cOneaFour').val();
            if(c1a4 === ""){
                c1a4 = data.Catagories.CatagoryOne.SetFour.Answer;
            }

            
            // Catagory Two
            var cata2 = $('#cataTwo').val();
            if(cata2 === ""){
                cata2 = data.Catagories.CatagoryTwo.Catagory;
            }

            // c2q1
            var c2q1 = $('#cTwoqOne').val();
            if(c2q1 === ""){
                c2q1 = data.Catagories.CatagoryTwo.SetOne.Question;
            }

            // c2a1
            var c2a1 = $('#cTwoaOne').val();
            if(c2a1 === ""){
                c2a1 = data.Catagories.CatagoryTwo.SetOne.Answer;
            }

            // c2q2
            var c2q2 = $('#cTwoqTwo').val();
            if(c2q2 === ""){
                c2q2 = data.Catagories.CatagoryTwo.SetTwo.Question;
            }

            // c2a2
            var c2a2 = $('#cTwoaTwo').val();
            if(c2a2 === ""){
                c2a2 = data.Catagories.CatagoryTwo.SetTwo.Answer;
            }

            // c2q3
            var c2q3 = $('#cTwoqThree').val();
            if(c2q3 === ""){
                c2q3 = data.Catagories.CatagoryTwo.SetThree.Question;
            }

            // c2a3
            var c2a3 = $('#cTwoaThree').val();
            if(c2a3 === ""){
                c2a3 = data.Catagories.CatagoryTwo.SetThree.Answer;
            }

            // c2q4
            var c2q4 = $('#cTwoqFour').val();
            if(c2q4 === ""){
                c2q4 = data.Catagories.CatagoryTwo.SetFour.Question;
            }

            // c2a4
            var c2a4 = $('#cTwoaFour').val();
            if(c2a4 === ""){
                c2a4 = data.Catagories.CatagoryTwo.SetFour.Answer;
            }


            // Catagory Three
            var cata3 = $('#cataThree').val();
            if(cata3 === ""){
                cata3 = data.Catagories.CatagoryThree.Catagory;
            }

            // c3q1
            var c3q1 = $('#cThreeqOne').val();
            if(c3q1 === ""){
                c3q1 = data.Catagories.CatagoryThree.SetOne.Question;
            }

            // c3a1
            var c3a1 = $('#cThreeaOne').val();
            if(c3a1 === ""){
                c3a1 = data.Catagories.CatagoryThree.SetOne.Answer;
            }

            // c3q2
            var c3q2 = $('#cThreeqTwo').val();
            if(c3q2 === ""){
                c3q2 = data.Catagories.CatagoryThree.SetTwo.Question;
            }

            // c3a2
            var c3a2 = $('#cThreeaTwo').val();
            if(c3a2 === ""){
                c3a2 = data.Catagories.CatagoryThree.SetTwo.Answer;
            }

            // c3q3
            var c3q3 = $('#cThreeqThree').val();
            if(c3q3 === ""){
                c3q3 = data.Catagories.CatagoryThree.SetThree.Question;
            }

            // c3a3
            var c3a3 = $('#cThreeaThree').val();
            if(c3a3 === ""){
                c3a3 = data.Catagories.CatagoryThree.SetThree.Answer;
            }

            // c3q4
            var c3q4 = $('#cThreeqFour').val();
            if(c3q4 === ""){
                c3q4 = data.Catagories.CatagoryThree.SetFour.Question;
            }

            // c3a4
            var c3a4 = $('#cThreeaFour').val();
            if(c3a4 === ""){
                c3a4 = data.Catagories.CatagoryThree.SetFour.Answer;
            }


            // Catagory Four
            var cata4 = $('#cataFour').val();
            if(cata4 === ""){
                cata4 = data.Catagories.CatagoryFour.Catagory;
            }

            // c4q1
            var c4q1 = $('#cFourqOne').val();
            if(c4q1 === ""){
                c4q1 = data.Catagories.CatagoryFour.SetOne.Question;
            }
            // c4a1
            var c4a1 = $('#cFouraOne').val();
            if(c4a1 === ""){
                c4a1 = data.Catagories.CatagoryFour.SetOne.Answer;
            }

            // c4q2
            var c4q2 = $('#cFourqTwo').val();
            if(c4q2 === ""){
                c4q2 = data.Catagories.CatagoryFour.SetTwo.Question;
            }
            // c4a2
            var c4a2 = $('#cFouraTwo').val();
            if(c4a2 === ""){
                c4a2 = data.Catagories.CatagoryFour.SetTwo.Answer;
            }

            // c4q3
            var c4q3 = $('#cFourqThree').val();
            if(c4q3 === ""){
                c4q3 = data.Catagories.CatagoryFour.SetThree.Question;
            }

            // c4a3
            var c4a3 = $('#cFouraThree').val();
            if(c4a3 === ""){
                c4a3 = data.Catagories.CatagoryFour.SetThree.Answer;
            }

            // c4q4
            var c4q4 = $('#cFourqFour').val();
            if(c4q4 === ""){
                c4q4 = data.Catagories.CatagoryFour.SetFour.Question;
            }

            // c4a4
            var c4a4 = $('#cFouraFour').val();
            if(c4a4 === ""){
                c4a4 = data.Catagories.CatagoryFour.SetFour.Answer;
            }


            var updateData = {
                Info: {
                    Board:name,
                    Description:description, 
                },
                
                Catagories: {
                    CatagoryOne: {
                        Catagory: cata1,
                        SetOne: {
                            Question: c1q1,
                            Answer:c1a1,
                        },
    
                        SetTwo: {
                            Question: c1q2,
                            Answer:c1a2,
                        },
    
                        SetThree: {
                            Question: c1q3,
                            Answer:c1a3,
                        },
    
                        SetFour: {
                            Question: c1q4,
                            Answer:c1a4,
                        },
                    },
    
                    CatagoryTwo: {
                        Catagory: cata2,
                        SetOne: {
                            Question: c2q1,
                            Answer:c2a1,
                        },
    
                        SetTwo: {
                            Question: c2q2,
                            Answer:c2a2,
                        },
    
                        SetThree: {
                            Question: c2q3,
                            Answer:c2a3,
                        },
    
                        SetFour: {
                            Question: c2q4,
                            Answer:c2a4,
                        },
                    },
    
                    CatagoryThree: {
                        Catagory: cata3,
                        SetOne: {
                            Question: c3q1,
                            Answer:c3a1,
                        },
    
                        SetTwo: {
                            Question: c3q2,
                            Answer:c3a2,
                        },
    
                        SetThree: {
                            Question: c3q3,
                            Answer:c3a3,
                        },
    
                        SetFour: {
                            Question: c3q4,
                            Answer:c3a4,
                        },
                    },
    
                    CatagoryFour: {
                        Catagory: cata4,
                        SetOne: {
                            Question: c4q1,
                            Answer:c4a1,
                        },
    
                        SetTwo: {
                            Question: c4q2,
                            Answer:c4a2,
                        },
    
                        SetThree: {
                            Question: c4q3,
                            Answer:c4a3,
                        },
    
                        SetFour: {
                            Question: c4q4,
                            Answer:c4a4,
                        },
                    },
                }
            }

            $('input').val("");
            $('.message').text("");
            $('.message').text("Your data has been updated.");
            return ref.update(updateData);
        });
    }
})();