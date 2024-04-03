export const button = (text) => {
    return `
        <button id="next" type="button" >${text} 버튼 </button>
    `;
};

export const btnClickHandle = (event) => {
    const btnElement = document.getElementById("next");
    if (btnElement) {
        btnElement.addEventListener("click", event);
    }
};
