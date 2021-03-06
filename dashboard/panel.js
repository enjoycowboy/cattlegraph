const loteInput = document.getElementById('lote_input');
const prazoInput = document.getElementById('prazo_input');
const valorInput = document.getElementById('preco_input');
const nparcelaInput = document.getElementById('n_parcelas');
const fileData = nodecg.Replicant('filedata');
const valorparcelaRep = nodecg.Replicant('valorparcela');


const nl_loteElm = document.getElementById('nl_lote');
const nl_quantElm = document.getElementById('nl_quant');
const nl_tipoElm = document.getElementById('nl_tipo');
const nl_racaElm = document.getElementById('nl_raca');
const nl_vendElm = document.getElementById('nl_vend');
const nl_pesoElm = document.getElementById('nl_peso');
const nl_valueElm = document.getElementById('nl_value');
const nl_prazoElm = document.getElementById('nl_prazo');
const nl_parcelasElm = document.getElementById('nl_parcelas')

function atualizaValor(){
	const data = valorInput.value;
	nodecg.sendMessage('valor', data);
}

function atualizaPrazo(){
	const data = {Prazo: prazoInput.value, n_parcelas: nparcelaInput.value};
	nodecg.sendMessage('prazo', data);
}

function buscaLote(){
	const data = loteInput.value;
	nodecg.sendMessage('load', data);
}

function loadFile() {
	var input, file, fr;
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

function novoLote(){
	const data = {
	lote:nl_loteElm.value,
	quant:nl_quantElm.value,
	tipo:nl_tipoElm.value,
	raca:nl_racaElm.value,
	vend:nl_vendElm.value,
	peso:nl_pesoElm.value,
	valor:nl_valueElm.value,
	prazo:nl_prazoElm.value,
	npar:nl_parcelasElm.value
	}
	nodecg.sendMessage('novolote', data);
}