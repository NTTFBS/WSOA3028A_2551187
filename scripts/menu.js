const root = "/WSOA3028A_2551187" // As explained in the lectures and through research, this defines what my root folder is, allowing for easy referencing. 
const menuItems = [
    { name: "Home", href: `${root}/index.html` },
    { name: "Blog", href: `${root}/blogs/index.html` },
    { name: "Portfolio", href: `${root}/portfolio/index.html` },
    { name: "Essays", href: `${root}/essays/index.html` },
    { name: "Design", href: `${root}/design/index.html` },
]; // This makes linking pages much easier, something my original folder structure for Website 1 was missing. I can definitely see how js can make this process much easier.

const menuButtons = [];

export function initialise(currentPage) {
    const nav = document.querySelector("nav");
    const ul = document.createElement("ul");
    for (let menuItem of menuItems) {
        const li = document.createElement("li");
        if (currentPage != menuItem.name) {
            const a = document.createElement("a");
            a.innerText = menuItem.name;
            a.setAttribute("href", menuItem.href);
            li.appendChild(a);
        } else {
            li.innerText = menuItem.name;
        }
        ul.appendChild(li);
        menuButtons.push(li);
    }
    nav.appendChild(ul);
}