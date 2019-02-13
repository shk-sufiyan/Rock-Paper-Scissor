var startPage = document.getElementById("startMenu");
startPage.addEventListener("click",startGame);
function startGame(){
    startPage.style.display = "none";
    loadGame();
 }