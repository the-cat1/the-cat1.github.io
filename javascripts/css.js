/**
 * css.js
 * 
 * 辅助CSS。
 */

loadStyleSheet("css/util.css");

const docele = document.documentElement;
docele.style.setProperty("--mouse-x", "0px");
docele.style.setProperty("--mouse-y", "0px");

docele.addEventListener("mousemove", e => {
    docele.style.setProperty("--mouse-x", e.clientX + "px");
    docele.style.setProperty("--mouse-y", e.clientY + "px");
});
