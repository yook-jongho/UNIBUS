export default function getData(apiUrl) {
    // API 엔드포인트 설정
    // const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

    // fetch 함수를 사용하여 GET 요청 보내기
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
            displayData(data);
        })
        .catch((error) => {
            // 오류 발생 시 처리
            console.error("Fetch error:", error);
        });
}
