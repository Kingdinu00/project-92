 var player1 = "";
 var player2 = "";

function add_user() {
 player1 = document.getElementById("player1_input_name").value;
 player2 = document.getElementById("player2_input_name").value;

 console.log(player1);

 localStorage.setItem("player1_name" , player1);
 localStorage.setItem("player2_name" , player2);

 window.location = "gamepage.html";
}

player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

function send() {

number1 = document.getElementById("number1_input").value;
number2 = document.getElementById("number2_input").value;

actual_answer = parseInt(number1) * parseInt(number2);

console.log(actual_answer);

question_number = "<h4>"+ number1 +" x "  + number2 + "</h4>";
input_box = "<br> Answer : <input type = 'number' id = 'user_answer' class = 'form-control'>";
button = "<br> <br> <button onclick = 'check();'>Check</button>";
row = question_number + input_box + button;
document.getElementById("output").innerHTML = row;

document.getElementById("number1_input").value = "";
document.getElementById("number2_input").value = "";
}

var question_turn = "player1";
var answer_turn = "player2";

player1_score = 0;
player2_score = 0;

document.getElementById("player_question_turn").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer_turn").innerHTML =  "Answer Turn : " + player2_name;

function check() {  
    user_answer = document.getElementById("user_answer").value;

    if (actual_answer == user_answer) {

        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if (question_turn == "player1") {
        question_turn == "player2"
        answer_turn == "player1"

        document.getElementById("player_question_turn").innerHTML = "Question Turn - " + player2_name ;
        document.getElementById("player_answer_turn").innerHTML = "Answer Turn - " + player1_name ;  
    } else {
        question_turn == "palyer1"
        answer_turn == "player2"

        document.getElementById("player_answer_turn").innerHTML = "Answer Turn : " + player2_name ;
        document.getElementById("player_question_turn").innerHTML = "Question Turn : " + player1_name ;
    }

    document.getElementById("output").innerHTML = "";
}



