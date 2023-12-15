// Catturiamo gli elementi che ci serviranno
let contenitoreContatti = document.querySelector("#contenitoreContatti");
let mostraContattiBtn = document.querySelector("#btn_Mostra");
let inputNome = document.querySelector("#inputNome");
let inputNumero = document.querySelector("#inputNumero");

const rubrica = {
  contatti: [
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
    // Cancella i contatti esistenti nel contenitore
    contenitoreContatti.innerHTML = "";

    // Ciclo il mio array di contatti
    this.contatti.forEach((contatto) => {
      // Creo il div
      let cardContatto = document.createElement("div");

      // Aggiungo le classi
      cardContatto.classList.add("background-secondary", "p-5", "col-custom");

      // Aggiungo il contenuto del div andando a richiamare le proprietà nome e numero di ogni contatto nell'array contatti
      cardContatto.innerHTML = `
        <h6>${contatto.nome}</h6>
        <p>${contatto.numero}</p>
        <i class="fa-solid fa-trash icona"></i>
      `;

      // Appendo il div come figlio diretto del contenitore
      contenitoreContatti.appendChild(cardContatto);

      // Aggiungi l'evento di cancellazione
      let icona = cardContatto.querySelector(".icona");
      icona.addEventListener("click", () => {
        this.cancellaContatto(contatto.nome);
      });
    });
  },

  cancellaContatto: function (nomeDaCancellare) {
    let index = this.contatti.findIndex((contatto) => contatto.nome === nomeDaCancellare);
    if (index !== -1) {
      this.contatti.splice(index, 1);
      this.mostraContatti();
    }
  },
};

rubrica.mostraContatti();

// La variabile check serve per gestire i casi in cui non possiamo utilizzare il toggle (con d-none) e in cui vogliamo controllare se le nostre card erano state generate oppure no. Partiamo da false perchè all'inizio la funzione non è mai partita.
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
});

document.querySelector("#btn_CreaContatto").addEventListener("click", () => {
  const nuovoNome = inputNome.value;
  const nuovoNumero = inputNumero.value;

  // Con il ciclo if metto tra () un confronto che mi rende vero il fatto che entrambi gli input siano inseriti prima di processare il ciclo.
  if (nuovoNome && nuovoNumero) {
    const nuovoContatto = { nome: nuovoNome, numero: nuovoNumero };
    rubrica.contatti.push(nuovoContatto);
    contenitoreContatti.innerHTML = "";
    rubrica.mostraContatti();
    check = true;
    mostraContattiBtn.innerHTML = "Nascondi Contatti";
    inputNome.value = "";
    inputNumero.value = "";
  } else {
    alert("Inserisci un nome e un numero per il nuovo contatto.");
    check = false;
    mostraContattiBtn.innerHTML = "Mostra Contatti";
  }
});
