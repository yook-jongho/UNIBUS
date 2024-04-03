import { stepContainer } from "./stepContainer.js";
import { addEvent } from "../../core/eventRegister.js";

(() => {
    const app = document.getElementById("app");
    const text = {
        one: "버스 기사",
        two: "버스 탑승객",
    };
    app.insertAdjacentHTML("afterbegin", stepContainer(text));
    addEvent();
})();
