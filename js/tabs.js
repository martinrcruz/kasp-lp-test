let tabsButton = document.querySelectorAll(".tab-button")
let tabsContent = document.querySelectorAll(".tab-content")
let tabButtonBackground = document.querySelector(".tab-button-bg")

const accordionActive = ()=>{
    let accordionHeader = document.querySelectorAll(".tab-content.active .accordion-header")
    let accordionContents = document.querySelectorAll(".tab-content.active .accordion-content")
    let accordionTermsButton = document.querySelectorAll(".tab-content.active .accordion-icon")
    accordionHeader.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        button.classList.toggle("open")
        accordionTermsButton[index].classList.toggle("open")
        accordionContents[index].classList.toggle("open")
    })
    })
}
document.addEventListener("DOMContentLoaded",()=>{
    accordionActive()
})
tabsButton.forEach((tab,index)=>{
    tab.addEventListener("click",(e)=>{
        tabsButton.forEach((tab)=>{
            tab.classList.remove("active")
            accordionActive()
        })
        tab.classList.add("active")
        tabButtonBackground.style.width = e.target.offsetWidth + "px"
        tabButtonBackground.style.left = e.target.offsetLeft + "px"
        tabsContent.forEach(content=>content.classList.remove("active"))
        tabsContent[index].classList.add("active")
        accordionActive()
    })
})