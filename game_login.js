player_1_name=localStorage.getItem("Username_1")
player_2_name=localStorage.getItem("Username_2")
player_1_score=0
player_2_score=0
document.getElementById("player_1_name").innerHTML=player_1_name
document.getElementById("player_2_name").innerHTML=player_2_name
document.getElementById("player_1_score").innerHTML=player_1_score
document.getElementById("player_2_score").innerHTML=player_2_score
document.getElementById("player_question").innerHTML="question turn = " + player_1_name
document.getElementById("player_answer").innerHTML="answer turn = " + player_2_name
var Word
function Submit(){
     Word = document.getElementById("input").value
    var Word2 = Word.toLowerCase()
    var Character1 = Word2.charAt(1)
    var Character2 = Word2.charAt(Math.floor(Word2.length/2))
    var Character3 = Word2.charAt(Word2.length-1)
    var RemoveCharacter1 = Word2.replace(Character1,"_")
    var RemoveCharacter2 = RemoveCharacter1.replace(Character2,"_")
    var RemoveCharacter3 = RemoveCharacter2.replace(Character3,"_")
    var QuestionWord = "<h4 id='Word_Display'>q."+RemoveCharacter3+"</h4>"
    var InputBox = "<br>answer=<input type='text' id='input_checkbox'>"
    var Button = "<br><br><button class='btn btn-primary' onclick='check()'>Check</button>"
    var Row = QuestionWord + InputBox + Button
    document.getElementById("output").innerHTML = Row
    document.getElementById("input").value = ""
}
var question_turn = "player_1"
var answer_turn = "player_2"
function check() {
    var Answer = document.getElementById("input_checkbox").value
    if (Answer==Word){
        if (answer_turn=="player_1"){
            player_1_score=player_1_score+1
            document.getElementById("player_1_score").innerHTML=player_1_score
        }
        else {
            player_2_score=player_2_score+1
            document.getElementById("player_2_score").innerHTML=player_2_score
        }
    }
    if (question_turn=="player_1"){
        question_turn="player_2"
        document.getElementById("player_question").innerHTML="question turn = " + player_2_name
    }
    else {
        question_turn="player_1"
        document.getElementById("player_question").innerHTML="question turn = " + player_1_name
    }
    if (answer_turn=="player_1"){
        answer_turn="player_2"
        document.getElementById("player_answer").innerHTML="answer turn = " + player_2_name
    }
    else {
        answer_turn="player_1"
        document.getElementById("player_answer").innerHTML="answer turn = " + player_1_name
    }

}