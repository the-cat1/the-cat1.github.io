/**
 * util.js
 * 一些常用的方法。
 */

/**
 * 加载一个CSS文件。
 * @param {string} filepath 加载的CSS文件的位置
 */
function loadStyleSheet(filepath) {
    let csslink = document.createElement("link");
    csslink.rel = "stylesheet";
    csslink.href = filepath;
    document.head.appendChild(csslink);
}

function jumpto(path) {
    document.location.href = path;
}

/**
 * 创建一个有ID的元素。
 * @param {string} tagName 元素名称
 * @param {string} id 元素ID
 * @returns 新的元素
 */
function createElementById(tagName, id) {
    var element = document.createElement(tagName);
    element.id = id;
    return element;
}

/**
 * 创建一个有class属性的元素。
 * @param {string} tagName 元素名称
 * @param {string} eclass 元素的class
 * @returns 新的元素
 */
function createElementByClass(tagName, eclass) {
    var element = document.createElement(tagName);
    element.className = eclass;
    return element;
}
