document.getElementById("next").addEventListener("click", function () {
    var radioButtons = document.getElementsByName("select");
    var isChecked = null;

    // 라디오 버튼 중 하나가 선택되었는지 확인
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            isChecked = radioButtons[i].value;
            break;
        }
    }

    // 라디오 버튼이 선택되지 않았을 경우 경고 표시
    if (isChecked === null) {
        alert("라디오 버튼을 선택해주세요.");
    } else {
        var queryString = "?selectedValue=" + encodeURIComponent(isChecked);
        const move = "../depart/depart.html" + queryString;
        window.location.href = move;
    }
});

document.getElementById("prev").addEventListener("click", function () {
    const move = "../select/select.html";
    window.location.href = move;
});
