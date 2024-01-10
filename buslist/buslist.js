// 가정: 서버에서 받아온 데이터
const busStopsData = [
    {
        name: 143,
        num: "4562",
        arrivalTime: "곧 도착",
        pos: "1번째 전",
        type: "간선",
        status: "혼잡",
    },
    {
        name: 3432,
        num: "3428",
        arrivalTime: "20분 전",
        pos: "1번째 전",
        type: "지선",
        status: "여유",
    },
    {
        name: 234,
        num: "4569",
        arrivalTime: "30분 전",
        pos: "1번째 전",
        type: "순환",
        status: "혼잡",
    },
    // ... 더 많은 정류소 데이터
];

// HTML에 동적으로 표시하기
// HTML에 동적으로 표시하기
const busStopsListContainer = document.getElementById("busStopsList");

busStopsData.forEach((bus, index) => {
    const busElement = document.createElement("div");
    busElement.className = "busStopItem";

    const fastestBusInfo =
        index === 0
            ? `<div class="fastest"><span>가장 빠른 버스</span></div>`
            : "";

    busElement.innerHTML = `${fastestBusInfo}
        <div class="info">
            <span class="bus_type">${bus.type}버스</span> <span style="float:right; color: #4F5C76;">${bus.arrivalTime} / ${bus.pos}</span> 
        </div>
        <div class="info">
            <span class="bus_name">${bus.name}번</span> <span style="float:right; color: #6E82AA;">${bus.status}</span><br/> <span style="color: #98AACC">차량번호 ${bus.num}</span> 
        </div>
        <div class="info">
            <button class="reserveButton">저상버스 예약하기 (버튼)</button> 
        </div>`;

    busStopsListContainer.appendChild(busElement);

    // 각 버튼에 대한 클릭 이벤트 처리
    const reserveButton = busElement.querySelector(".reserveButton");
    reserveButton.addEventListener("click", () => {
        openModal(bus);
    });
});

// 모달 관련 코드
const busListContainer = document.getElementById("busStopsList");
const subHeaderContent = document.querySelector(".sub_header").innerHTML;
const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close");

function openModal(bus) {
    modal.style.display = "block";
    // 모달 내용을 동적으로 설정하고 버스 정보를 사용할 수 있습니다.
    modalContent.innerHTML = `
    <div class="modal_info"> 
        <span class="bus_type" style="width: 25%; font-weight: bold;">${bus.type}버스</span>
        <span class="bus_name" style="margin-top: 10px;">${bus.name}번</span>
    </div>
    <div class="sub_header" style="margin-bottom:30px">${subHeaderContent}</div>
    <div class="modal_bot">
        <span style = "font-size: 20px; margin-bottom: 15px; font-weight: bold;">해당 버스를 예약 하시겠습니까?</span>
        <button id = "submit"> 예약확정 (버튼) </button>
        <button id = "cancel" style="background: #CCC;"> 취소 (버튼) </button>
    </div>
    `;

    document.getElementById("submit").addEventListener("click", function () {
        // 소켓 통신 코드 들어가야함
        alert("예약완료 되었습니당");
        modal.style.display = "none";
    });

    document.getElementById("cancel").addEventListener("click", function () {
        modal.style.display = "none";
    });
}

// 모달을 닫는 이벤트를 추가합니다.
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// 사용자가 모달 외부를 클릭했을 때 모달을 닫습니다.
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
