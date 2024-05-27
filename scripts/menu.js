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

   

    document.querySelector('.hamburger-menu').addEventListener('click', () => {
        const navLinks = document.querySelector('nav ul');
        navLinks.style.display = navLinks.style.display === 'none' ? 'block' : 'none';
    });



    nav.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            console.log(`You clicked on ${event.target.innerText}`);
        }
    });

    
}



document.getElementById('hamburger-menu').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('show');
});



