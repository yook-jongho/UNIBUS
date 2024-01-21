import { stepContainer } from "./stepContainer.js";

const app = document.getElementById("app");
const text = {
    one: "버스 기사",
    two: "버스 탑승객",
};
app.insertAdjacentHTML("afterbegin", stepContainer(text));
// app.insertAdjacentHTML("afterend", button);
// app.insertAdjacentHTML("afterend", logo);
