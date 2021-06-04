'use strict';

module.exports = function (nodecg) {
	nodecg.log.info('Hello, from your bundle\'s extension!');
	nodecg.log.info('I\'m where you put all your server-side code.');
	nodecg.log.info(`To edit me, open "${__filename}" in your favorite text editor or IDE.`);
	nodecg.log.info('You can use any libraries, frameworks, and tools you want. There are no limits.');
	nodecg.log.info('Visit https://nodecg.com for full documentation.');
	nodecg.log.info('Good luck!');

	const fileData = nodecg.Replicant('filedata');

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
};
