export const button = (text, url) => {
    return `
        <button id="next" type="button" data-url="${url}">${text} 버튼 </button>
    `;
};

const movePage = (url) => {
    if (url !== "") window.location.href = url;
};

const btnClickHandle = () => {
    const btnElement = document.getElementById("next");
    if (btnElement) {
        const url = btnElement.dataset.url;
        btnElement.addEventListener("click", () => movePage(url));
    }
};

document.addEventListener("DOMContentLoaded", btnClickHandle);
