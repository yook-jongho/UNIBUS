// 가정: 서버에서 받아온 데이터
const busType = ["간선", "지선"];
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

function getCookieValue(cookieName) {
    const cookies = document.cookie.split("; ");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === cookieName) {
            return cookie[1];
        }
    }

    return null; // 해당하는 쿠키가 없을 경우
}

const departId = getCookieValue("departStationId");
const departName = getCookieValue("departStationName");
const arrivalId = getCookieValue("arrivalStationId");
const arrivalName = getCookieValue("arrivalStationName");
const busId = getCookieValue("busId");

function getData() {
    fetch("http://192.168.151.144:8080/passenger/buslist", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            departureStationNum: `${departId}`,
            destinationStationNum: `${arrivalId}`,
        }),
    })
        .then((response) => {
            // 응답이 성공인지 확인
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // JSON 형태로 파싱하여 반환
            return response.json();
        })
        .then((data) => {
            console.log(data);
            // 데이터 처리
            busListUp(data);
            //     {
            //     "busId": "107028632",
            //     "busNum": "261",
            //     "busType": "1",
            //     "arrivalTime": "4분12초후[1번째 전]",
            //     "departureOrderInRoute": "44",
            //     "destinationOrderInRoute": "45"
            // }
        })
        .catch((error) => {
            // 오류 처리
            console.error("Fetch error:", error);
            const busStopsListContainer =
                document.getElementById("busStopsList");

            busStopsListContainer.innerHTML = `
                <span>"현재 이용 가능한 버스가 없습니다."</span>
            `;
        });
}

function postData(busId, depart, desti) {
    fetch("http://192.168.151.144:8080/passenger/reservation", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            passengerId: "1",
            busId: `${busId}`,
            disabilityType: "physical",
            departureStationNum: `${departId}`,
            destinationStationNum: `${arrivalId}`,
            departureStationOrd: `${depart}`,
            destinationStationOrd: `${desti}`,
        }),
    }).then(() => {
        alert("예약완료 되었습니당");
        modal.style.display = "none";
        window.location.href = "../wait/wait.html";
    });
}

function travel() {
    const subHeaderContainer = document.querySelector(".sub_header");
    subHeaderContainer.innerHTML = `
    <div>
        <span class="highlight">출발</span> ${departId} <br />
        <span class="name">${departName}</span>
    </div>
    <img src="../img/화살표 (하늘색).png" />
    <div>
        <span class="highlight">도착</span> ${arrivalId} <br />
        <span class="name">${arrivalName}</span>
    </div>
    `;
}

const load = travel();
const data = getData();

function busListUp(data) {
    const busStopsListContainer = document.getElementById("busStopsList");
    data.data.forEach((bus, index) => {
        console.log(bus);
        const busElement = document.createElement("div");
        busElement.className = "busStopItem";

        const fastestBusInfo =
            index === 0
                ? `<div class="fastest"><span>가장 빠른 버스</span></div>`
                : "";

        busElement.innerHTML = `${fastestBusInfo}
        <div class="info">
            <span class="bus_type">${
                busType[bus.busType]
            }버스</span> <span style="float:right; color: #4F5C76;">${
            bus.arrivalTime
        } 
        </div>
        <div class="info">
            <span class="bus_name">${
                bus.busNum
            }번</span> <span style="float:right; color: #6E82AA;"><br/>  
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
}

// 모달 관련 코드
const busListContainer = document.getElementById("busStopsList");
const subHeaderContent = document.querySelector(".sub_header").innerHTML;
const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close");

function openModal(bus) {
    console.log(bus);
    modal.style.display = "block";
    // 모달 내용을 동적으로 설정하고 버스 정보를 사용할 수 있습니다.
    modalContent.innerHTML = `
    <div class="modal_info"> 
        <span class="bus_type" style="width: 25%;">${
            busType[bus.busType]
        }버스</span>
        <span class="bus_name" style="margin-top: 10px;">${bus.busNum}번</span>
    </div>
    <div class="sub_header" style="margin-bottom:30px">${subHeaderContent}</div>
    <div class="modal_bot">
        <span style = "font-size: 20px; margin-bottom: 15px; ">해당 버스를 예약 하시겠습니까?</span>
        <button id = "submit"> 예약확정 (버튼) </button>
        <button id = "cancel" style="background: #CCC;"> 취소 (버튼) </button>
    </div>
    `;

    document.getElementById("submit").addEventListener("click", function () {
        //     {
        //     "busId": "107028632",
        //     "busNum": "261",
        //     "busType": "1",
        //     "arrivalTime": "4분12초후[1번째 전]",
        //     "departureOrderInRoute": "44",
        //     "destinationOrderInRoute": "45"
        // }
        // 소켓 통신 코드 들어가야함

        const clickedBusId = bus.busId;
        const clickedBusNum = bus.busNum;
        const clickedBusType = bus.busType;
        const clickedDeparture = bus.departureOrderInRoute;
        const clickeddestination = bus.destinationOrderInRoute;

        // 클릭한 정류소의 stationId를 쿠키에 저장하고 30분 후에 만료되도록 설정
        const expirationTime = new Date(Date.now() + 30 * 60 * 1000);
        document.cookie = `clickedBusId=${clickedBusId}; expires=${expirationTime.toUTCString()}; path=/;`;
        document.cookie = `clickedBusNum=${clickedBusNum}; expires=${expirationTime.toUTCString()}; path=/;`;
        document.cookie = `clickedBusType=${clickedBusType}; expires=${expirationTime.toUTCString()}; path=/;`;
        document.cookie = `clickedDeparture=${clickedDeparture}; expires=${expirationTime.toUTCString()}; path=/;`;
        document.cookie = `clickeddestination=${clickeddestination}; expires=${expirationTime.toUTCString()}; path=/;`;

        postData(clickedBusId, clickedDeparture, clickeddestination);
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
