//cofres By SrNadien
ServerEvents.recipes(event => {
	
	
	
	//eliminar
	event.remove({output:'industrialforegoing:machine_frame_pity'})



    //machine frame basic
    event.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBBBA",
        "BBCBCBB",
        "BCDDDCB",
        "BBDEDBB",
        "BCDDDCB",
        "BBCBCBB",
        "ABBBBBA"
      ],
      "key": {
        "A": {
          "item": "experienceobelisk:cognitive_alloy_block"
        },
        "B": {
          "item": "botania:manasteel_ingot"
        },
        "C": {
          "item": "alltheores:diamond_plate"
        },
        "D": {
          "item": "werewolves:magic_planks"
        },
        "E": {
          "item": "create:andesite_casing"
        }
      },
      "result": {
        "item": 'industrialforegoing:machine_frame_pity',
        "count": 4
      },
    }).id('kubejs:machineframesrn')
	
	

    //apatite ore
  event.custom({
    "type": "industrialforegoing:laser_drill_ore",
    "catalyst": {
      "item": "industrialforegoing:laser_lens3"
    },
    "output": {
      "item": "thermal:apatite_ore"
    },
    "pointer": 0,
    "rarity": [
      {
        "blacklist": {
          "type": "minecraft:worldgen/biome",
          "values": [
            "minecraft:the_end",
            "minecraft:the_void",
            "minecraft:small_end_islands",
            "minecraft:end_barrens",
            "minecraft:end_highlands",
            "minecraft:end_midlands"
          ]
        },
        "depth_max": 16,
        "depth_min": 5,
        "weight": 28,
        "whitelist": {}
      },
      {
        "blacklist": {
          "type": "minecraft:worldgen/biome",
          "values": [
            "minecraft:the_end",
            "minecraft:the_void",
            "minecraft:small_end_islands",
            "minecraft:end_barrens",
            "minecraft:end_highlands",
            "minecraft:end_midlands"
          ]
        },
        "depth_max": 255,
        "depth_min": 0,
        "weight": 4,
        "whitelist": {}
      }
    ]
  }).id('kubejs:srnaptite')




  //allthemodium ore
  event.custom({
    "type": "industrialforegoing:laser_drill_ore",
    "catalyst": {
      "item": "industrialforegoing:laser_lens4"
    },
    "output": {
      "item": "allthemodium:allthemodium_ore"
    },
    "pointer": 0,
    "rarity": [
      {
        "blacklist": {},
        "depth_max": 20,
        "depth_min": 1,
        "weight": 1,
        "whitelist": {
          "type": "minecraft:worldgen/biome",
          "values": [
            "minecraft:nether_wastes",
            "minecraft:basalt_deltas",
            "minecraft:warped_forest",
            "minecraft:crimson_forest",
            "minecraft:soul_sand_valley"
          ]
        }
      }
    ]
  }).id('kubejs:srnadienallthemodium')


    
})