let $ = document
const toggleThemeBtn = $.querySelector("#toggle-theme");
const toggleThemeBtn2 = $.querySelector("#toggle-theme2");
const chevron = $.querySelector(".chevronBtn")
const submenu = $.querySelector(".submenu")
const bars = $.querySelector(".bars")
const nav = $.querySelector(".mobile_nav")
const closeBtn = $.querySelector(".close_btn")
const cover = $.querySelector(".cover")
const shopIcon = $.querySelector(".shop_icon")
const shopList = $.querySelector(".shop_nav")
const shopClose = $.querySelector(".shop_close")
toggleThemeBtn.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
})
toggleThemeBtn2.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
})
chevron.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
    submenu.classList.toggle("submenu_open")
})
bars.addEventListener("click", () => {
    nav.classList.toggle("mobile_nav_open")
    cover.classList.toggle("cover_open")
})

closeBtn.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.classList.includes("mobile_nav_open")
    nav.classList.toggle("mobile_nav_open")
    cover.classList.toggle("cover_open")
})

cover.addEventListener("click", () => {
    nav.classList.remove("mobile_nav_open")
    shopList.classList.remove("shop_nav_open")
    cover.classList.remove("cover_open")
})
shopIcon.addEventListener("click", () => {
    shopList.classList.toggle("shop_nav_open")
    cover.classList.toggle("cover_open")
})
shopClose.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.parentElement.classList.includes("mobile_nav_open")
    shopList.classList.toggle("shop_nav_open")
    cover.classList.remove("cover_open")
})


const sr = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 1000,
    delay: 600
})

sr.reveal(".home_allTexts", { origin: "top" })
sr.reveal(".sec_R_title", { origin: "right",duration:500 })
sr.reveal(".left_sec_link", { origin: "left",delay:700})
sr.reveal(".product_Box")
sr.reveal(".rightCategory", { origin: "right"})
sr.reveal(".leftCategory", { origin: "left",delay:800})
sr.reveal(".catProduct", { origin: "top" })
sr.reveal(".swiper-slide", { origin: "bottom",delay:700 })
sr.reveal(".leftPagsElm", { origin: "left",delay:700})
sr.reveal(".clubAnimat")
sr.reveal(".blogAnimate")
sr.reveal(".contactAnimat", { origin: "top",delay:800})
sr.reveal(".serviceAnimate", { origin: "right",delay:800})
sr.reveal(".footerAnimate")