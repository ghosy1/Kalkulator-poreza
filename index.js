var buttons = document.querySelectorAll(".button")
var bambutton = document.querySelector(".bambutton")
var eurbutton = document.querySelector(".eurbutton")
var dropdown = document.querySelector(".dropdown")
var main = document.getElementById("main")
var secondary = document.getElementById("secondary")
var input = document.getElementById("input")
var box2 = document.getElementById("box2")
var iznos1 = document.querySelector(".iznos1")
var iznos2 = document.querySelector(".iznos2")
var iznos3 = document.querySelector(".iznos3")
var iznos4 = document.querySelector(".iznos4")
var iznos5 = document.querySelector(".iznos5")
var iznos6 = document.querySelector(".iznos6")
var iznos7 = document.querySelector(".iznos7")

function formula(){
    box2.style.visibility="visible"
    var konverzija = input.value
    if (main.textContent=="EUR") {konverzija = Math.abs(input.value * 1.95583)}
    var osnovica = Math.abs(konverzija * 0.8)
    var zdravstvenoOsiguranik = Math.abs(osnovica * 0.04)
    var zdravstvenoKS = Math.abs(osnovica * 0.04 * 0.1020)
    var zdravstvenoFBIH = Math.abs(osnovica * 0.04 * 0.8980)
    var porez = Math.abs(osnovica * 0.96)
    var iznosPoreza = Math.abs(osnovica * 0.96 * 0.10)
    var razlikaPoreza = Math.abs(osnovica * 0.96 * 0.10)
    iznos1.textContent=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BAM' }).format(osnovica)
    iznos2.textContent=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BAM' }).format(zdravstvenoOsiguranik)
    iznos3.textContent=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BAM' }).format(zdravstvenoKS)
    iznos4.textContent=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BAM' }).format(zdravstvenoFBIH)
    iznos5.textContent=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BAM' }).format(porez)
    iznos6.textContent=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BAM' }).format(iznosPoreza)
    iznos7.textContent=new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'BAM' }).format(razlikaPoreza)
    
    
    console.log(konverzija)
  

}

buttons.forEach(button =>{

    button.addEventListener("click",()=> {
       if (button.textContent=="BAM") 
         {eurbutton.textContent="BAM"
          bambutton.textContent="EUR"}
       else {eurbutton.textContent="EUR"
            bambutton.textContent="BAM"}
            formula()
         secondary.style.display="none"   
         
    } )
    button.addEventListener("mouseover",()=> {
         secondary.style.display="inline"
 
     } )

    button.addEventListener("mouseout",()=> {
        secondary.style.display="none"

    } )

    
    })


input.addEventListener("input", function() {formula()});

