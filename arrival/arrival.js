function checkEnter(event) {
    if (event.keyCode === 13) {
        getData();
    }
}

function getData() {
    // 사용자 입력값 가져오기
    const inputElement = document.getElementById("arrivalStation");
    const inputValue = inputElement.value;

    // API 엔드포인트 및 검색어 설정
    const apiUrl = `http://192.168.150.171:8080/passenger/station?searchWord=${inputValue}`;

    fetch(apiUrl)
        .then((response) => {
            // 응답이 성공적으로 받아졌는지 확인
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // JSON 형태로 파싱하여 반환
            return response.json();
        })
        .then((data) => {
            // 받은 데이터를 처리하고 화면에 표시
            console.log(data);
            const listBox = document.getElementById("listBox");
            listBox.innerHTML = "";

            // 서버에서 받아온 데이터를 기반으로 동적으로 목록 생성
            data.data.forEach((stop, index) => {
                const listElement = createListElement(stop, index);
                listBox.appendChild(listElement);
            });
        })
        .catch((error) => {
            // 오류 발생 시 처리
            console.error("Fetch error:", error);

            const listBoxElement = document.getElementById("listBox");
            document.createElement("span").innerHTML =
                "현재 이용 가능한 버스가 없습니다.";
        });
}

// 서버에서 받아온 데이터를 기반으로 동적으로 목록을 생성하는 함수
function createListElement(data, index) {
    const listElement = document.createElement("div");
    listElement.classList.add("list");

    const numberBox = document.createElement("div");
    numberBox.classList.add("numberBox");
    numberBox.textContent = index + 1;
    listElement.appendChild(numberBox);

    const spanElement = document.createElement("span");
    spanElement.textContent = data.stationName;
    listElement.appendChild(spanElement);

    const busIdElement = document.createElement("div");
    busIdElement.classList.add("busId");
    busIdElement.textContent = data.stationNum;
    listElement.appendChild(busIdElement);

    listElement.addEventListener("click", function () {
        // 클릭한 정류소의 stationId 가져오기
        const clickedStationId = data.stationNum;
        const clickedStationName = data.stationName;

        // 클릭한 정류소의 stationId를 쿠키에 저장하고 30분 후에 만료되도록 설정
        const expirationTime = new Date(Date.now() + 30 * 60 * 1000);
        document.cookie = `arrivalStationId=${clickedStationId}; expires=${expirationTime.toUTCString()}; path=/;`;
        document.cookie = `arrivalStationName=${clickedStationName}; expires=${expirationTime.toUTCString()}; path=/;`;

        const move = "../buslist/buslist.html";
        window.location.href = move;
    });

    return listElement;
}

document.getElementById("prev").addEventListener("click", function () {
    const move = "../depart/depart.html";
    window.location.href = move;
});
