const root = "/WSOA3028A_2551187"; // as explained in the lectures and through research, this defines what my root folder is, allowing for easy referencing. 

const menuItems = [
    { name: "Home", href: `${root}/index.html`, id: "home" },
    { name: "Blog", href: `${root}/blogs/index.html`, id: "blog" },
    { name: "Portfolio", href: `${root}/portfolio/index.html`, id: "portfolio" },
    { name: "Essays", href: `${root}/essays/index.html`, id: "essays" },
    { name: "Design", href: `${root}/design/index.html`, id: "design" },
];// This makes linking pages much easier, something my original folder structure for Website 1 was missing. I can definitely see how js can make this process much easier.


export function addFooter() {
    const footer = document.createElement("footer");
    footer.innerText = "Copyright 2551187 2024.";
    document.body.appendChild(footer);
}

export function initialise(currentPage) {
    const nav = document.querySelector("nav");
    const ul = document.createElement("ul");
    ul.id = "main-menu"; 
//attempting to use array instead of for loop
    menuItems.forEach(menuItem => {
        const li = document.createElement("li");
        li.id = menuItem.id; 
        if (currentPage !== menuItem.name) {
            const a = document.createElement("a");
            a.innerText = menuItem.name;
            a.href = menuItem.href;
            li.appendChild(a);
        } else {
            li.innerText = menuItem.name;
            li.classList.add('active'); 
        }
        ul.appendChild(li);
    });

    nav.appendChild(ul);

   
    nav.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            console.log(`You clicked on ${event.target.innerText}`);
        }
    });

    


    
}

/* test hamburger menu */

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});




const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    nav.classList.remove('open');
});


closeBtn.addEventListener('click', () => {
    nav.classList.remove('open');
    overlay.style.display = 'none';
});

