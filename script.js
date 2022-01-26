document.addEventListener("keypress", function(evt){
   creaSuono(evt.key);
   animaPulsante(evt.key)
});


for(i = 0; i<document.querySelectorAll(".batteria").length; i++){
      document.querySelectorAll(".batteria")[i].addEventListener("click", function(){
            let buttonInnerHTML = this.innerHTML;
            creaSuono(buttonInnerHTML);
            animaPulsante(buttonInnerHTML);
      });
};

function creaSuono(key){
    switch(key){
    case "w":
        let rullante =  new Audio("/suoni/rullante.mp3");
        rullante.play();
    case "a":
        let charleston =  new Audio("/suoni/charleston.mp3");
        charleston.play();
    case "s":
        let grancassa =  new Audio("/suoni/grancassa.mp3");
        grancassa.play();
    case "d":
        let tom1 =  new Audio("/suoni/tom-1.mp3");
        tom1.play();
    case "j":
        let tom2 =  new Audio("/suoni/tom-2.mp3");
        tom2.play();
    case "k":
        let tom3 =  new Audio("/suoni/tom-3.mp3");
        tom3.play();
    case "l":
        let crash =  new Audio("/suoni/crash.mp3");
        crash.play();
    break;
    default:
        console.log(key);
    };
};

function animaPulsante(tastoCorrente){
    let pulsanteAttivo = document.querySelector("." + tastoCorrente);
    pulsanteAttivo.classList.add("premuto");

    setTimeout(function(){
        pulsanteAttivo.classList.remove("premuto");
    }, 100)
}


