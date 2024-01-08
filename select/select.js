// // 단계 정보를 배열로 관리
// var steps = [
//     {
//         image: "../img/말풍선 1.png",
//         text: "이용자 유형",
//         select: ["버스 기사", "버스 탑승객"],
//         value: ["driver", "passenger"],
//     },
//     {
//         image: "../img/말풍선 2.png",
//         text: "교통약자 유형",
//         select: ["지체 장애인", "시각 장애인"],
//         value: ["body", "sight"],
//     },
// ];

// var currentStep = 0; // 현재 단계를 나타내는 변수

// function updateStep() {
//     // 현재 단계에 해당하는 정보를 가져와서 업데이트
//     var currentStepInfo = steps[currentStep];
//     document.getElementById("number").src = currentStepInfo.image;
//     document.getElementById("highlight").innerText = currentStepInfo.text;

//     document.getElementById(currentStep.value[0]).innerText =
//         currentStepInfo.select[0];
//     document.getElementById(currentStep.value[1]).innerText =
//         currentStepInfo.select[1];
//     var prevButton = document.getElementById("prev");
//     prevButton.style.display = currentStep === 0 ? "none" : "block";
// }

// document.getElementById("next").addEventListener("click", function () {
//     var radioButtons = document.getElementsByName("select");
//     var isChecked = null;
//     var currentStepInfo = steps[currentStep];

//     // 라디오 버튼 중 하나가 선택되었는지 확인
//     for (var i = 0; i < radioButtons.length; i++) {
//         if (radioButtons[i].checked) {
//             isChecked = radioButtons[i].value;
//         }
//         radioButtons[i].value = radioButtons[i].checked = false;
//     }

//     // 라디오 버튼이 선택되지 않았을 경우 경고 표시
//     if (isChecked === null) {
//         alert("라디오 버튼을 선택해주세요.");
//     } else if (isChecked === "passenger") {
//         if (currentStep < steps.length - 1) {
//             currentStep++;
//             updateStep();
//         }
//     } else if (isChecked === "driver") {
//         const move = "../driver/driver.html";
//         window.location.href = move;
//         // console.log("기사 페이지롱");
//     }
// });

// document.getElementById("prev").addEventListener("click", function () {
//     if (currentStep > 0) {
//         currentStep--;
//         updateStep();
//     }
// });

// // 초기 화면 업데이트
// updateStep();

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
    } else if (isChecked === "passenger") {
        const move = "../client/client.html";
        window.location.href = move;
    } else if (isChecked === "driver") {
        const move = "../driver/driver.html";
        window.location.href = move;
        // console.log("기사 페이지롱");
    }
});
