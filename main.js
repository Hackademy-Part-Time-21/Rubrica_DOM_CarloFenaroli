let contenitoreContatti = document.querySelector("#contenitoreContatti");
let mostraContattiBtn = document.querySelector("#mostraContattiBtn");
const rubrica = {
    'contatti' : [
        {nome : "Leonardo", numero : "34694030394"},
        {nome : "Giulio", numero : "344594033"},
        {nome : "Alessio", numero : "346958749003"},
        {nome : "Caterina", numero : "33455940303"},
    ],
    mostraContatti : function(){
        this.contatti.forEach((contatto) => {
            let cardContatto = document.createElement("div");
            cardContatto.classList.add("background-secondary", "p-5", "col-custom");
            cardContatto.innerHTML = `
            <h6>${contatto.nome}</h6>
            <p>${contatto.numero}</p>
            `;
            contenitoreContatti.appendChild(cardContatto);
        });
    },
}
rubrica.mostraContatti();
let check = false;
mostraContattiBtn.addEventListener("click", ()=> {
    if(!check){
        contenitoreContatti.innerHTML = "";
        rubrica.mostraContatti();
        check = true;
        mostraContattiBtn.innerHTML = "Nascondi Contatti";
    }else{
        contenitoreContatti.innerHTML = "";
        check = false;
        mostraContattiBtn.innerHTML = "Mostra Contatti";
    }
    
})