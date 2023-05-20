/**
 * menu.js
 * 创建主菜单。
 */


/**
 * 创建主菜单。
 */
function initMenu() {
    loadStyleSheet("components/menu/menu.css");  // 加载menu.css

    var menu = document.getElementById("menu");

    // avater
    var avater_a = document.createElement("a");
    avater_a.href = "index.html";
    menu.append(avater_a);

    var avater = createElementById("img", "avater");
    avater.src = "resources/images/the-cat1.png";
    avater.onclick = "document.location.href='index.html';"
    avater_a.append(avater);

    // Github主页
    var github_home_button = createElementByClass("button", "menu-button");
    github_home_button.innerHTML = "Github主页";
    github_home_button.setAttribute("onclick", "jumpto('https://github.com/the-cat1')");
    menu.append(github_home_button);
}
