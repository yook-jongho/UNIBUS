document.addEventListener("DOMContentLoaded", function () {
    // URL에서 쿼리 파라미터 추출
    const urlParams = new URLSearchParams(window.location.search);

    // 쿼리 파라미터에서 값 가져오기 (기본값은 빈 문자열)
    const busUniqueId = urlParams.get("busId") || "고유번호 12345";
    const busNumber = urlParams.get("busNumber") || "143번";
    const busStart = urlParams.get("depart") || "정릉";
    const busEnd = urlParams.get("end") || "개포동";

    // HTML 엘리먼트를 가져와서 설정한 값으로 업데이트
    const busNumberElement = document.querySelector(".bus_id");
    const busIdElement = document.querySelector(".bus_name");
    const busDepartElement = document.querySelector(".depart");
    const busEndElement = document.querySelector(".end");

    busNumberElement.textContent = busUniqueId;
    busIdElement.textContent = busNumber;
    busDepartElement.textContent = busStart;
    busEndElement.textContent = busEnd;
});
