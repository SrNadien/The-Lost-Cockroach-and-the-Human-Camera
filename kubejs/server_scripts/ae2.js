ServerEvents.recipes(event => {
	
	//eliminados
	event.remove({output:'ae2:printed_calculation_processor'})
	event.remove({output:'ae2:printed_silicon'})
	event.remove({output:'ae2:printed_engineering_processor'})
	event.remove({output:'ae2:printed_logic_processor'})
	event.remove({output:'ae2:engineering_processor'})
	event.remove({output:'ae2:calculation_processor'})
	event.remove({output:'ae2:logic_processor'})
	event.remove({output:'ae2:controller'})
	event.remove({output:'aeinfinitybooster:infinity_card'})
	event.remove({output:'aeinfinitybooster:dimension_card'})
  event.remove({output:'ae2:cell_component_4k'})
	event.remove({output:'ae2:cell_component_1k'})
	event.remove({output:'ae2:cell_component_16k'})
	event.remove({output:'ae2:cell_component_64k'})
	event.remove({output:'ae2:cell_workbench'})
	event.remove({output:'ae2:tiny_tnt'})
	event.remove({output:'ae2:matter_cannon'})
	event.remove({output:'ae2:256k_crafting_storage'})
  event.remove({ id: "ae2:network/blocks/inscribers" });
	
	
  // silicona 
  event.custom({
  "type": "create:deploying",
  "ingredients": [
    {
      "item": "ae2:silicon"
    },
    {
      "item": "ae2:silicon_press"
    }
  ],
  "keepHeldItem": true,
  "results": [
    {
      "item": "ae2:printed_silicon"
    }
  ],
});

  event.custom({
  "type": "create:deploying",
  "ingredients": [
    {
      "item": "enderio:silicon"
    },
    {
      "item": "ae2:silicon_press"
    }
  ],
  "keepHeldItem": true,
  "results": [
    {
      "item": "ae2:printed_silicon"
    }
  ],
});



  //oro
  event.custom({
  "type": "create:deploying",
  "ingredients": [
    {
      "item": "minecraft:gold_ingot"
    },
    {
      "item": "ae2:logic_processor_press"
    }
  ],
  "keepHeldItem": true,
  "results": [
    {
      "item": "ae2:printed_logic_processor"
    }
  ],
});


   //diamante
     event.custom({
  "type": "create:deploying",
  "ingredients": [
    {
      "item": "minecraft:diamond"
    },
    {
      "item": "ae2:engineering_processor_press"
    }
  ],
  "keepHeldItem": true,
  "results": [
    {
      "item": "ae2:printed_engineering_processor"
    }
  ],
});


  //calculo
    event.custom({
  "type": "create:deploying",
  "ingredients": [
    {
      "item": "#ae2:all_certus_quartz"
    },
    {
      "item": "ae2:calculation_processor_press"
    }
  ],
  "keepHeldItem": true,
  "results": [
    {
      "item": "ae2:printed_calculation_processor"
    }
  ],
});


  //procesador de oro
   event.custom({
  "type": "create:deploying",
  "ingredients": [
    {
      "item": "ae2:printed_logic_processor"
    },
    {
      "item": "minecraft:redstone"
    }
  ],
  "keepHeldItem": true,
  "results": [
    {
      "item": "ae2:logic_processor"
    }
  ],
});


   
   //procesador de diamante
      event.custom({
  "type": "create:deploying",
  "ingredients": [
    {
      "item": "ae2:printed_engineering_processor"
    },
    {
      "item": "minecraft:redstone"
    }
  ],
  "keepHeldItem": true,
  "results": [
    {
      "item": "ae2:engineering_processor"
    }
  ],
});




   //procesador de calculo
      event.custom({
  "type": "create:deploying",
  "ingredients": [
    {
      "item": "ae2:printed_calculation_processor"
    },
    {
      "item": "minecraft:redstone"
    }
  ],
  "keepHeldItem": true,
  "results": [
    {
      "item": "ae2:calculation_processor"
    }
  ],
});


      //controlador
    	event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,
        "pattern": [
          "AABAA",
          "ACDCA",
          "EDFDE",
          "ACDCA",
          "AAGAA"
        ],
        "key": {
          "A": {
            "item": "#ae2:all_certus_quartz"
          },
          "B": {
            "item": "pneumaticcraft:capacitor"
          },
          "C": {
            "item": "ae2:smooth_sky_stone_block"
          },
          "D": {
            "item": "ae2:fluix_crystal"
          },
          "E": {
            "item": "mekanism:module_base"
          },
          "F": {
            "item": "ae2:engineering_processor"
          },
          "G": {
            "item": "pneumaticcraft:transistor"
          }
        },
        "result": {
          "item": 'ae2:controller',
          "count": 8
        },
      });


      //componente 1k
  event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 2,
    "pattern": [
      "ABABA",
      "BCDCB",
      "AEFEA",
      "BCECB",
      "ABABA"
    ],
    "key": {
      "A": {
        "item": "#ae2:all_certus_quartz"
      },
      "B": {
        "item": "refinedstorage:processor_binding"
      },
      "C": {
        "item": "xnet:netcable_yellow"
      },
      "D": {
        "item": "ae2:calculation_processor"
      },
      "E": {
        "item": "mekanism:ultimate_control_circuit"
      },
      "F": {
        "item": "pneumaticcraft:transistor"
      }
    },
    "result": {
      "item": 'ae2:cell_component_1k',
      "count": 6
    },
  });
    
    
    
    //componente 4k
    event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 2,
    "pattern": [
      "ABABA",
      "BCDCB",
      "AEFEA",
      "BCECB",
      "ABABA"
    ],
    "key": {
      "A": {
        "item": "#ae2:all_certus_quartz"
      },
      "B": {
        "item": "refinedstorage:processor_binding"
      },
      "C": {
        "item": "xnet:netcable_yellow"
      },
      "D": {
        "item": "ae2:calculation_processor"
      },
      "E": {
        "item": "ae2:cell_component_1k"
      },
      "F": {
        "item": "pneumaticcraft:transistor"
      }
    },
    "result": {
      "item": 'ae2:cell_component_4k',
      "count": 4
    },
  });
    
       //componente 16k
       event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 2,
    "pattern": [
      "ABABA",
      "BCDCB",
      "AEFEA",
      "BCECB",
      "ABABA"
    ],
    "key": {
      "A": {
        "item": "#ae2:all_certus_quartz"
      },
      "B": {
        "item": "refinedstorage:processor_binding"
      },
      "C": {
        "item": "industrialforegoing:laser_lens9"
      },
      "D": {
        "item": "ae2:calculation_processor"
      },
      "E": {
        "item": "ae2:cell_component_4k"
      },
      "F": {
        "item": "pneumaticcraft:transistor"
      }
    },
    "result": {
      "item": 'ae2:cell_component_16k',
      "count": 4
    },
  });
    
    
         //componente 64k
       event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 2,
    "pattern": [
      "ABABA",
      "BCDCB",
      "AEFEA",
      "BCECB",
      "ABABA"
    ],
    "key": {
      "A": {
        "item": "#ae2:all_certus_quartz"
      },
      "B": {
        "item": "refinedstorage:processor_binding"
      },
      "C": {
        "item": "evilcraft:blood_orb_empty"
      },
      "D": {
        "item": "ae2:calculation_processor"
      },
      "E": {
        "item": "ae2:cell_component_4k"
      },
      "F": {
        "item": "pneumaticcraft:transistor"
      }
    },
    "result": {
      "item": 'ae2:cell_component_64k',
      "count": 2
    },
  });


  //perfecto ciernes
  event.custom({
    "type": "ae2:transform",
    "circumstance": {
      "type": "fluid",
      "fluid": "pneumaticcraft:kerosene"
    },
    "ingredients": [
      {
        "item": "ae2:charged_certus_quartz_crystal"
      },
      {
        "item": "ae2:flawed_budding_quartz"
      }
    ],
    "result": {
      "item": "ae2:flawless_budding_quartz"
    }
  })

  
})