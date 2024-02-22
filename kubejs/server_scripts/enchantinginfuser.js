ServerEvents.recipes(event => {

    //eliminadas
    event.remove({ output:'enchantinginfuser:enchanting_infuser' })
    event.remove({ output:'enchantinginfuser:advanced_enchanting_infuser' })



    //mesa de encantamientos avanzada basica
    event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 1000000,
        "input": {
          "item": "minecraft:enchanting_table"
        },
        "ingredients": [
          {
            "item": "allthecompressed:gold_block_3x"
          },
          {
            "item": "allthecompressed:netherite_block_1x"
          },
          {
            "item": "minecraft:amethyst_block"
          },
          {
            "item": "kubejs:enchanted_mechanism"
          },
          {
            "item": "minecraft:amethyst_block"
          },
          {
            "item": "allthecompressed:netherite_block_1x"
          },
          {
            "item": "allthecompressed:netherite_block_1x"
          },
          {
            "item": "minecraft:amethyst_block"
          },
          {
            "item": "endrem:evil_eye"
          },
          {
            "item": "create:honeyed_apple"
          },
          {
            "item": "kubejs:enchanted_mechanism"
          },
          {
            "item": "minecraft:amethyst_block"
          },
          {
            "item": "allthecompressed:netherite_block_1x"
          },
          {
            "item": "allthecompressed:gold_block_3x"
          },
          {
            "item": "create:experience_block"
          },
          {
            "item": "minecraft:experience_bottle"
          }
        ],
        "result": {
          "item": 'enchantinginfuser:enchanting_infuser',
          "count": 1
        }
      })




      //mesa de encantamientos avanzda ultima
      event.custom({
        "type": "extendedcrafting:combination",
        "powerCost": 1000000,
        "input": {
          "item": "enchantinginfuser:enchanting_infuser"
        },
        "ingredients": [
          {
            "item": "minecraft:enchanted_golden_apple"
          },
          {
            "item": "ars_nouveau:glyph_rune"
          },
          {
            "item": "powah:nitro_crystal_block"
          },
          {
            "item": "powah:nitro_crystal_block"
          },
          {
            "item": "mythicbotany:alfsteel_block"
          },
          {
            "item": "minecraft:enchanted_golden_apple"
          },
          {
            "item": "mythicbotany:fimbultyr_tablet"
          },
          {
            "item": "kubejs:enchanted_mechanism"
          },
          {
            "item": "kubejs:enchanted_mechanism"
          },
          {
            "item": "mythicbotany:asgard_rune"
          },
          {
            "item": "minecraft:enchanted_golden_apple"
          },
          {
            "item": "mythicbotany:alfsteel_block"
          },
          {
            "item": "powah:nitro_crystal_block"
          },
          {
            "item": "powah:nitro_crystal_block"
          },
          {
            "item": "mythicbotany:helheim_rune"
          },
          {
            "item": "minecraft:enchanted_golden_apple"
          }
        ],
        "result": {
          "item": 'enchantinginfuser:advanced_enchanting_infuser',
          "count": 1
        }
      })
	
})