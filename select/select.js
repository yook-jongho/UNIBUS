document.getElementById("next").addEventListener("click", function () {
    // span 태그 내용 변경
    document.getElementById("highlight").innerText = "교통약자 유형";
    document.getElementById("number").src = "../img/말풍선 2.png";

    // 라디오 버튼 레이블 변경
    document.getElementById("driver").innerText = "지체 장애인";
    document.getElementById("passenger").innerText = "시각 장애인";
});
