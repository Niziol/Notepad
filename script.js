const addBtn = document.querySelector('.add');
const deleteAllBtn = document.querySelector('.delete-all');
const deleteNoteBtns = document.getElementsByClassName('.delete-note');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');

const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const notePanelCategory = document.querySelector('#category');
const notePanelText = document.querySelector('#text');
const notePanelError = document.querySelector('.error');
let selectedValue;

let cardID = 0;

const openPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
	notePanel.style.display = 'none';
	notePanelError.style.visibility = 'hidden';
	notePanelText.value = '';
	notePanelCategory.selectedIndex = 0;
};

const addNote = () => {
	if (notePanelText.value === '' || notePanelCategory.selectedIndex === 0) {
		notePanelError.style.visibility = 'visible';
		return;
	}

	createNote();
	closePanel();
};

const createNote = () => {
	const newNote = document.createElement('div');
	newNote.classList.add('note');
	newNote.setAttribute('id', cardID);

	newNote.innerHTML = `
		<div class="note-header">
			<h3 class="note-title">${selectedValue}</h3>
			<button class="delete-note" onclick ="deleteNote(${cardID})">
				<i class="fas fa-times icon"></i>
			</button>
		</div>
		<div class="note-body">
			${notePanelText.value}
		</div>
	`;

	checkColor(newNote);
	noteArea.append(newNote);
	cardID++;
};

const selectValue = () => {
	selectedValue =
		notePanelCategory.options[notePanelCategory.selectedIndex].text;
};

const checkColor = (note) => {
	switch (selectedValue) {
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(70, 255, 0)';
			break;
		case 'Praca':
			note.style.backgroundColor = 'rgb(255, 240, 0)';
			break;
		case 'Inne':
			note.style.backgroundColor = 'rgb(0, 170, 255)';
			break;
	}
};

const deleteNote = (id) => {
	const noteToDelete = document.getElementById(id);
	noteArea.removeChild(noteToDelete);
};

const deleteAllNotes = () => {
	noteArea.textContent = '';
};

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
saveBtn.addEventListener('click', addNote);
deleteAllBtn.addEventListener('click', deleteAllNotes);


