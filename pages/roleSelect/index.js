import { stepContainer } from "./stepContainer.js";
import { footer } from "../../components/footer.js";

(() => {
    const app = document.getElementById("app");
    const text = {
        one: "버스 기사",
        two: "버스 탑승객",
    };
    app.insertAdjacentHTML("afterbegin", stepContainer(text));
    app.insertAdjacentHTML("afterend", footer("다음"));
})();
