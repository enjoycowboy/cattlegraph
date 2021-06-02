const loteInput = document.getElementById('lote_input');
const prazoInput = document.getElementById('prazo_input');
const valorInput = document.getElementById('preco_input');
const fileData = nodecg.Replicant('filedata');

function update(){
	const data = {Prazo:prazoInput.value, Valor:valorInput.value};
	nodecg.sendMessage('atualiza', data);
}

function buscaLote(){
	const data = loteInput.value;
	nodecg.sendMessage('load', data);
}

function loadFile() {
	var input, file, fr;
	var data = [];
	if (typeof window.FileReader !== 'function') {
		alert("The file API isn't supported on this browser yet.");
		return;
	}

	input = document.getElementById('fileinput');
	if (!input) {
		alert("Um, couldn't find the fileinput element.");
	}
	else if (!input.files) {
		alert("This browser doesn't seem to support the `files` property of file inputs.");
	}
	else if (!input.files[0]) {
		alert("Please select a file before clicking 'Load'");
	}
	else {
		file = input.files[0];
		fr = new FileReader();
		fr.onload = receivedText;
		fr.readAsText(file);
	}

	function receivedText(e) {
		let lines = e.target.result;
		var newArr = JSON.parse(lines);
		fileData.value = newArr.lista;
	}

	
}