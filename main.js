`use strict` ; // active le moteur modern
//amorçage du documents en déclarant les fonctionnalités
const button = document.body.querySelector(`#btn`);
const input = document.body.querySelector(`#text`);
const ul = document.querySelector(`ul`);


// créer un li
function createElementLi() {
    li = document.createElement(`li`);
}
function firstLetterCapitalized() {
  return (
    input.value.charAt(0).toUpperCase() + input.value.substr(1).toLowerCase()
  );
}

// ajoute le li créé et Capitaliz
function addInputValueInLi() {
  li.append(document.createTextNode(firstLetterCapitalized()));

}
// ajoute un li avant la fin de ul
function insertNewLi() {
    ul.insertAdjacentElement('beforeend', li);
}
// vide l'input et empech le empty click
function clearInput() {
    input.value =``;
}
function inputLength() {
	return input.value.length;
}
// action clique souris
function  addListAfterClick() {
	if (inputLength() > 0) {
	createElementLi() ;
	addInputValueInLi() ;
	ul.insertAdjacentElement(`beforeend`, li);
	clearInput()
	deleteButtonInsert();
	deleteButton();
	}
}
// action touche entrée
function addListAfterKeypress(key) {
	if (key.keyCode === 13) {
		addListAfterClick();
	}
}
// action de suppresion de tâche
function deleteButtonInsert() {
  let addDeleteButton = document.createElement("button");
  let deleteButtonIcon = document.createTextNode("\u00D7");
  addDeleteButton.className = "close";
  addDeleteButton.append(deleteButtonIcon);
  li.append(addDeleteButton);
}
	
function deleteButton() {
  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.remove();
    };
  }
}

button.addEventListener(`click`, addListAfterClick); //action d'écoute - utlisé pour fonction test
input.addEventListener(`keypress`, addListAfterKeypress); // action d'écoute - utilisé pour fonction test
