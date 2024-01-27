const t = document.getElementById("mainText");
function movePage() {
    const move = "./pages/roleSelect/roleSelect.html";
    window.location.href = move;
}
t.addEventListener("click", movePage);
