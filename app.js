import { direBonjour } from "./lib.js";

direBonjour("Christian");
console.log(uuid.v4());

const form = document.querySelector("#formulaire");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (
    e.target.elements.email.value === "" ||
    e.target.elements.prenom.value === "" ||
    e.target.elements.nom.value === ""
  ) {
    window.alert("tous les champs sont obligatoires");
    return;
  }
  console.log(e);
  var tbody = document.querySelector("#tbody");
  const tr = document.createElement("tr");
  tbody.appendChild(tr);

  var tdId = document.createElement("td");
  tr.appendChild(tdId);
  var id = uuid.v4();
  tdId.innerText = id;
  tr.id = id;

  var tdNom = document.createElement("td");
  tr.appendChild(tdNom);
  tdNom.innerText = e.target.elements.nom.value;

  var tdPrenom = document.createElement("td");
  tr.appendChild(tdPrenom);
  tdPrenom.innerText = e.target.elements.prenom.value;

  var tdEmail = document.createElement("td");
  tr.appendChild(tdEmail);
  tdEmail.innerText = e.target.elements.email.value;

  e.target.elements.nom.value = "";
  e.target.elements.prenom.value = "";
  e.target.elements.email.value = "";

  var btnSupprimer = document.createElement("button");
  btnSupprimer.innerText = "Supprimer";
  tr.appendChild(btnSupprimer);
  btnSupprimer.addEventListener("click", function () {
    var ligneASupprimer = this.parentElement;
    ligneASupprimer.remove();
  });

  var btnModifier = document.createElement("button");
  btnModifier.innerText = "Modifier";
  tr.appendChild(btnModifier);
  btnModifier.addEventListener("click", function () {
    var ligneAModifier = this.parentElement;
    console.log(ligneAModifier.tdNom);
    console.log(e.target.elements.nom.value);
    ligneAModifier.children[1].innerText = e.target.elements.nom.value;
    ligneAModifier.children[2].innerText = e.target.elements.prenom.value;
    ligneAModifier.children[3].innerText = e.target.elements.email.value;
  });
});
