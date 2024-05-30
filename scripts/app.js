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
toggleThemeBtn.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})
toggleThemeBtn2.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})
chevron.addEventListener("click",(e) =>{
    console.log(e.target.parentElement);
    submenu.classList.toggle("submenu_open")
})
bars.addEventListener("click" , () => {
    nav.classList.add("mobile_nav_open")
    cover.classList.add("cover_open")
})

closeBtn.addEventListener("click" , () => {
    nav.classList.remove("mobile_nav_open")
    cover.classList.remove("cover_open")
})

cover.addEventListener("click" , ()=>{
    nav.classList.remove("mobile_nav_open")
    shopList.classList.remove("shop_nav_open")
    cover.classList.remove("cover_open")
})
shopIcon.addEventListener("click" , ()=>{
    shopList.classList.add("shop_nav_open")
    cover.classList.add("cover_open")
})
shopClose.addEventListener("click",()=>{
    shopList.classList.remove("shop_nav_open")
    cover.classList.remove("cover_open")
})