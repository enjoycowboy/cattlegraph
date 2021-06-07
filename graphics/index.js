// ----------------- replicants -------------------

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
const valorparcelaRep = nodecg.Replicant('valorparcela');
const nparcelaRep = nodecg.Replicant('n_parcela');
const lanceRep = nodecg.Replicant('lance');
const novoloteRep = nodecg.Replicant('novolote');
// ----------------- file input -------------------

const fileData = nodecg.Replicant('filedata');

// ----------------- html elements ----------------

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
const valorparcelaEl = document.getElementById('valorparcela');

var data = [];
fileData.on('change', (newval) => {
	window.data = newval;
})
// -------------------- json search ----------------------------
function encontraBoi(code){
	return data.filter(
		function(data){
			return data.Lote == code
		}
	);
}

// ------------------ on change replicants --------------------
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
	found[0].hasOwnProperty('Tipo') ? tipoEl.innerHTML = "Tipo: " + found[0].Tipo : tipoEl.innerHTML = "Tipo: ";
})
racaRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Raca') ? racaEl.innerHTML = "Raça: " + found[0].Raca : racaEl.innerHTML = "Raça: ";
})
pesototRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Kg_Total') ? pesototEl.innerHTML = "Peso Total: " + found[0].Kg_Total : pesototEl.innerHTML = "Peso Total: ";
})
pesomedRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Peso_medio') ? pesomedEl.innerHTML = "Peso Médio: " + (found[0].Peso_medio).toFixed(2).replace(".",",") : pesomedEl.innerHTML = "Peso Médio: ";
})
valorunRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Valor_por_cabeça') ? valorunEl.innerHTML = "Valor por cabeça: " + found[0].Valor_por_cabeça : valorunEl.innerHTML = "Valor por cabeça: ";
})
valortotRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Valor_total') ? valortotEl.innerHTML = "Valor Total: " + found[0].Valor_total : valortotEl.innerHTML = "Valor Total: ";
})



valorparcelaRep.on('change', (newval) => { 
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Valor_total') ? valorparcelaEl.innerHTML = "Valor Por Parcela: " + found[0].Valor_total / found[0].n_parcelas : valorparcelaEl.innerHTML = "Valor Por Parcela: " + found[0].Valor_total;
})

nparcelaRep.on('change', (newval) => {
	var found = encontraBoi(newval.Lote);
	found[0].hasOwnProperty('n_parcelas') ? valorparcelaEl.innerHTML = "Valor Por Parcela: " + found[0].Valor_total / newval.Nparcela : valorparcelaEl.innerHTML = "Valor Por Parcela: " + found[0].Valor_total;
})

prazoRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Prazo') ? prazoEl.innerHTML = "Prazo: " + found[0].Prazo : prazoEl.innerHTML = "Prazo: ";
})
lancamentoRep.on('change', (newval) => {
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Lancamento') ? lanceEl.innerHTML = found[0].Lancamento : lancamentoEl.innerHTML = "Lançamento: ";
})
// ------------------------- end replicants ---------------------------

// ------------------------- input handling -------------------------
nodecg.listenFor('valor', (newval) => {
	lanceRep.value = newval;
	valortotEl.innerHTML = "Valor Total: "+ newval;


	// ---------- busca pelo lote no json --------
	var found = encontraBoi(loteRep.value);
	// ----------- e se n ta no json? (cai nos else)
	if (found[0].hasOwnProperty('Kg_Total')) {
		valorkgEl.innerHTML ="Valor por peso: " +(newval/(found[0].Kg_Total)).toFixed(2).replace(".",",");	;
	}
	if (found[0].hasOwnProperty('Quant')) {
		valorunEl.innerHTML ="Valor por cabeça: " + (newval/(found[0].Quant)).toFixed(2).replace(".",",") + " p/ cabeça";
	}
	if (found[0].hasOwnProperty('n_parcelas')){
		valorparcelaEl.innerHTML = "Valor por parcela: "+ (newval / (found[0].n_parcelas)).toFixed(2).replace(".",",");
	}


	
})

nodecg.listenFor('prazo', (newval) =>{
	prazoEl.innerHTML = "Prazo: " + newval.Prazo;
	valorparcelaEl.innerHTML = "Valor por parcela: "+ lanceRep.value/newval.n_parcelas
})

nodecg.listenFor('load', (newval) => { // carrega pelo numero do lote
	loteRep.value = newval;
	quantRep.value = newval
	vendedorRep.value = newval;
	racaRep.value = newval;
	tipoRep.value = newval;
	pesototRep.value = newval;
	pesomedRep.value = newval;
	valorunRep.value = newval;
	valortotRep.value = newval;
	prazoRep.value = newval;
	lancamentoRep.value = newval;
	valorkgRep.value = newval;
	valorparcelaRep.value = newval;
	nparcelaRep.value = newval;
	lanceRep.value = valortotRep.value;
		
	var found = encontraBoi(newval);
	found[0].hasOwnProperty('Kg_Total')? valorkgEl.innerHTML = "Valor por peso: " + (found[0].Valor_total / (found[0].Kg_Total)).toFixed(2).replace(".", ",") : valorkgEl.innerHTML = "Valor por peso: "
	if (found[0].hasOwnProperty('Quant')) {
		valorunEl.innerHTML = "Valor por cabeça: " + (found[0].Valor_total / (found[0].Quant)).toFixed(2).replace(".",",") + " p/ cabeça";
	}

})

nodecg.listenFor('novolote', (newval) => {

	loteEl.innerHTML = "Lote: " + newval.lote;
	quantEl.innerHTML = "Quant: " + newval.quant;
	tipoEl.innerHTML = "Tipo: " + newval.tipo;
	racaEl.innerHTML = "Raca: " + newval.raca;
	vendedorEl.innerHTML = "Vendedor: " + newval.vend;
	pesototEl.innerHTML = "Peso: " + newval.peso;
	valorunEl.innerHTML = "Valor por cabeça: " + (newval.valor / newval.quant).toFixed(2).replace(".",",")
	valortotEl.innerHTML = "Valor total: " + newval.valor;
	valorkgEl.innerHTML = "Valor por peso: " + (newval.valor/newval.peso).toFixed(2).replace(".",",")
	pesomedEl.innerHTML = "Peso Médio: " + (newval.peso/newval.quant).toFixed(2).replace(".",",");
	prazoEl.innerHTML = "Prazo: " + newval.prazo;
	valorparcelaEl.innerHTML = 'Valor por parcela: ' + (newval.valor/newval.npar).toFixed(2).replace(".",",");

})
