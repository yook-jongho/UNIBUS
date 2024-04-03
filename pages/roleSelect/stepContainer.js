import { footer } from "../../components/footer.js";
import { eventRegister } from "../../core/eventRegister.js";
import { btnClickHandle, button } from "../../components/button.js";

export const stepContainer = ({ one, two }) => {
    return `
    <div class="stepContainer">
        <img alt=" class="busImg" src="../../img/bus.png"/>
        <div class="content">
            <img class="step" src="../../img/stepOne.png"/>
            <p><span style="color: #13A6E8"> 이용자 유형</span>을 <br/> 선택해 주세요 <p>
        </div>
    </div>
    <div class="selectBox">
        <label>
            <input type="radio" name="select" value="driver" required />
            <span id="driver">${one}</span>
        </label>
        <label>
            <input type="radio" name="select" value="passenger" required/>
            <span id="passenger">${two}</span>
        </label>
    </div>
    ${footer("다음", movePage)}
    `;
};

const movePage = () => {
    const result = radioClickHandle();
    if (result !== "") window.location.href = result;
};

const radioClickHandle = () => {
    const selected = document.querySelector(
        "input[type=radio][name=select]:checked"
    );

    if (selected) {
        if (selected.value == "driver") {
            return "../../driver/driver.html";
        } else if (selected.value == "passenger") {
            return "../../client/client.html";
        } else {
            alert("둘 중 하나 선택해주세요");
            return "";
        }
    }
};

const radioEvent = () => {
    const driver = document.querySelector(
        'input[type="radio"][name="select"][value="driver"]'
    );
    const passenger = document.querySelector(
        'input[type="radio"][name="select"][value="passenger"]'
    );

    driver.addEventListener("click", radioClickHandle);
    passenger.addEventListener("click", radioClickHandle);
};

const bindEvent = () => {
    btnClickHandle(test);
};

eventRegister(bindEvent);
eventRegister(radioEvent);
