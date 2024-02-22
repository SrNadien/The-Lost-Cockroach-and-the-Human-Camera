ServerEvents.recipes(event => {






  event.shaped('kubejs:copper_mechanism', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: 'minecraft:copper_block',
    B: 'kubejs:basic_mechanism',
    C: 'create:electron_tube'
  }
)

  

  event.recipes.createSequencedAssembly([ // start the recipe
		Item.of('kubejs:steel_mechanism') // this is the item that will appear in JEI as the result
	],'kubejs:copper_mechanism',[ // the input
		// the transitional item
    event.recipes.create.filling('kubejs:incomplete_steel_mechanism', [Fluid.of('industrialforegoing:meat', 1000), 'kubejs:copper_mechanism']),
    event.recipes.create.filling('kubejs:incomplete_steel_mechanism', [Fluid.of('mekanism:sulfuric_acid', 200), 'kubejs:incomplete_steel_mechanism']),
		event.recipes.createDeploying('kubejs:incomplete_steel_mechanism',['kubejs:incomplete_steel_mechanism','create:nixie_tube']),
		event.recipes.createDeploying('kubejs:incomplete_steel_mechanism',['kubejs:incomplete_steel_mechanism','createaddition:electric_motor']),
		event.recipes.createDeploying('kubejs:incomplete_steel_mechanism',['kubejs:incomplete_steel_mechanism','ars_nouveau:air_essence']),
		event.recipes.create.pressing('kubejs:incomplete_steel_mechanism', 'kubejs:steel_mechanism')
	]).transitionalItem('kubejs:incomplete_steel_mechanism').loops(1) // set the transitional item and the loops (amount of repetitions)


	event.recipes.createSequencedAssembly([
		Item.of('kubejs:simulated_mechanism') 
	],'allthemodium:vibranium_block',[
    event.recipes.create.filling('kubejs:simulated_base', [Fluid.of('mekanism:ethene', 1000), 'allthemodium:vibranium_block']),
		event.recipes.createDeploying('kubejs:simulated_base',['kubejs:simulated_base','allthecompressed:nitro_crystal_block_1x']),
    event.recipes.create.filling('kubejs:simulated_base', [Fluid.of('industrialforegoing:sludge', 1000), 'kubejs:simulated_base']),
    event.recipes.create.filling('kubejs:simulated_base', [Fluid.of('thermal:ender', 1000), 'kubejs:simulated_base']),
    event.recipes.create.filling('kubejs:simulated_base', [Fluid.of('pneumaticcraft:kerosene', 1000), 'kubejs:simulated_base']),
		event.recipes.createDeploying('kubejs:simulated_base',['kubejs:simulated_base','allthemodium:piglich_heart_block']),
		event.recipes.create.pressing('kubejs:simulated_base', 'kubejs:simulated_base'),
	]).transitionalItem('kubejs:simulated_base').loops(1)



	event.recipes.createSequencedAssembly([ // start the recipe
	Item.of('kubejs:enchanted_mechanism') // this is the item that will appear in JEI as the result
],'create:andesite_casing',[ // the input
	// the transitional item
event.recipes.create.filling('kubejs:incomplete_enchanted_mechanism', [Fluid.of('industrialforegoing:meat', 1000), 'kubejs:copper_mechanism']),
event.recipes.create.filling('kubejs:incomplete_enchanted_mechanism', [Fluid.of('mekanism:sulfuric_acid', 200), 'kubejs:incomplete_enchanted_mechanism']),
	event.recipes.createDeploying('kubejs:incomplete_enchanted_mechanism',['kubejs:incomplete_enchanted_mechanism','create:nixie_tube']),
	event.recipes.createDeploying('kubejs:incomplete_enchanted_mechanism',['kubejs:incomplete_enchanted_mechanism','createaddition:electric_motor']),
	event.recipes.createDeploying('kubejs:incomplete_enchanted_mechanism',['kubejs:incomplete_enchanted_mechanism','ars_nouveau:air_essence']),
	event.recipes.create.pressing('kubejs:incomplete_enchanted_mechanism', 'kubejs:steel_mechanism')
]).transitionalItem('kubejs:incomplete_enchanted_mechanism').loops(1) // set the transitional item and the loops (amount of repetitions)



  event.recipes.createSequencedAssembly([ // start the recipe
  Item.of('kubejs:basic_mechanism') // this is the item that will appear in JEI as the result
],'create:andesite_casing',[ // the input
  // the transitional item
  event.recipes.createDeploying('kubejs:incomplete_basic_mechanism',['kubejs:incomplete_basic_mechanism','create:cogwheel']),
  event.recipes.createDeploying('kubejs:incomplete_basic_mechanism',['kubejs:incomplete_basic_mechanism','create:cogwheel']),
  event.recipes.createDeploying('kubejs:incomplete_basic_mechanism',['kubejs:incomplete_basic_mechanism','create:andesite_alloy']),
  event.recipes.create.pressing('kubejs:incomplete_basic_mechanism', 'kubejs:basic_mechanism'),
]).transitionalItem('kubejs:incomplete_basic_mechanism').loops(1) // set the transitional item and the loops (amount of repetitions)


event.recipes.createSequencedAssembly([ // start the recipe
		Item.of('kubejs:copper_mechanism') // this is the item that will appear in JEI as the result
	],'kubejs:basic_mechanism',[ // the input
		// the transitional item
    event.recipes.create.filling('kubejs:incomplete_copper_mechanism', [Fluid.of('mekanism:hydrofluoric_acid', 1000), 'kubejs:basic_mechanism']),
		event.recipes.createDeploying('kubejs:incomplete_copper_mechanism',['kubejs:incomplete_copper_mechanism','create:cogwheel']),
    event.recipes.create.pressing('kubejs:incomplete_copper_mechanism', 'kubejs:copper_mechanism'),
		event.recipes.createDeploying('kubejs:incomplete_copper_mechanism',['kubejs:incomplete_copper_mechanism','create:electron_tube']),
		event.recipes.create.pressing('kubejs:incomplete_copper_mechanism', 'kubejs:copper_mechanism'),
	]).transitionalItem('kubejs:incomplete_copper_mechanism').loops(1) // set the transitional item and the loops (amount of repetitions)

event.recipes.createSequencedAssembly([ // start the recipe
		Item.of('create:precision_mechanism') // this is the item that will appear in JEI as the result
	],'kubejs:copper_mechanism',[ // the input
		// the transitional item
    event.recipes.create.filling('create:incomplete_precision_mechanism', [Fluid.of('mekanismgenerators:deuterium', 1000), 'kubejs:copper_mechanism']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','pneumaticcraft:compressed_iron_gear']),
 	 	// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','pneumaticcraft:capacitor']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','pneumaticcraft:logistics_core']),
		event.recipes.createDeploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','pneumaticcraft:pneumatic_wrench']).keepHeldItem()
	]).transitionalItem('create:incomplete_precision_mechanism').loops(1) // set the transitional item and the loops (amount of repetitions)


	event.recipes.createSequencedAssembly([ // start the recipe
	Item.of('kubejs:mek_mechanism') // this is the item that will appear in JEI as the result
	],'kubejs:steel_mechanism',[
	event.recipes.create.filling('kubejs:mek_base', [Fluid.of('thermal:ender', 1000), 'kubejs:mek_base']),
	event.recipes.createDeploying('kubejs:mek_base',['kubejs:mek_base','powah:capacitor_niotic']),
	event.recipes.createDeploying('kubejs:mek_base',['kubejs:mek_base','pneumaticcraft:drill_bit_netherite']),
	event.recipes.createDeploying('kubejs:mek_base',['kubejs:mek_base','pneumaticcraft:printed_circuit_board']),
	event.recipes.createDeploying('kubejs:mek_base',['kubejs:mek_base','pneumaticcraft:capacitor']),
	event.recipes.createDeploying('kubejs:mek_base',['kubejs:mek_base','pneumaticcraft:transistor']),
	event.recipes.createDeploying('kubejs:mek_base',['kubejs:mek_base',Item.of('immersiveengineering:grindingdisk', '{Damage:0}')]),
	]).transitionalItem('kubejs:mek_base').loops(1) // set the transitional item and the loops (amount of repetitions)





})