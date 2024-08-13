let cardOfShorts  = document.getElementById("shorts")
let shortsContainer = document.getElementById("shorts-container")
let shortsStatus = false
let shortsHeight = 0
let chevron = document.getElementById("chevron")




window.addEventListener("load",()=>{

    
    console.log(shortsHeight,"shorts height")
    console.log("working",shortsContainer)

    shortsContainer.style.height = cardOfShorts.offsetHeight+"px"
    console.log("working2")
})


function onOff(item){

    shortsStatus = !shortsStatus

    if(shortsStatus){
        shortsContainer.style.height = "auto"
        shortsContainer.style.overflow = "visible"
        console.log(item)
        chevron.classList.replace("fa-chevron-down", "fa-chevron-up")

    }
    else{
        shortsContainer.style.overflow = "hidden"
        shortsContainer.style.height = cardOfShorts.offsetHeight+"px"
        chevron.classList.replace("fa-chevron-up", "fa-chevron-down")
    }

}