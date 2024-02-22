let EccentricTome = Item.of('eccentrictome:tome',
  {
    "eccentrictome:mods": {
      allthemodium: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "extendedcrafting:guide" } } },
      ars_nouveau: { 0: { Count: 1, id: "ars_nouveau:worn_notebook" } },
      alchemistry: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "alchemistry:alchemistry_book" } } },
      extendedcrafting: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "alchemistry:alchemistry_book" } } },
      ftbquests: { 0: { Count: 1, id: "ftbquests:book" } },  
      industrialforegoing: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "industrialforegoing:industrial_foregoing" } } },
      apotheosis: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "apotheosis:apoth_chronicle" } } },
      pneumaticcraft: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "pneumaticcraft:book" } } },
      thermal: { 0: { Count: 1, id: "patchouli:guide_book", tag: { "patchouli:book": "thermal:guidebook" } } },
      applied_energistics: { 0: { Count: 1, id: "ae2:guide" } },
      rftoolsbase: { 0: { Count: 1, id: "rftoolsbase:manual" } },
      botania: { 0: { Count: 1, id: "botania:lexicon" } },
      cooking_for_Blockheds: { 0: { Count: 1, id: "cookingforblockheads:no_filter_edition" } },
      evilcraft: { 0: { Count: 1, id: "evilcraft:origins_of_darkness" } }
  }
}
)

ServerEvents.recipes(event => {
  event.shapeless(EccentricTome, ['eccentrictome:tome', 'minecraft:stick']).id('kubejs:full_tome') 
})