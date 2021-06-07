'use strict';

module.exports = function (nodecg) {

	const fileData = nodecg.Replicant('filedata');

	// ---------------- debug triggers
	fileData.on('change', (newval) =>{
		nodecg.log.info("importando");
		nodecg.log.info(newval);
		nodecg.log.info("---carregado---");
	})

	nodecg.listenFor('prazo', (newval) =>{
		nodecg.log.info("prazo alterado para " + newval);
	})

	nodecg.listenFor('valor', (newval) =>{
		nodecg.log.info("valor alterado para " + newval);
	})

	nodecg.listenFor('novolote', (newval) =>{
		nodecg.log.info("novo lote criado:\n");
		
		nodecg.log.info("Lote: " + newval.lote)
		nodecg.log.info("Quant: " + newval.quant)
		nodecg.log.info("Tipo: " + newval.tipo)
		nodecg.log.info("Raca: " + newval.raca)
		nodecg.log.info("Vend: " + newval.vend)
		nodecg.log.info("Peso: " + newval.peso)
		nodecg.log.info("Valor: " + newval.valor)
	})

	nodecg.listenFor('load', (newval) => {
		nodecg.log.info("Carregando lote " + newval);
		
	})
};
