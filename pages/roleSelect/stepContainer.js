export const stepContainer = ({ one, two }) => {
    return `
    <div class="stepContainer">
        <img class="busImg" src="../../img/bus.png"/>
        <div class="content">
            <img class="step" src="../../img/stepOne.png"/>
            <span> 이용자 유형을 <br/> 선택해 주세요 <span>
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
