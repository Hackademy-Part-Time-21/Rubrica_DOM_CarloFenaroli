let contenitoreContatti = document.querySelector("#contenitoreContatti");
let mostraContattiBtn = document.querySelector("#btn_Mostra"); // Modificato il selettore per adattarlo all'ID del pulsante
let inputNome = document.querySelector("#inputNome");
let inputNumero = document.querySelector("#inputNumero");
const rubrica = {
    'contatti': [
        { nome: "Leonardo", numero: "34694030394" },
        { nome: "Giulio", numero: "344594033" },
        { nome: "Alessio", numero: "346958749003" },
        { nome: "Caterina", numero: "334584737933" },
        { nome: "Carlo", numero: "348474934" },
        { nome: "Flogert", numero: "348374739" },
        { nome: "Antonio", numero: "348483092302" },
        { nome: "Sayo", numero: "3353625253256" },
    ],
    mostraContatti: function () {
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
mostraContattiBtn.addEventListener("click", () => {
    if (!check) {
        contenitoreContatti.innerHTML = "";
        rubrica.mostraContatti();
        check = true;
        mostraContattiBtn.innerHTML = "Nascondi Contatti";
    } else {
        contenitoreContatti.innerHTML = "";
        check = false;
        mostraContattiBtn.innerHTML = "Mostra Contatti";
    }
})
document.querySelector("#btn_CreaContatto").addEventListener("click", () => {
    const nuovoNome = inputNome.value;
    const nuovoNumero = inputNumero.value;

    if (nuovoNome && nuovoNumero) {
        const nuovoContatto = { nome: nuovoNome, numero: nuovoNumero };

        rubrica.contatti.push(nuovoContatto);

        contenitoreContatti.innerHTML = "";
        rubrica.mostraContatti();

        inputNome.value = "";
        inputNumero.value = "";
    } else {
        alert("Inserisci un nome e un numero per il nuovo contatto.");
    }
});

