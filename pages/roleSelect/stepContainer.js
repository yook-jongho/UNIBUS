export const stepContainer = ({ one, two }) => {
    return `
    <div class="stepContainer">
        <img class="busImg" src="../../img/bus.png"/>
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
    `;
};
