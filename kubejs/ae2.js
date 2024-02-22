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
      "item": "ae2:certus_quartz_crystal"
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
})