const loteRep = nodecg.Replicant('lote');
const vendedorRep = nodecg.Replicant('vendedor');
const quantRep = nodecg.Replicant('quant');
const tipoRep = nodecg.Replicant('tipo');
const racaRep = nodecg.Replicant('raca');
const pesototRep = nodecg.Replicant('pesotot');
const pesomedRep = nodecg.Replicant('pesomed');
const valorunRep = nodecg.Replicant('valorun');
const valortotRep = nodecg.Replicant('valortot');
const prazoRep = nodecg.Replicant('prazo');
const lancamentoRep = nodecg.Replicant('lancamento');
const valorkgRep = nodecg.Replicant('valorkg');

const fileData = nodecg.Replicant('filedata');

const loteEl = document.getElementById('lote');
const vendedorEl = document.getElementById('vendedor');
const quantEl = document.getElementById('quant');
const tipoEl = document.getElementById('tipo');
const racaEl = document.getElementById('raca');
const pesototEl = document.getElementById('pesotot');
const pesomedEl = document.getElementById('pesomed');
const valorunEl = document.getElementById('valorun');
const valortotEl = document.getElementById('valortot');
const prazoEl = document.getElementById('prazo');
const lancamentoEl = document.getElementById('lancamento');
const lanceEl = document.getElementById('lance');
const valorkgEl = document.getElementById('valorkg');

var data = [];
fileData.on('change', (newval) => {
	window.data = newval;
})

function encontraBoi(code){
	return data.filter(
		function(data){
			return data.Lote == code
		}
	);
}


loteRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Lote') ? loteEl.innerHTML = "Lote: " + found[0].Lote : loteEl.innerHTML = "Lote: ";
})
vendedorRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Vendedor') ? vendedorEl.innerHTML = "Vendedor: " + found[0].Vendedor : vendedorEl.innerHTML = "Vendedor: ";
})
quantRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Quant') ? quantEl.innerHTML = "Quant: " + found[0].Quant : quantEl.innerHTML = "Quant: ";
})
tipoRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Tipo') ? tipoEl.innerHTML = "Tipo: "+ found[0].Tipo : tipoEl.innerHTML = "Tipo: ";
})
racaRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Raca') ? racaEl.innerHTML = "Raça: " + found[0].Raca : racaEl.innerHTML = "Raça: ";
})
pesototRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Kg_Total') ? pesototEl.innerHTML = "Peso: " + found[0].Kg_Total : pesototEl.innerHTML = "Peso: ";
})
pesomedRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Peso_medio') ? pesomedEl.innerHTML = "Peso Médio: " + found[0].Peso_medio : pesomedEl.innerHTML = "Peso Médio: ";
})
valorunRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Valor_por_cabeça') ? valorunEl.innerHTML = "Valor por cabeça: " + found[0].Valor_por_cabeça : valorunEl.innerHTML = "Valor por cabeça: ";
})
valortotRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Valor_Total') ? valortotEl.innerHTML = "Valor Total: " + found[0].Valor_Total : valortotEl.innerHTML = "Valor Total: ";
})
prazoRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Prazo') ? prazoEl.innerHTML = "Prazo: " + found[0].Prazo : prazoEl.innerHTML = "Prazo: ";
})
lancamentoRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Lancamento') ? lanceEl.innerHTML = found[0].Lancamento : lancamentoEl.innerHTML = "Lançamento: ";
})

nodecg.listenFor('valor', (newval) => {
	lanceEl.innerHTML = newval;
	var found = encontraBoi(loteRep.value);
	if (found[0].hasOwnProperty('Kg_Total')) {
		valorkgEl.innerHTML ="Valor por peso:" +(newval/(found[0].Kg_Total)).toFixed(2).replace(".",",");	;
	} else if (found[0].hasOwnProperty('Quant')) {
		valorunEl.innerHTML ="Valor por cabeça:" + newval/found[0].Quant + " p/ cabeça";		
	}
	
})

nodecg.listenFor('prazo', (newval) =>{
	prazoEl.innerHTML = "Prazo: " + newval;
})

nodecg.listenFor('load', (newval) => {
	loteRep.value = newval;
	vendedorRep.value = newval;
	quantRep.value = newval;
	tipoRep.value = newval;
	racaRep.value = newval;
	pesototRep.value = newval;
	pesomedRep.value = newval;
	valorunRep.value = newval;
	valortotRep.value = newval;
	prazoRep.value = newval;
	lancamentoRep.value = newval;
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Kg_Total')? valorkgEl.innerHTML = "Valor por peso: " + (found[0].Lancamento / (found[0].Kg_Total)).toFixed(2).replace(".", ",") : valorkgEl.innerHTML = "Valor por peso: "
	if (found[0].hasOwnProperty('Quant')) {
		valorunEl.innerHTML = "Valor por cabeça: " + (found[0].Lancamento / (found[0].Quant)).toFixed(2).replace(".",",") + " p/ cabeça";
	}

})

nodecg.listenFor('novolote', (newval) => {
	loteEl.innerHTML = "Lote: " + newval.lote;
	quantEl.innerHTML = "Quant: " + newval.quant;
	tipoEl.innerHTML = "Tipo: " + newval.tipo;
	racaEl.innerHTML = "Raca: " + newval.raca;
	vendedorEl.innerHTML = "Vend: " + newval.vend;
	pesototEl.innerHTML = "Peso: " + newval.peso;
	lanceEl.innerHTML = newval.valor;
})
