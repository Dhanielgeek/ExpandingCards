const panels = document.querySelectorAll(".panel")

panels.forEach((panel)=>{
panel.addEventListener("click", ()=>{
    removeActivecleasses()
    panel.classList.add("active")
})
})

function removeActivecleasses(){
    panels.forEach((panel)=>{
        panel.classList.remove("active")
    })
  
}