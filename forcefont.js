// ==UserScript==
// @name         Force default font
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Force "Be Vietnam Pro" as the default font on all websites, excluding icons and buttons
// @author       Your Name
// @match        *://*/*
// @run-at       document-start
// ==/UserScript==

(function () {
    "use strict";

    // Load the "Be Vietnam Pro" font from Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Define the CSS to apply the font, excluding icons and buttons
    const css = `
        *:not([class*="ico"]):not([class*="icon"]):not([class*="icons"]):not([class*="fa"]):not([class*="control"]):not([class*="button"]):not([role*="button"]):not([id*="button"]):not([class*="btn"]):not(button):not(i):not(a):not(span) {
            font-family: 'Be Vietnam Pro', sans-serif !important;
        }
    `;

    // Function to wait for the document body to be available
    function _async() {
        return new Promise((resolve) => {
            requestAnimationFrame(resolve);
        });
    }

    async function _wait() {
        while (!document.body) {
            await _async();
        }
        return true;
    }

    // Function to inject the CSS into the document
    function inject() {
        _wait().then(() => {
            const style = document.createElement("style");
            style.id = "usrjs-A-NAME";
            style.innerHTML = css;
            document.getElementsByTagName("head")[0].appendChild(style);
        });
    }

    // Inject the CSS
    inject();
})();
