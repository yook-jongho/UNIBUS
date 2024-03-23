import { button } from "./button.js";

export const footer = (text, url) => {
    return `
    <footer>
        ${button(text, url)}
        <img class="logo" src="../../img/logo.png" />
    </footer>
    `;
};
