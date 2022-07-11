let nav = document.querySelector("nav.navbar"), 
    menu = document.querySelector(".navbar .navbar__container>ul");

document.addEventListener("scroll", (e) => {
    let pageScroll = document.scrollingElement.scrollTop,  
        navPosition = nav.offsetTop;

    if (pageScroll > navPosition + 0.5) {
        nav.classList.add("navbar--show");
        nav.classList.remove("navbar--show-phone");
    } else {
        nav.classList.remove("navbar--show");
        if (document.body.classList.contains("landing-page")) {
            menu.classList.remove("show-list");
        }
    }
});


if (document.body.classList.contains("landing-page")) {

    let navlink = document.querySelectorAll(".navbar .navbar__container>ul>li>a");

    for (let n = 0; n < navlink.length; n++) {
        navlink[n].addEventListener("click", function (e) {
            let target = "#" + navlink[n].getAttribute("href");
            e.preventDefault();
            window.scrollTo({
                top: document.querySelector(target).offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }

    let sections = document.querySelectorAll('.section-container');
    window.onscroll = () => {
        let scrollPosition = document.documentElement.scrollTop + 75 || document.body.scrollTop + 75;

        for (let s = 0; s < sections.length; s++) {
            if (sections[s] && sections[s].offsetTop <= scrollPosition) {
                let id = sections[s].getAttribute("id");
                document.querySelector('.active').classList.remove('active');
                document.querySelector("a[href*=" + id + "]").classList.add('active');
            }
        }
    }

}

if (document.body.classList.contains("landing-page")) {

    let menuButton = document.querySelector(".phone-menu");

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("navbar--show-phone");
        menu.classList.toggle("show-list");
    });

}

let downArrow = document.querySelector(".down-arrow"),
    servicesSection =document.querySelector(".services");

if (document.body.classList.contains("landing-page")) {
    downArrow.addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({
            top: servicesSection.offsetTop - 70,
            behavior: 'smooth'
        });
    });
}

// layer page

let projectImage = document.querySelectorAll(".project-image"),
    projectImageLength = projectImage.length,
    layer = document.querySelector(".layer"),
    layerClose = document.querySelector(".layer .layer-container i"),
    layerImage = document.querySelector(".layer .layer-container img");


if (document.body.classList.contains("project")) {
    layerClose.addEventListener("click", function () {
        layer.classList.remove("layer--show");
    });

    for (let i = 0; i < projectImageLength; i++) {
        projectImage[i].addEventListener("click", function () {
            let imageSrc = projectImage[i].getAttribute("src");
            layerImage.setAttribute("src", imageSrc);
            layer.classList.add("layer--show");
        })
    }
}

