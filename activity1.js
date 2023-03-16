var Score = 0
function update(){
    Score = Score+1
    document.getElementById("Score").innerHTML=Score
}
function save(){
    localStorage.setItem("score", Score)
}
function next(){
    window.location="activity_2.html"
}