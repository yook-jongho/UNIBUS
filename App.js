const t = document.getElementById("mainText");
function movePage() {
    const move = "select/select.html";
    // 페이지 이동
    // console.log("asdf ");
    window.location.href = move;
}
t.addEventListener("click", movePage);
