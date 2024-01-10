// 가정: 서버에서 받아온 데이터

const mockup = {
    stationName: "다음 역",
    physicalDisabilityNum: 2,
    visualDisabilityNum: 3,
    getOffNum: 1,
};

function pageLoad(busData) {
    console.log(typeof busData);

    const ridePhys = document.getElementById("body");
    ridePhys.innerHTML = `
    <span class="highlight">지체장애</span>
    <div class="status">
    <img
    src="../img/(아이콘 - 휠체어 ).png"
    style="width: 40%"
    />
    <span class="num">${busData.physicalDisabilityNum || 0}</span>
    </div>
    `;

    const rideVisual = document.getElementById("sight");
    rideVisual.innerHTML = `
        <span class="highlight">지체장애</span>
        <div class="status">
        <img
        src="../img/(아이콘 - 휠체어 ).png"
        style="width: 40%"
        />
        <span class="num">${busData.visualDisabilityNum || 0}</span>
        </div>
    `;

    const totalOff = document.getElementById("total");
    totalOff.innerHTML = `
        <span class="highlight">시각장애 / 지체장애</span>
        <div class="status">
        <span class="num">${busData.getOffNum || 0}</span>
        </div>
    `;

    const subHeaderContainer = document.getElementById("sub_header");
    subHeaderContainer.innerHTML = `
        <div class="depart">
            <span class = "name">다음 정류장은<span> <span class="name" style="color:#02A3EC"> ${busData.stationName}</span>
        </div>
    `;
}

function stomp() {
    const socket = new WebSocket("ws://192.168.150.171:8080/ws"); // Replace with your WebSocket endpoint

    const stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
        console.log("Connected: " + frame);

        stompClient.subscribe("/sub/107012076", function (message) {
            updatePassengerNum(message);
            const data = JSON.parse(message.body);
            pageLoad(data);
        });
    });

    function updatePassengerNum(msg) {
        console.log(msg.body);
        return msg.body;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("driveStop").addEventListener("click", function () {
        // 모달 열기
        const modal = document.getElementById("myModal");
        modal.style.display = "flex";

        // 확인 버튼 이벤트 처리
        document
            .getElementById("confirmClose")
            .addEventListener("click", function () {
                // 운행 종료 로직 추가
                alert("운행이 종료되었습니다."); // 실제로는 서버에 요청 등을 수행할 것입니다.

                // 모달 닫기
                modal.style.display = "none";
                window.location.href = "../alarm_end/alarm_end.html";
            });

        // 모달 닫기 버튼 이벤트 처리
        document
            .getElementById("closeModal")
            .addEventListener("click", function () {
                modal.style.display = "none";
            });
    });
    const connect = stomp();
});
