//minecraft vanilla By SrNadien 
ServerEvents.recipes(event => {
	
	
	//eliminadas
	event.remove({output:'minecraft:chest'})
    event.remove({ output: 'extendedcrafting:basic_table'})
	event.remove({output:'expandedstorage:wood_chest'})
	event.remove({output:'minecraft:crafting_table'})
	event.remove({output:'minecraft:furnace'})
	event.remove({output:'minecraft:piston'})
	event.remove({output:'minecraft:sticky_piston'})
	event.remove({output:'minecraft:cobweb'})
	event.remove({output:'mekanism:scuba_mask'})
	event.remove({output:'gag:time_sand_pouch'})
	event.remove({output:'allthemodium:teleport_pad'})
	event.remove({output:'minecraft:ender_chest'})
	event.remove({output:'shrink:shrinking_device'})
  event.remove({output:'#forge:coins'})
	
	//Mesa De Crafteo
	event.shaped('expandedstorage:old_wood_chest', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#minecraft:planks',
    C: '#minecraft:planks',
    Q: '#minecraft:planks',
    I: '#minecraft:planks',
	L: '#minecraft:logs',
    W: '#minecraft:planks',
    E: '#minecraft:planks',
    H: '#minecraft:planks',
    P: '#minecraft:planks'
  });
    event.shaped('4x minecraft:chest', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#minecraft:logs',
    C: '#minecraft:logs',
    Q: '#minecraft:logs',
    I: '#minecraft:logs',
	  L: 'expandedstorage:old_wood_chest',
    W: '#minecraft:logs',
    E: '#minecraft:logs',
    H: '#minecraft:logs',
    P: '#minecraft:logs'
  });
  	event.shaped('minecraft:furnace', [
    'TCQ',
    'I W',
    'EHP'
  ], {
    T: 'minecraft:cobblestone',
    C: 'minecraft:cobblestone',
    Q: 'minecraft:cobblestone',
    I: 'minecraft:cobblestone',
    W: 'minecraft:cobblestone',
    E: 'minecraft:cobblestone',
    H: 'minecraft:cobblestone',
    P: 'minecraft:cobblestone'
  });
   
       //Pinton
       event.shaped('minecraft:piston', [
        'TCQ',
        'ILW',
        'EHP'
      ], {
        T: '#minecraft:planks',
        C: '#minecraft:planks',
        Q: '#minecraft:planks',
        I: 'allthecompressed:cobblestone_1x',
        L: 'extendedcrafting:redstone_ingot',
        W: 'allthecompressed:cobblestone_1x',
        E: 'allthecompressed:cobblestone_1x',
        H: 'minecraft:amethyst_shard',
        P: 'allthecompressed:cobblestone_1x'
      });
      
      
      
        //Piston Pegajoso
        event.shaped('minecraft:sticky_piston', [
        'TCQ',
        'ILW',
        'EHP'
      ], {
        T: '#minecraft:planks',
        C: '#minecraft:planks',
        Q: '#minecraft:planks',
        I: 'allthecompressed:cobblestone_1x',
        L: 'extendedcrafting:redstone_ingot',
        W: 'allthecompressed:cobblestone_1x',
        E: 'allthecompressed:cobblestone_1x',
        H: 'minecraft:piston',
        P: 'allthecompressed:cobblestone_1x'
      });


     event.shaped('minecraft:end_portal_frame', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: '#forge:ingots/enderium',
    C: '#forge:ingots/enderium',
    Q: '#forge:ingots/enderium',
    I: 'minecraft:end_stone',
    L: 'ae2:fluix_block',
    W: 'minecraft:end_stone',
    E: 'minecraft:end_stone',
    H: 'minecraft:end_stone',
    P: 'minecraft:end_stone'
  });
  
  
    //telaraña
    event.shaped('minecraft:cobweb', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'minecraft:string',
    C: 'minecraft:string',
    Q: 'minecraft:string',
    I: 'minecraft:string',
    L: 'minecraft:string',
    W: 'minecraft:string',
    E: 'minecraft:string',
    H: 'minecraft:string',
    P: 'minecraft:string'
  });
  
  
  
 
    //mejora de netherite
    event.shaped('functionalstorage:netherite_upgrade', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'thermal_extra:dragonsteel_block',
    C: 'minecraft:netherite_block',
    Q: 'thermal_extra:dragonsteel_block',
    I: 'expandedstorage:old_netherite_chest',
    L: 'functionalstorage:diamond_upgrade',
    W: 'expandedstorage:old_netherite_chest',
    E: 'thermal_extra:dragonsteel_block',
    H: 'minecraft:netherite_block',
    P: 'thermal_extra:dragonsteel_block'
  });
  
  //ender chest
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 1,
  "pattern": [
    "AAA",
    "ABA",
    "AAA"
  ],
  "key": {
    "A": {
      "item": "allthecompressed:obsidian_block_1x"
    },
    "B": {
      "item": "ars_nouveau:scryers_oculus"
    }
  },
  "result": {
    "item": 'minecraft:ender_chest'
  },
});


//mesa de trabajo tier 1
event.shaped('extendedcrafting:basic_table', [
  'AA ',
  'AA ',
  '   '
], {
  A: '#minecraft:planks'
});



//Mesa de trabajo
event.shaped('minecraft:crafting_table', [
  'AA ',
  'AA ',
  '   '
], {
  A: 'extendedcrafting:basic_table'
});


})