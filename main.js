function adduser(){
    Username_1=document.getElementById("Username_1").value
    Username_2=document.getElementById("Username_2").value
    localStorage.setItem("Username_1", Username_1);
    localStorage.setItem("Username_2", Username_2);
    window.location="game_page.html"
}