// ==UserScript==
// @name         Force default font
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Force "Be Vietnam Pro" as the default font on all websites
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

    // Define the CSS to apply the font
    const css = `
        *:not([class*="ico"], [class*="fa"], [class*="control"] *, [class*="button"], [role*="button"], [type*=button], button, [id*="button"], [class*="btn"], [class*="mjx"], [class*="vjs"],
        [class*="bb"], [class="ll"], i, [class="i"], [class*="symbol"],  img, svg) {
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
