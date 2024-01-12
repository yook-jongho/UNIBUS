function stomp() {
    const socket = new WebSocket("ws://192.168.151.144:8080/ws"); // Replace with your WebSocket endpoint

    const stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
        console.log("Connected: " + frame);

        stompClient.subscribe("/sub/10701207600", function (message) {
            updatePassengerNum(message);
            const data = JSON.parse(message.body);
        });
    });

    function updatePassengerNum(msg) {
        console.log(msg.body);
        return msg.body;
    }
}

const connect = stomp();

document.getElementById("box").addEventListener("click", function () {
    window.location.href = "../alarm_ride/alarm.html";
});
