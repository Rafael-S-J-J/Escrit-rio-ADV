class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.3s ease forwards  ${index / 7 + 0.4}s`);
        });
    }

    closeMenu() {
        this.navList.classList.remove(this.activeClass);
        this.mobileMenu.classList.remove(this.activeClass);
        this.animateLinks();
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
         this.navLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                if (this.navList.classList.contains(this.activeClass)) {
                    e.preventDefault(); // Evita navegação imediata
                    this.closeMenu();

                    // Navega após o menu fechar (300ms = tempo da animação)
                    setTimeout(() => {
                        const target = e.target.closest("a").getAttribute("href");
                        if (target.startsWith("#")) {
                            document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
                        } else {
                            window.location.href = target;
                        }
                    }, 300);
                }
            });
        });
       
}

init() {
    if (this.mobileMenu) {
        this.addClickEvent();
    }
    return this;
}

}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();