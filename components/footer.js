import { button } from "./button.js";

export const footer = (text) => {
    return `
    <footer>
        ${button(text)}
        <img class="logo" src="../../img/logo.png" />
    </footer>
    `;
};
