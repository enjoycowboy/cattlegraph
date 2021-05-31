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

function encontraBoi(code){
	return data.filter(
		function(data){
			return data.Lote == code
		}
	);
}
var data = []
data = nodecg.listenFor('datainput', (newval)=>{
	for (var i = 0; i<newval.length;i++){
		data.push(newval)
	}
})

loteRep.on('change', (newval) =>{
	var found = encontraBoi(newval);
	try{
		loteEl.innerHTML = "Lote: " + found[0].Lote;
	}
	catch(err){
		loteEl.innerHTML = toString(err);
	}
})

vendedorRep.on('change', (newval) =>{
	var found = encontraBoi(newval);
	try{
	vendedorEl.innerHTML = "Vendedor: " + found[0].Vendedor;
}
	catch(err){
		vendedorEl.innerHTML = "Vendedor: ";
	}
})
quantRep.on('change', (newval) =>{
	var found = encontraBoi(newval);
	try{
	quantEl.innerHTML = "Quant: " + found[0].Quant;
	}
	catch(err){
		quantEl.innerHTML = "Quant: ";
	}
})
tipoRep.on('change', (newval) =>{
	var found = encontraBoi(newval);
	try{
	tipoEl.innerHTML = "Tipo: " + found[0].Tipo;
	}
	catch(err){
		tipoEl.innerHTML = err;
	}
})
racaRep.on('change', (newval) =>{
	var found = encontraBoi(newval);
	try {
		fs = require('fs');
		fs.readFile("./bois.json", fillData);

	racaEl.innerHTML = "Raça: " + found[0].Raca;
	}
	catch(err){
		racaEl.innerHTML = "Raça: ";
	}
})
pesototRep.on('change', (newval) =>{
	var found = encontraBoi(newval);
	try{
	pesototEl.innerHTML = "Peso Total: " + found[0].Kg_Total;
	}
	catch(err){
		pesototEl.innerHTML = "pesotot: ";
	}
})
pesomedRep.on('change', (newval) =>{
	var found = encontraBoi(newval);
	try{
	pesomedEl.innerHTML = "Peso Médio: " + found[0].Peso_medio;
	}
	catch(err){
		pesomedEl.innerHTML = "pesomed: ";
	}
})
valorunRep.on('change', (newval) =>{
	var found = encontraBoi(newval);
	try{
	valorunEl.innerHTML = "Valor por cabeça: \nR$" + found[0].Valor_por_cabeça;
	}
	catch(err){
		valorunEl.innerHTML = "Valor por cabeça: ";
	}
})
valortotRep.on('change', (newval) =>{
	var found = encontraBoi(newval);
	try{
	valortotEl.innerHTML = "Valor Total:" + found[0].Valor_Total;
	}
	catch(err){
		valortotEl.innerHTML = "valortot: ";
	}
})
prazoRep.on('change', (newval) =>{
	var found = encontraBoi(newval);
	try{
	prazoEl.innerHTML = "Prazo: " + found[0].Prazo;
	}
	catch(err){
		prazoEl.innerHTML = "prazo: ";
	}
})
// TODO: NÃO CAPTUROU EXCEÇÃO
lancamentoRep.on('change', (newval) =>{
	var found = encontraBoi(newval);
	try{
	lancamentoEl.innerHTML = "Lançamento: " + found[0].Lancamento;
	}
	catch(err){
		lancamentoEl.innerHTML = "lancamento: ";
	}
 })

nodecg.listenFor('atualiza', (newval) => {
	prazoEl.innerHTML = "Prazo: " + newval.Prazo;
	lanceEl.innerHTML = "R$ " + newval.Valor;
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
})


