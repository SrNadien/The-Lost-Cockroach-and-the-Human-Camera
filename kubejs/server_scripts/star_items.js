ServerEvents.recipes(event => {
  // Alma De Dragon
  event.shaped('kubejs:alma', ['CDA', 'SNI', 'BGE'], {
    C: 'apotheosis:infused_breath',
    D: 'thermal_extra:dragonsteel_block',
    A: 'minecraft:dragon_head',
    S: 'allthemodium:unobtainium_allthemodium_alloy_ingot',
    N: 'artifacts:crystal_heart',
    I: Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:ender_dragon"}}').weakNBT(),
    B: 'minecraft:dragon_breath',
	G: 'artifacts:crystal_heart',
    E: 'ars_nouveau:summon_focus'
  })

	
  // Brujula Maldita
  event.shaped('kubejs:brujulamaldita', ['DED', 'ABA', 'DED'], {
    A: 'mekanism:module_gravitational_modulating_unit',
    B: 'industrialforegoing:wither_builder',
    D: 'allthecompressed:enderium_block_4x',
    E: 'mekanism:module_gravitational_modulating_unit'
  })

  // Combustible
  event.shaped('kubejs:combustible', ['ABC', 'GEE', 'ICI'], {
    A:'extendedcrafting:flux_star',
    B: 'mekanism:pellet_antimatter',
  	C: Item.of('mekanismgenerators:hohlraum', '{mekData:{GasTanks:[{Tank:0b,stored:{amount:10L,gasName:"mekanismgenerators:fusion_fuel"}}]}}'),
    E: 'allthecompressed:coal_block_5x',
  	G: 'mythicbotany:niflheim_rune',
    I: 'pneumaticcraft:pressure_chamber_interface'
  })

  // Antimateria
  event.shaped('kubejs:antimateria', ['ABA', 'CGE', 'FDF'], {
    A: 'mekanismgenerators:module_solar_recharging_unit',
	B: 'aeinfinitybooster:dimension_card',
    C: 'ae2:cell_component_256k',
    D: 'pneumaticcraft:capacitor',
	E: 'pneumaticcraft:module_expansion_card',
    F: 'solarpanels:photonic_energy_tablet',
    G: 'solarpanels:photonic_energy_tablet'
  })

  // transmisor
  event.shaped('kubejs:transmisor', ['A B', ' CF', 'GED'], {
    A: Item.of('mekanism:canteen', '{mekData:{FluidTanks:[{Tank:0b,stored:{Amount:64000,FluidName:"mekanism:nutritional_paste"}}]}}'),
    B: 'ae2wtlib:wireless_universal_terminal',
    C: 'mekanism:supercharged_coil',
    D: 'pneumaticcraft:module_expansion_card',
    E: 'ae2:singularity',
    F: 'mekanismgenerators:module_solar_recharging_unit',
    G: 'createaddition:tesla_coil'
  })

  // Black Hole
  event.custom({
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'extendedcrafting:ultimate_singularity', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'ae2:quantum_ring', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:micromissiles', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'mekanism:pellet_antimatter', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'minecraft:nether_star', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'mekanism:pellet_plutonium', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'industrialforegoing:infinity_nuke', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'apotheosis:vial_of_expulsion', 'count': 1 }
    ],
    pressure: 4.9,
    results: [
      {
        'item': 'kubejs:blackhole'
      }
    ]
  })
  
  
  //semilla
  event.custom({
    type: 'pneumaticcraft:pressure_chamber',
    inputs: [
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'mekanism:pellet_plutonium', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'allthecompressed:diamond_block_5x', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'mythicbotany:alfsteel_block', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'enchantinginfuser:advanced_enchanting_infuser', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'extendedcrafting:enhanced_ender_ingot_block', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'alexsmobs:sopa_de_macaco', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'alexsmobs:enderiophage_rocket', 'count': 1 },
      { 'type': 'pneumaticcraft:stacked_item', 'item': 'ae2things:disk_drive_256k', 'count': 1 }
    ],
    pressure: 4.9,
    results: [
      {
        'item': 'kubejs:semilla'
      }
    ]
  })

  

  // Oblivion Shard
  event.shaped('kubejs:catalizadordeoblivion', [' AB', 'ACA', 'BA '], {
    A: 'chemlib:acetylene',
    C: 'allthecompressed:glass_block_5x',
    B: 'kubejs:doll'
  })

  // Creative Energy Tablet
  event.shaped('solarpanels:creative_energy_tablet', ['CAC', 'ABA', 'CAC'], {
    A: 'tfmg:cast_iron_flywheel',
    C: 'mythicbotany:kvasir_blood',
    B: 'forbidden_arcanus:eternal_stella'
  })
  
  
  
  //calavaera maldita
  event.recipes.create.mechanical_crafting('kubejs:calavera', [
	'    F    ',
  '   AAA   ',
	'  FACAF  ',
	'  FABAF  ',
	'   NNN   ',
	'    F    '
  ], {
    A: 'minecraft:wither_skeleton_skull',
    B: 'thermal_extra:upgrade_augment',
    C: 'industrialforegoing:wither_builder',
	  F: 'minecraft:wither_rose',
	  N: Item.of('productivebees:configurable_comb', '{EntityTag:{type:"productivebees:spirited_crystal"}}')
  }) 

  event.recipes.create.mechanical_crafting('kubejs:minireactor', [
	' A A ',
        'BCDCB',
	' EFE ',
	'BCDCB',
	' A A '
  ], {
    A: 'thermal_extra:dynamo_output_augment_4', 
	B:'pylons:harvester_pylon', 
	C:'mekanismgenerators:fusion_reactor_frame', 
	D:'kubejs:simulated_mechanism', 
	E:'allthemodium:unobtainium_allthemodium_alloy_ingot', 
	F:'industrialforegoing:mycelial_reactor'  
}) 


 


  event.recipes.create.mechanical_crafting('kubejs:miniportal', [
	'  A  ',
  ' BCD ',
	'EFGFE',
	' DCB ',
	'  A  '
  ], {
    A: Item.of('pneumaticcraft:amadron_tablet', '{"pneumaticcraft:air":30000}'), 
B:'allthecompressed:spirited_crystal_block_3x', 
C:'chemlib:nitrogen_dioxide', 
D:'allthecompressed:enderium_block_3x', 
E:'solarpanels:photonic_energy_tablet', 
F:'kubejs:enchanted_mechanism', 
G:'mekanism:module_teleportation_unit'

}) 

 //Planos
 event.shaped('kubejs:planos', ['AHB', 'CGE', 'FDF'], {
  A: 'megacells:mega_crafting_monitor',
  B: 'mekanismgenerators:module_solar_recharging_unit',
  C: 'ae2:cell_component_256k',
  D: 'forbidden_arcanus:eternal_obsidian_skull',
  E: Item.of('apotheosis:potion_charm', { Damage: 0, Potion: "apotheosis:strong_knowledge" }),
  F: 'allthecompressed:enderium_block_3x',
  G: 'thermal:nuke_tnt',
  H: 'solarpanels:advanced_solar_panel'  
}).id('kubejs:srnadien/improbable_probability_device')


//pepita de mega semilla
event.shaped('9x kubejs:starnugget', [
  ' A ',
  '   ',
  '   '
], {
  A: 'kubejs:star'
});


//Muneco De Paja
event.recipes.create.mixing('kubejs:doll', ['minecraft:echo_shard', 'kubejs:superseed', 'minecraft:calibrated_sculk_sensor', 'allthemodium:vibranium_allthemodium_alloy_ingot', 'argentinas_delight:matedulceitem', 'ars_nouveau:glyph_wither']).superheated()


//Super Semilla
event.recipes.create.mixing('kubejs:superseed', ['minecraft:crimson_fungus', 'minecraft:warped_fungus', 'bhc:relic_apple', 'botania:mutated_seeds', 'wizards_reborn:arcane_linen_seeds', 'alexsmobs:maraca', 'ars_elemental:magma_upstream', 'extendedcrafting:flux_star_block', 'create:blaze_cake']).superheated()

}) 



