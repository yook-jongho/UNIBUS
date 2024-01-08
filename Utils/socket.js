import { WS_URL } from "./constants.js";

document.addEventListener("DOMContentLoaded", function () {
    const socket = new WebSocket(WS_URL); // Replace with your WebSocket endpoint

    const stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
        console.log("Connected: " + frame);
        stompClient.subscribe("/topic/messages", function (message) {
            displayMessage(JSON.parse(message.body));
        });
    });

    function sendMessage() {
        const messageInput = document.getElementById("message-input");
        const message = messageInput.value.trim();

        if (message !== "") {
            stompClient.send(
                "/app/sendMessage",
                {},
                JSON.stringify({ content: message })
            );
            messageInput.value = "";
        }
    }

    function displayMessage(message) {
        const chatMessages = document.getElementById("chat-messages");
        const li = document.createElement("li");
        li.appendChild(
            document.createTextNode(`${message.sender}: ${message.content}`)
        );
        chatMessages.appendChild(li);
    }
});
