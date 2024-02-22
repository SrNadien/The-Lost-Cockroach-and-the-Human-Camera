ServerEvents.recipes(event => {
  event.remove({ id: 'aeinfinitybooster:infinity_card' })
  event.remove({ id: 'aeinfinitybooster:dimension_card' })



       //infinity card booster
       event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,
        "pattern": [
          "AABAA",
          "CBDBC",
          "BDEDB",
          "CBDBC",
          "FFBFF"
        ],
        "key": {
          "A": {
            "item": "minecraft:ender_eye"
          },
          "B": {
            "item": "ae2:wireless_booster"
          },
          "C": {
            "item": "minecraft:nether_star"
          },
          "D": {
            "item": "extendedcrafting:ender_ingot"
          },
          "E": {
            "item": "kubejs:patricio"
          },
          "F": {
            "item": "minecraft:netherite_ingot"
          }
        },
        "result": {
          "item": 'aeinfinitybooster:infinity_card',
          "count": 2
        },
      });
        
        
        
        //infinity dimensional card
        event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 2,
        "pattern": [
          "AABAA",
          "CBDBC",
          "BDEDB",
          "CBDBC",
          "FFBFF"
        ],
        "key": {
          "A": {
            "item": "minecraft:ender_eye"
          },
          "B": {
            "item": "aeinfinitybooster:infinity_card"
          },
          "C": {
            "item": "extendedcrafting:ender_star"
          },
          "D": {
            "item": "extendedcrafting:ender_ingot"
          },
          "E": {
            "item": "kubejs:patricio"
          },
          "F": {
            "item": "minecraft:netherite_ingot"
          }
        },
        "result": {
          "item": 'aeinfinitybooster:dimension_card',
          "count": 1
        },
      });




})