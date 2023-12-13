let contenitoreContatti = document.querySelector("#contenitoreContatti");
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
            cardContatto.classList.add("background-accent", "p-5", "col-custom");
            cardContatto.innerHTML = `
            <h6>${contatto.nome}</h6>
            <p>${contatto.numero}</p>
            `;
            contenitoreContatti.appendChild(cardContatto);
        });
    },
}
rubrica.mostraContatti();