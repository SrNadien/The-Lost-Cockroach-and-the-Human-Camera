ServerEvents.recipes(event => {
  //Powah
  //
  // ATM-Vibranium Ingot
    event.custom({
      type: 'powah:energizing',
      ingredients: [
        Ingredient.of('allthemodium:allthemodium_ingot').toJson(),
        Ingredient.of('allthemodium:piglich_heart').toJson(),
        Ingredient.of('allthemodium:vibranium_ingot').toJson()
      ],
      energy: '1000000000',
    result: Item.of('allthemodium:vibranium_allthemodium_alloy_ingot').toJson()
    }).id(`kubejs:energizing/allthemodium_vibranium_allthemodium_alloy_ingot`)
    
  // ATM-Vibranium Block
    event.custom({
      type: 'powah:energizing',
      ingredients: [
        Ingredient.of('allthemodium:allthemodium_block').toJson(),
        Ingredient.of('botania:terrasteel_block').toJson(),
        Ingredient.of('allthemodium:vibranium_block').toJson()
      ],
      energy: '8100000000',
      result: Item.of('allthemodium:vibranium_allthemodium_alloy_block').toJson()
    }).id(`kubejs:energizing/allthemodium_vibranium_allthemodium_alloy_block`)
  
  // ATM-Unobtainium Ingot
    event.custom({
      type: 'powah:energizing',
      ingredients: [
        Ingredient.of('allthemodium:allthemodium_ingot').toJson(),
        Ingredient.of('allthemodium:piglich_heart').toJson(),
        Ingredient.of('allthemodium:unobtainium_ingot').toJson()
      ],
      energy: '1000000000',
      result: Item.of('allthemodium:unobtainium_allthemodium_alloy_ingot').toJson()
    }).id(`kubejs:energizing/allthemodium_unobtainium_allthemodium_alloy_ingot`)
    
  // ATM-Unobtainium Block
    event.custom({
      type: 'powah:energizing',
      ingredients: [
        Ingredient.of('allthemodium:allthemodium_block').toJson(),
        Ingredient.of('botania:terrasteel_block').toJson(),
        Ingredient.of('allthemodium:unobtainium_block').toJson()
      ],
      energy: '8100000000',
      result: Item.of('allthemodium:unobtainium_allthemodium_alloy_block').toJson()
    }).id(`kubejs:energizing/allthemodium_unobtainium_allthemodium_alloy_block`)
    
  // Unobtainium-Vibranium Ingot
    event.custom({
      type: 'powah:energizing',
      ingredients: [
        Ingredient.of('allthemodium:vibranium_ingot').toJson(),
        Ingredient.of('allthemodium:piglich_heart').toJson(),
        Ingredient.of('allthemodium:unobtainium_ingot').toJson()
      ],
      energy: '1000000000',
      result: Item.of('allthemodium:unobtainium_vibranium_alloy_ingot').toJson()
    }).id(`kubejs:energizing/allthemodium_unobtainium_vibranium_alloy_ingot`)
  
  // Allthemodium ingot
  event.custom({
    type: 'powah:energizing',
    ingredients: [
      Ingredient.of('powah:capacitor_nitro'),
      Ingredient.of('kubejs:patricio'),
      Ingredient.of('botania:manasteel_ingot')
    ],
    energy: '8100000000',
    result: Item.of('allthemodium:allthemodium_ingot').toJson()
  }).id(`kubejs:energizing/allthemodium_ingot`)

    // Sword, All recipes are Top-middle and go clockwise
    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": true,
      "output": Item.of("allthemodium:alloy_sword").toJson(),
      "pedestalItems": [
      {"item": Ingredient.of('#forge:ingots/unobtainium').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/allthemodium').toJson()},
        {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium').toJson()},	  
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()}
      ],
      "reagent": [Item.of("allthemodium:allthemodium_sword").toJson()],
      "sourceCost": 5000
    }).id('kubejs:allthemodium/alloy_sword')
    
      // Pickaxe
    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": true,
      "output": Item.of("allthemodium:alloy_pick").toJson(),
      "pedestalItems": [
      {"item": Ingredient.of('#forge:ingots/unobtainium').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/allthemodium').toJson()},
        {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium').toJson()},	  
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()}
      ],
      "reagent": [Item.of("allthemodium:allthemodium_pickaxe").toJson()],
      "sourceCost": 5000
    }).id('kubejs:allthemodium/alloy_pick')
    
        // Shovel
    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": true,
      "output": Item.of("allthemodium:alloy_shovel").toJson(),
      "pedestalItems": [
      {"item": Ingredient.of('#forge:ingots/unobtainium').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/allthemodium').toJson()},
        {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium').toJson()},	  
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()}
      ],
      "reagent": [Item.of("allthemodium:allthemodium_shovel").toJson()],
      "sourceCost": 5000
    }).id('kubejs:allthemodium/alloy_shovel')
   
       // Axe
    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": true,
      "output": Item.of("allthemodium:alloy_axe").toJson(),
      "pedestalItems": [
      {"item": Ingredient.of('#forge:ingots/unobtainium').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/unobtainium_allthemodium_alloy').toJson()},
        {"item": Ingredient.of('#forge:ingots/allthemodium').toJson()},
        {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium_allthemodium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/vibranium').toJson()},	  
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()},
      {"item": Ingredient.of('#forge:ingots/unobtainium_vibranium_alloy').toJson()}
      ],
      "reagent": [Item.of("allthemodium:allthemodium_axe").toJson()],
      "sourceCost": 5000
    }).id('kubejs:allthemodium/alloy_axe')
  
  
        // Paxel
    event.custom({
      "type": "ars_nouveau:enchanting_apparatus",
      "keepNbtOfReagent": true,
      "output": Item.of("allthemodium:alloy_paxel").toJson(),
      "pedestalItems": [
      {"item": Ingredient.of('allthemodium:alloy_sword').toJson()},
      {"item": Ingredient.of('allthemodium:alloy_pick').toJson()},
      {"item": Ingredient.of('allthemodium:alloy_shovel').toJson()},
        {"item": Ingredient.of('allthemodium:alloy_axe').toJson()},
      ],
      "reagent": 'mekanismtools:refined_obsidian_paxel',
      "sourceCost": 10000
    }).id('kubejs:allthemodium/alloy_paxel')   


   //Botania
//
//allthemodium-vibranium ingot
  event.custom({
    "type": "botania:terra_plate",
    "ingredients": [
      {
        "item": "allthemodium:allthemodium_ingot"
      },
      {
        "item": "allthemodium:piglich_heart"
      },
      {
       "item": "allthemodium:vibranium_ingot"
      }
    ],
    "mana": 1000000,
    "result": {
      "item": "allthemodium:vibranium_allthemodium_alloy_ingot"
    }
  }).id(`kubejs:terra/allthemodium_vibranium_allthemodium_alloy_ingot`)

//allthemodium-unobtainium ingot
  event.custom({
    "type": "botania:terra_plate",
    "ingredients": [
      {
        "item": "allthemodium:allthemodium_ingot"
      },
      {
        "item": "allthemodium:piglich_heart"
      },
      {
       "item": "allthemodium:unobtainium_ingot"
      }
    ],
    "mana": 1000000,
    "result": {
      "item": "allthemodium:unobtainium_allthemodium_alloy_ingot"
    }
  }).id(`kubejs:terra/allthemodium_unobtainium_allthemodium_alloy_ingot`)

//unobtainium-vibranium ingot
  event.custom({
    "type": "botania:terra_plate",
    "ingredients": [
      {
        "item": "allthemodium:unobtainium_ingot"
      },
      {
        "item": "allthemodium:piglich_heart"
      },
      {
       "item": "allthemodium:vibranium_ingot"
      }
    ],
    "mana": 1000000,
    "result": {
      "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
    }
  }).id(`kubejs:terra/allthemodium_unobtainium_vibranium_alloy_ingot`)

//allthemodium-vibranium block
  event.custom({
    "type": "botania:terra_plate",
    "ingredients": [
      {
        "item": "allthemodium:allthemodium_block"
      },
      {
        "item": "botania:terrasteel_block"
      },
      {
       "item": "allthemodium:vibranium_block"
      }
    ],
    "mana": 8100000,
    "result": {
      "item": "allthemodium:vibranium_allthemodium_alloy_block"
    }
  }).id(`kubejs:terra/allthemodium_vibranium_allthemodium_alloy_block`)

//allthemodium-unobtainium block
  event.custom({
    "type": "botania:terra_plate",
    "ingredients": [
      {
        "item": "allthemodium:allthemodium_block"
      },
      {
        "item": "botania:terrasteel_block"
      },
      {
       "item": "allthemodium:unobtainium_block"
      }
    ],
    "mana": 8100000,
    "result": {
      "item": "allthemodium:unobtainium_allthemodium_alloy_block"
    }
  }).id(`kubejs:terra/allthemodium_unobtainium_allthemodium_alloy_block`)

//unobtainium-vibranium block
  event.custom({
    "type": "botania:terra_plate",
    "ingredients": [
      {
        "item": "allthemodium:unobtainium_block"
      },
      {
        "item": "botania:terrasteel_block"
      },
      {
       "item": "allthemodium:vibranium_block"
      }
    ],
    "mana": 8100000,
    "result": {
      "item": "allthemodium:unobtainium_vibranium_alloy_block"
    }
  }).id(`kubejs:terra/allthemodium_unobtainium_vibranium_alloy_block`)



  })
  