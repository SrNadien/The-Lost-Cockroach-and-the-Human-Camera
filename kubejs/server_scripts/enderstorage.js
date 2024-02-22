//ender stirage by SrNadien
ServerEvents.recipes(event => {
	
	//eliminadas
	event.remove({output:'enderchests:ender_chest'})
  event.remove({output:'endertanks:ender_tank'})
	event.remove({output:'enderchests:ender_bag'})
  event.remove({output:'endertanks:ender_bucket'})
	
	
	//ender chest
	event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 1,
  "pattern": [
    "ABA",
    "BCB",
    "ABA"
  ],
  "key": {
    "A": {
      "item": "minecraft:blaze_rod"
    },
    "B": {
      "item": "allthecompressed:obsidian_1x"
    },
    "C": {
      "item": "minecraft:ender_chest"
    }
  },
  "result": {
    "item": 'enderchests:ender_chest',
    "count": 1
  },
});
	
    //ender tank
	event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 1,
  "pattern": [
    "ABA",
    "CDE",
    "AFA"
  ],
  "key": {
    "A": {
      "item": "allthecompressed:obsidian_1x"
    },
    "B": {
      "item": "minecraft:cauldron"
    },
    "C": {
      "item": "enderchests:ender_bag"
    },
    "D": {
      "type": "forge:nbt",
      "item": "mekanism:ultimate_fluid_tank",
      "count": 1,
      "nbt": "{BlockEntityTag:{FluidTanks:[{Tank:0b,stored:{Amount:256000,FluidName:\"minecraft:water\"}}],ForgeCaps:{},Items:[],activeState:0b,componentFrequency:{Security:{name:\"Security\",owner:[I;2118518208,-1698609149,-1383017808,204096419],publicFreq:1b}},componentSecurity:{owner:[I;2118518208,-1698609149,-1383017808,204096419],securityMode:0},currentRedstone:15,editMode:0,id:\"mekanism:ultimate_fluid_tank\",redstone:0b,updateDelay:0},display:{Lore:[\u0027\"(+NBT)\"\u0027]},mekData:{FluidTanks:[{Tank:0b,stored:{Amount:256000,FluidName:\"minecraft:water\"}}],bucketMode:1b,editMode:0,owner:[I;2118518208,-1698609149,-1383017808,204096419]}}"
    },
    "E": {
      "item": "enderchests:ender_chest"
    },
    "F": {
      "item": "minecraft:bucket"
    }
  },
  "result": {
    "item": 'endertanks:ender_tank',
    "count": 1
  },
});



  //ender bucket
	event.custom({
    "type": "extendedcrafting:shaped_table",
    "tier": 1,
    "pattern": [
      "ABA",
      "CDE",
      "AFA"
    ],
    "key": {
      "A": {
        "item": "ae2:ender_dust"
      },
      "B": {
        "item": "minecraft:cauldron"
      },
      "C": {
        "item": "enderchests:ender_bag"
      },
      "D": {
        "type": "forge:nbt",
        "item": "mekanism:ultimate_fluid_tank",
        "count": 1,
        "nbt": "{BlockEntityTag:{FluidTanks:[{Tank:0b,stored:{Amount:256000,FluidName:\"minecraft:water\"}}],ForgeCaps:{},Items:[],activeState:0b,componentFrequency:{Security:{name:\"Security\",owner:[I;2118518208,-1698609149,-1383017808,204096419],publicFreq:1b}},componentSecurity:{owner:[I;2118518208,-1698609149,-1383017808,204096419],securityMode:0},currentRedstone:15,editMode:0,id:\"mekanism:ultimate_fluid_tank\",redstone:0b,updateDelay:0},display:{Lore:[\u0027\"(+NBT)\"\u0027]},mekData:{FluidTanks:[{Tank:0b,stored:{Amount:256000,FluidName:\"minecraft:water\"}}],bucketMode:1b,editMode:0,owner:[I;2118518208,-1698609149,-1383017808,204096419]}}"
      },
      "E": {
        "item": "enderchests:ender_chest"
      },
      "F": {
        "item": "minecraft:bucket"
      }
    },
    "result": {
      "item": 'endertanks:ender_bucket',
      "count": 1
    },
  });


     //ender pouch
	 event.custom({
  "type": "extendedcrafting:shaped_table",
  "tier": 1,
  "pattern": [
    "ABA",
    "BCB",
    "ADA"
  ],
  "key": {
    "A": {
      "item": "ae2:ender_dust"
    },
    "B": {
      "item": "minecraft:leather"
    },
    "C": {
      "type": "forge:nbt",
      "item": "sophisticatedbackpacks:backpack",
      "count": 1,
      "nbt": "{contentsUuid:[I;518524986,1097680231,-1384628755,1867501644],inventorySlots:27,renderInfo:{upgradeItems:[{Count:1b,id:\"minecraft:air\",tag:{}}]},upgradeSlots:1}"
    },
    "D": {
      "item": "allthecompressed:obsidian_1x"
    }
  },
  "result": {
    "item": 'enderchests:ender_bag',
    "count": 1
  },
});
})