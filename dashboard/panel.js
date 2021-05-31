const loteInput = document.getElementById('lote_input');
const prazoInput = document.getElementById('prazo_input');
const valorInput = document.getElementById('preco_input');

function update(){
	const data = {Prazo:prazoInput.value, Valor:valorInput.value};
	nodecg.sendMessage('atualiza', data);
}

function buscaLote(){
	const data = loteInput.value;
	nodecg.sendMessage('load', data);
}