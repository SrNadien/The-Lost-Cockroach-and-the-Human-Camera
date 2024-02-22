//mekanism By SrNadien
ServerEvents.recipes(event => {
	
	
	//eliminadas
	event.remove({output:'mekanism:personal_chest'})
	event.remove({output:'mekanism:robit'})
	event.remove({output:'mekanism:flamethrower'})
	event.remove({output:'mekanism:scuba_tank'})
	event.remove({output:'mekanism:free_runners'})
	event.remove({output:'mekanism:free_runners_armored'})
	event.remove({output:'mekanism:personal_barrel'})
	event.remove({output:'mekanismgenerators:wind_generator'})
	event.remove({output:'mekanismgenerators:heat_generator'})
	event.remove({output:'mekanism:metallurgic_infuser'})
	event.remove({output:'mekanism:steel_casing'})
	event.remove({output:'mekanism:enrichment_chamber'})
	event.remove({output:'mekanism:basic_energy_cube'})
	event.remove({output:'mekanism:purification_chamber'})
	event.remove({output:'mekanism:electric_pump'})
	event.remove({output:'mekanism:energy_tablet'})
	event.remove({output:'mekanism:electrolytic_separator'})
	event.remove({output:'mekanism:precision_sawmill'})
	event.remove({output:'mekanism:jetpack'})
	event.remove({output:'mekanismgenerators:solar_generator'})
	event.remove({output:'mekanism:basic_universal_cable'})
	event.remove({output:'mekanism:basic_logistical_transporter'})
	event.remove({output:'mekanism:basic_thermodynamic_conductor'})
	event.remove({output:'mekanism:basic_tier_installer'})
	event.remove({output:'mekanism:advanced_tier_installer'})
	event.remove({output:'mekanism:elite_tier_installer'})
	event.remove({output:'mekanism:ultimate_tier_installer'})
	event.remove({output:'mekanism:basic_logistical_transporter'})
	event.remove({output:'mekanism:advanced_logistical_transporter'})
	event.remove({output:'mekanism:elite_logistical_transporter'})
	event.remove({output:'mekanism:ultimate_logistical_transporter'})
	event.remove({output:'mekanism:restrictive_transporter'})
	event.remove({output:'mekanism:diversion_transporter'})
	event.remove({output:'mekanism:digital_miner'})
	event.remove({output:'mekanism:cardboard_box'})
	event.remove({output:'mekanism:basic_bin'})
	event.remove({output:'mekanism:module_blasting_unit'})
	event.remove({output:'mekanism:upgrade_anchor'})
	event.remove({output:'thermal:machine_frame'})
	event.remove({output:'thermal:rf_coil'})
	event.remove({output:'mekanism:alloy_infused'})
	event.remove({output:'mekanism:basic_control_circuit'})
	event.remove({output:'mekanism:combiner'})
	event.remove({output:'immersiveengineering:concrete_leaded'})
	event.remove({output:'hostilenetworks:empty_prediction'})
  event.remove({output:'sophisticatedbackpacks:upgrade_base'})
  event.remove({output:'minecraft:end_crystal'})
	event.remove({output:'mekanism:chemical_oxidizer'})
	event.remove({ id: 'mekanism:alloys/infused' });
	event.remove({ id: 'mekanism:basic_control_circuit' });
	
	//recetas maquinas


  //generador de calor
	event.shaped('mekanismgenerators:heat_generator', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/iron',
    C: '#forge:plates/iron',
    Q: '#forge:plates/iron',
    I: '#minecraft:planks',
    L: '#forge:plates/osmium',
    W: '#minecraft:planks',
    E: 'thermal:saw_blade',
    H: 'minecraft:blast_furnace',
    P: 'thermal:saw_blade'
  });
    
  //infusor metalurgico
    event.shaped('mekanism:metallurgic_infuser', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/iron',
    C: 'minecraft:blast_furnace',
    Q: '#forge:plates/iron',
    I: 'minecraft:redstone',
    L: '#forge:plates/osmium',
    W: 'minecraft:redstone',
    E: '#forge:plates/iron',
    H: 'minecraft:blast_furnace',
    P: '#forge:plates/iron'
  });

  //tuvo de energia basico
    event.shaped('mekanism:basic_energy_cube', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:alloy_infused',
    C: 'mekanism:energy_tablet',
    Q: 'mekanism:alloy_infused',
    I: '#forge:plates/steel',
    L: 'create:andesite_casing',
    W: '#forge:plates/steel',
    E: 'mekanism:alloy_infused',
    H: 'mekanism:energy_tablet',
    P: 'mekanism:alloy_infused'
  });

  //purificadora
    event.shaped('mekanism:purification_chamber', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:alloy_infused',
    C: 'mekanism:advanced_control_circuit',
    Q: 'mekanism:alloy_infused',
    I: '#forge:plates/osmium',
    L: 'create:andesite_casing',
    W: '#forge:plates/osmium',
    E: 'mekanism:alloy_infused',
    H: 'mekanism:advanced_control_circuit',
    P: 'mekanism:alloy_infused'
  });

  //panel solar 2
    event.shaped('mekanismgenerators:solar_panel', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'minecraft:glass_pane',
    C: 'minecraft:glass_pane',
    Q: 'minecraft:glass_pane',
    I: 'mekanism:alloy_reinforced',
    L: 'mekanism:alloy_infused',
    W: 'mekanism:alloy_reinforced',
    E: '#forge:plates/osmium',
    H: '#forge:plates/osmium',
    P: '#forge:plates/osmium'
  });

  //bomba electrica
    event.shaped('mekanism:electric_pump', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
	T: 'pneumaticcraft:spawner_core',
	C: 'minecraft:bucket',
    Q: 'pneumaticcraft:spawner_core',
    I: 'mekanism:alloy_infused',
    L: 'create:andesite_casing',
    W: 'mekanism:alloy_infused',
    E: '#forge:plates/osmium',
    H: '#forge:plates/osmium',
    P: '#forge:plates/osmium'
  });

  //tabla de energia
    event.shaped('mekanism:energy_tablet', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/steel',
    C: '#forge:plates/gold',
    Q: '#forge:plates/steel',
    I: 'mekanism:alloy_infused',
    L: '#forge:plates/gold',
    W: 'mekanism:alloy_infused',
    E: '#forge:plates/steel',
    H: '#forge:plates/gold',
    P: '#forge:plates/steel'
  });

  //separador de electrolitos
    event.shaped('mekanism:electrolytic_separator', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/steel',
    C: 'mekanism:alloy_infused',
    Q: '#forge:plates/steel',
    I: 'mekanism:alloy_infused',
    L: 'mekanism:electrolytic_core',
    W: 'mekanism:alloy_infused',
    E: '#forge:plates/steel',
    H: 'mekanism:alloy_infused',
    P: '#forge:plates/steel'
  });

  //cortadora de madera
    event.shaped('mekanism:precision_sawmill', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/steel',
    C: 'mekanism:advanced_control_circuit',
    Q: '#forge:plates/steel',
    I: 'mekanism:alloy_infused',
    L: 'create:andesite_casing',
    W: 'mekanism:alloy_infused',
    E: '#forge:plates/steel',
    H: 'mekanism:advanced_control_circuit',
    P: '#forge:plates/steel'
  });

  //generador solar
    event.shaped('mekanismgenerators:solar_generator', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanismgenerators:solar_panel',
    C: 'mekanismgenerators:solar_panel',
    Q: 'mekanismgenerators:solar_panel',
    I: 'mekanism:alloy_reinforced',
    L: '#forge:plates/steel',
    W: 'mekanism:alloy_reinforced',
    E: '#forge:plates/osmium',
    H: 'mekanism:energy_tablet',
    P: '#forge:plates/osmium'
  });

  //tubo universal basico
    event.shaped('8x mekanism:basic_universal_cable', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/steel',
    C: '#forge:plates/steel',
    Q: '#forge:plates/steel',
    I: 'minecraft:glass',
    L: 'minecraft:redstone',
    W: 'minecraft:glass',
    E: '#forge:plates/steel',
    H: '#forge:plates/steel',
    P: '#forge:plates/steel'
  });

  //tubo presurizado basico
    event.shaped('8x mekanism:basic_pressurized_tube', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/steel',
    C: '#forge:plates/steel',
    Q: '#forge:plates/steel',
    I: 'minecraft:glass',
    L: 'minecraft:glass',
    W: 'minecraft:glass',
    E: '#forge:plates/steel',
    H: '#forge:plates/steel',
    P: '#forge:plates/steel'
  });

  //tubo cinsuctor de energia
     event.shaped('8x mekanism:basic_thermodynamic_conductor', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:plates/steel',
    C: '#forge:plates/steel',
    Q: '#forge:plates/steel',
    I: 'minecraft:glass',
    L: 'alltheores:copper_plate',
    W: 'minecraft:glass',
    E: '#forge:plates/steel',
    H: '#forge:plates/steel',
    P: '#forge:plates/steel'
  });

  //instalador basico
     event.shaped('mekanism:basic_tier_installer', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'minecraft:redstone',
    C: 'mekanism:basic_control_circuit',
    Q: 'minecraft:redstone',
    I: '#forge:plates/steel',
    L: '#minecraft:planks',
    W: '#forge:plates/steel',
    E: 'minecraft:redstone',
    H: 'mekanism:basic_control_circuit',
    P: 'minecraft:redstone'
  });

  //instalador avanzado
     event.shaped('mekanism:advanced_tier_installer', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:alloy_infused',
    C: 'mekanism:advanced_control_circuit',
    Q: 'mekanism:alloy_infused',
    I: '#forge:plates/lumium',
    L: '#minecraft:planks',
    W: '#forge:plates/lumium',
    E: 'mekanism:alloy_infused',
    H: 'mekanism:advanced_control_circuit',
    P: 'mekanism:alloy_infused'
  });


  //instalador elite
    event.shaped('mekanism:elite_tier_installer', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:alloy_reinforced',
    C: 'mekanism:elite_control_circuit',
    Q: 'mekanism:alloy_reinforced',
    I: '#forge:plates/signalum',
    L: '#minecraft:planks',
    W: '#forge:plates/signalum',
    E: 'mekanism:alloy_reinforced',
    H: 'mekanism:elite_control_circuit',
    P: 'mekanism:alloy_reinforced'
  });

  //instalador definitivo
    event.shaped('mekanism:ultimate_tier_installer', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:alloy_atomic',
    C: 'mekanism:ultimate_control_circuit',
    Q: 'mekanism:alloy_atomic',
    I: '#forge:plates/enderium',
    L: '#minecraft:planks',
    W: '#forge:plates/enderium',
    E: 'mekanism:alloy_atomic',
    H: 'mekanism:ultimate_control_circuit',
    P: 'mekanism:alloy_atomic'
  });

  //enriquesedora
    event.shaped('mekanism:enrichment_chamber', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:alloy_infused',
    C: 'mekanism:advanced_control_circuit',
    Q: 'mekanism:alloy_infused',
    I: '#forge:plates/diamond',
    L: 'create:andesite_casing',
    W: '#forge:plates/diamond',
    E: 'mekanism:alloy_infused',
    H: 'mekanism:advanced_control_circuit',
    P: 'mekanism:alloy_infused'
  });

  //combinador
    event.shaped('mekanism:combiner', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:alloy_reinforced',
    C: 'mekanism:elite_control_circuit',
    Q: 'mekanism:alloy_reinforced',
    I: 'create_new_age:advanced_motor_extension',
    L: 'create:andesite_casing',
    W: 'create_new_age:advanced_motor_extension',
    E: 'mekanism:alloy_reinforced',
    H: 'mekanism:elite_control_circuit',
    P: 'mekanism:alloy_reinforced'
  });

  //oxidizer
    event.shaped('mekanism:chemical_oxidizer', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'mekanism:alloy_infused',
    C: 'mekanism:basic_control_circuit',
    Q: 'mekanism:alloy_infused',
    I: 'expandedstorage:old_netherite_chest',
    L: 'mekanism:dynamic_tank',
    W: 'mekanism:basic_chemical_tank',
    E: 'mekanism:alloy_infused',
    H: 'mekanism:basic_control_circuit',
    P: 'mekanism:alloy_infused'
  });

  //jetpack
  event.shaped('mekanism:jetpack', [
    ' C ',
    'ELE',
    'PHP'
  ], {
    C: 'mekanism:ultimate_energy_cube',
    L: 'mekanism:energy_tablet',
    E: 'mekanism:alloy_atomic',
    H: 'mekanism:ultimate_chemical_tank',
    P: 'mekanism:ingot_refined_obsidian'
  });

  //carcasa de acero
  event.shaped('mekanism:steel_casing', [
    'ABA',
    'BCB',
    'ABA'
  ], {
    A: '#forge:plates/steel',
    B: '#forge:plates/osmium',
    C: '#forge:ingots/brass'
  });


  	//minero digital
	event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 3,
    "pattern": [
      "AAABAAA",
      "ACCCCCA",
      "ACDDDCA",
      "BCDEDCB",
      "ACDDDCA",
      "ACCCCCA",
      "AAABAAA"
    ],
    "key": {
      "A": {
        "item": "fluxnetworks:flux_core"
      },
      "B": {
        "item": "solarpanels:photonic_energy_tablet"
      },
      "C": {
        "item": "minecraft:lapis_lazuli"
      },
      "D": {
        "item": "industrialforegoing:laser_lens0"
      },
      "E": {
        "item": "industrialforegoing:machine_frame_advanced"
      }
    },
    "result": {
      "item": "mekanism:digital_miner",
      "count": 1
    },
  });

  
  //atomic disasembler
  event.shaped('mekanism:atomic_disassembler', ['ITI', 'IAI', ' P '], {
  I: 'mekanism:alloy_infused',
  T: 'mekanism:energy_tablet',
  A: 'mekanism:alloy_atomic',
  P: 'allthemodium:allthemodium_pickaxe'
})


  
   //Infusor Metalurgico
event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":20,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"tag":"forge:plates/steel"}},"output":{"item":"mekanism:alloy_infused"}});
event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":100,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"tag":"forge:plates/gold"}},"output":{"item":"thermal:rf_coil"}});
event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":1000,"tag":"mekanism:diamond"},"itemInput":{"ingredient":{"item":"create:andesite_casing"}},"output":{"item":"thermal:machine_frame"}});
event.custom({"type":"mekanism:metallurgic_infusing","chemicalInput":{"amount":40,"tag":"mekanism:redstone"},"itemInput":{"ingredient":{"tag":"forge:plates/osmium"}},"output":{"item":"mekanism:basic_control_circuit"}});

//combinador
event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"tag":"forge:plates/steel"}},"mainInput":{"ingredient":{"item":"minecraft:leather"}},"output":{"item":"sophisticatedbackpacks:upgrade_base"}});
event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":"minecraft:heart_of_the_sea"}},"mainInput":{"ingredient":{"item":"thermal_extra:soul_infused_plate"}},"output":{"item":"allthemodium:piglich_heart"}});
event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":"minecraft:wither_skeleton_skull"}},"mainInput":{"ingredient":{"item":"minecraft:compass"}},"output":{"item":"hostilenetworks:prediction_matrix"}});
event.custom({"type":"mekanism:combining","extraInput":{"ingredient":{"item":'pneumaticcraft:capacitor'}},"mainInput":{"ingredient":{"item":"ars_nouveau:starbuncle_charm"}},"output":{"item":"minecraft:dragon_breath"}});
  

//trituradora
event.custom({"type":"mekanism:crushing","input":{"ingredient":{"item":"minecraft:end_stone"}},"output":{"count":2,"item":"occultism:crushed_end_stone"}});
   

})