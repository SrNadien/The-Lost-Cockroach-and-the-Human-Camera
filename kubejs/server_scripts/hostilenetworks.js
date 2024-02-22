ServerEvents.recipes(event => {
	
	//eliminadas
   event.remove({output:'hostilenetworks:sim_chamber'})
   event.remove({output:'hostilenetworks:loot_fabricator'})
   event.remove({output:'hostilenetworks:deep_learner'})
   event.remove({output:'hostilenetworks:blank_data_model'})
   event.remove({output:'hostilenetworks:prediction_matrix'})
   event.remove({output:Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:vindicator"}}')})
   event.remove({output:Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:ender_dragon"}}')})
	
	
	//simulation chamber
	event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAABAAAA",
    "ACCCCCCCA",
    "ACDDDDDCA",
    "ACDEEEDCA",
    "FGGEHEGGF",
    "ACDEEEDCA",
    "ACDDDDDCA",
    "ACCCCCCCA",
    "AAAAIAAAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:ghast_tear"
    },
    "B": {
      "item": "kubejs:simulated_mechanism"
    },
    "C": {
      "item": "minecraft:lapis_lazuli"
    },
    "D": {
      "item": "minecraft:cyan_dye"
    },
    "E": {
      "item": "minecraft:obsidian"
    },
    "F": {
      "item": "fluxnetworks:flux_core"
    },
    "G": {
      "item": "minecraft:diamond_block"
    },
    "H": {
      "item": "extendedcrafting:ender_star"
    },
    "I": {
      "item": "minecraft:comparator"
    }
  },
  "result": {
    "item": 'hostilenetworks:sim_chamber',
    "count": 1
  },
});
  
    //loot fabricator
    event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAABAAAA",
    "ACDDCDDCA",
    "ADCECECDA",
    "FFFGGGFFF",
    "HHHGGGHHH",
    "FFFGGGFFF",
    "ADCECECDA",
    "ACDDCDDCA",
    "AAAAIAAAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:gold_ingot"
    },
    "B": {
      "item": "kubejs:simulated_mechanism"
    },
    "C": {
      "item": "thermal:enderium_plate"
    },
    "D": {
      "item": "extendedcrafting:luminessence"
    },
    "E": {
      "item": "minecraft:nether_star"
    },
    "F": {
      "item": "minecraft:diamond"
    },
    "G": {
      "item": "minecraft:obsidian"
    },
    "H": {
      "item": "minecraft:diamond_block"
    },
    "I": {
      "item": "minecraft:comparator"
    }
  },
  "result": {
    "item": 'hostilenetworks:loot_fabricator',
    "count": 1
  },
});
  
  //deep learner
    event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 1,
  "pattern": [
    "ABA",
    "CDC",
    "AEA"
  ],
  "key": {
    "A": {
      "item": "minecraft:glass_pane"
    },
    "B": {
      "item": "minecraft:comparator"
    },
    "C": {
      "item": "minecraft:repeater"
    },
    "D": {
      "item": "minecraft:ghast_tear"
    },
    "E": {
      "item": "fluxnetworks:flux_core"
    }
  },
  "result": {
    "item": 'hostilenetworks:deep_learner',
    "count": 1
  },
});
  
  //model framework
     event.shaped('hostilenetworks:blank_data_model', [
    'TCQ',
    'ILW',
    'EHP'
  ], {
    T: 'fluxnetworks:flux_core',
    C: 'minecraft:repeater',
    Q: 'fluxnetworks:flux_core',
    I: 'mekanism:alloy_atomic',
    L: 'minecraft:wither_skeleton_skull',
    W: 'mekanism:alloy_atomic',
    E: 'fluxnetworks:flux_core',
    H: '#forge:plates/gold',
    P: 'fluxnetworks:flux_core'
  });
  
	
})