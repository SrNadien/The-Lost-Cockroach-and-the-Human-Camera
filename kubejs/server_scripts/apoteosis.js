//apotheosis creadas por srnadien
ServerEvents.recipes(event => {


   //eliminadas
   event.remove({ output: 'apotheosis:reforging_table' })
   event.remove({ output: 'apotheosis:salvaging_table' })
   event.remove({ output: 'apotheosis:scrap_tome' })
   event.remove({id:'apotheosis:fletching/iron_mining_arrow'})
   event.remove({id:'apotheosis:fletching/diamond_mining_arrow'})
   event.remove({id:'apotheosis:fletching/explosive_arrow'})
   
   
   
   //mesa salvaje 
   event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAABCBAAA",
    "AAAACAAAA",
    "AAAADAAAA",
    "EAAFFFAAG",
    "HHDFIFDHH",
    "EAAFFFAAG",
    "AAAADAAAA",
    "AAAACAAAA",
    "AAAJCJAAA"
  ],
  "key": {
    "A": {
      "item": "apotheosis:gem_dust"
    },
    "B": {
      "item": "alltheores:brass_plate"
    },
    "C": {
      "item": "naturesaura:infused_iron"
    },
    "D": {
      "item": "solarpanels:improved_energy_tablet"
    },
    "E": {
      "item": "thermal:netherite_plate"
    },
    "F": {
      "item": "allthecompressed:cobblestone_block_4x"
    },
    "G": {
      "item": "thermal_extra:dragonsteel_plate"
    },
    "H": {
      "item": "botania:mana_pearl"
    },
    "I": {
      "item": "ars_nouveau:drygmy_shard"
    },
    "J": {
      "item": "thermal:enderium_plate"
    }
  },
  "result": {
    "item": 'apotheosis:salvaging_table',
    "count": 1
  },
});


  //mesa De reforma
  event.custom({
  "type": "extendedcrafting:shaped_table",
  "pattern": [
    "AAAABAAAA",
    "ACCCDCCCA",
    "AEEEDEEEA",
    "AFGHIHGFA",
    "BDDIJIDDB",
    "AFKLILKFA",
    "AMMMDMMMA",
    "ACCCDCCCA",
    "AAAABAAAA"
  ],
  "key": {
    "A": {
      "item": "minecraft:nether_bricks"
    },
    "B": {
      "item": "minecraft:netherite_ingot"
    },
    "C": {
      "item": "apotheosis:infused_hellshelf"
    },
    "D": {
      "item": "extendedcrafting:enhanced_ender_ingot"
    },
    "E": {
      "item": "apotheosis:draconic_endshelf"
    },
    "F": {
      "item": "apotheosis:melonshelf"
    },
    "G": {
      "item": "enchantinginfuser:enchanting_infuser"
    },
    "H": {
      "item": "apotheosis:infused_seashelf"
    },
    "I": {
      "item": "apotheosis:gem_dust"
    },
    "J": {
      "item": "minecraft:enchanting_table"
    },
    "K": {
      "item": "enchantinginfuser:advanced_enchanting_infuser"
    },
    "L": {
      "item": "apotheosis:rectifier"
    },
    "M": {
      "item": "apotheosis:pearl_endshelf"
    }
  },
  "result": {
    "item": 'apotheosis:reforging_table',
    "count": 1
  },
});
})