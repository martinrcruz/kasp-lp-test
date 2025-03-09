document.addEventListener("DOMContentLoaded",()=>{


let accordionHeader = document.querySelectorAll(".accordion-section-container .accordion-header")
let accordionContents = document.querySelectorAll(".accordion-section-container .accordion-content")
let accordionTermsButton = document.querySelectorAll(".accordion-section-container .accordion-icon")



    accordionHeader.forEach((button,index)=>{
        button.addEventListener("click",()=>{
            button.classList.toggle("open")
            accordionTermsButton[index].classList.toggle("open")
            accordionContents[index].classList.toggle("open")
        })
    })

})
