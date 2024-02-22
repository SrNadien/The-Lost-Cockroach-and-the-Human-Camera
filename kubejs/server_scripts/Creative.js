ServerEvents.recipes(event => {


      event.recipes.createSequencedAssembly([ // start the recipe
      Item.of(Item.of('mekanism:creative_energy_cube', '{mekData:{componentConfig:{config0:{side0:1,side1:1,side2:1,side3:1,side4:1,side5:1}}}}')) // this is the item that will appear in JEI as the result
  ],'mekanism:ultimate_energy_cube',[
      event.recipes.createDeploying('solarpanels:creative_solar_element',['solarpanels:creative_solar_element','kubejs:star']),
      event.recipes.createDeploying('solarpanels:creative_solar_element',['kubejs:star','mekanism:module_gravitational_modulating_unit']),
      event.recipes.createDeploying('solarpanels:creative_solar_element',['kubejs:star','mekanismgenerators:fusion_reactor_frame']),
      event.recipes.createDeploying('solarpanels:creative_solar_element',['kubejs:star','solarpanels:photonic_solar_panel']),
      event.recipes.createCutting('solarpanels:creative_solar_element', 'solarpanels:creative_solar_element'),
      event.recipes.createFilling('solarpanels:creative_solar_element', [Fluid.of('mekanismgenerators:fusion_fuel', 1000), 'solarpanels:creative_solar_element']),
  ]).transitionalItem('solarpanels:creative_solar_element').loops(1) // set the transitional item and the loops (amount of repetitions)

 

        event.recipes.create.mechanical_crafting('create:creative_blaze_cake', [
          '     ',
          'AAAAA',
          'BCCCB',
          'BCDCB',
          ' BAB '
        ], {
          A: 'create:precision_mechanism',
          B: 'create:blaze_cake',
          C: 'create:experience_block',
          D: 'kubejs:star'

        })

        event.recipes.create.mechanical_crafting('ars_nouveau:creative_source_jar', [
          ' AAA ',
          'ABCDA',
          'AIHJA',
          'AEFGA',
          ' AAA '
        ], {
          A:'ars_nouveau:summon_focus', 
          B:'ars_nouveau:bookwyrm_charm', 
          C:'ars_nouveau:starbuncle_charm', 
          D:'ars_nouveau:whirlisprig_charm', 
          E:'ars_nouveau:wixie_charm', 
          F:'ars_nouveau:drygmy_charm', 
          G:'ars_nouveau:amethyst_golem_charm', 
          H:'kubejs:star', 
          I:'ars_nouveau:thread_spellpower', 
          J:'ars_nouveau:potion_melder'

        })

        event.recipes.create.mechanical_crafting('ae2:creative_energy_cell', [
          'BBAAABB',
          'BGCCCGB',
          'ACEDECA',
          'ACDFDCA',
          'ACEDECA',
          'BGCCCGB',
          'BBAAABB'
        ], {
          A:'ae2:singularity', 
          B:'ae2:spatial_anchor', 
          C: Item.of('megacells:mega_energy_cell', '{internalCurrentPower:1.28E7d,internalMaxPower:1.28E7d}'), 
          D:'ae2:quantum_ring', 
          E:'ae2additions:me_wireless_transceiver', 
          F:'kubejs:star',
          G:'ae2:not_so_mysterious_cube'

        })

        event.recipes.create.mechanical_crafting('mekanism:creative_chemical_tank', [
          'EEEEE',
          'EBCBE',
          'EBABE',
          'EDDDE',
          'FFFFF'
        ], {
          
          A:'kubejs:star',
          B:'mekanism:ultimate_chemical_tank', 
          C:'mekanism:pellet_antimatter', 
          D:'mekanism:ultimate_induction_provider', 
          E:'mekanism:hdpe_stick', 
          F:'mekanismgenerators:fusion_reactor_frame'

        })
        event.recipes.create.mechanical_crafting('mekanism:creative_fluid_tank', [
          'EEEEE',
          'EBCBE',
          'EBABE',
          'EDDDE',
          'FFFFF'
        ], {

          A:'kubejs:star',
          B:'mekanism:ultimate_fluid_tank', 
          C:'mekanism:pellet_antimatter', 
          D:'mekanism:ultimate_induction_provider', 
          E:'mekanism:hdpe_stick', 
          F:'mekanismgenerators:fusion_reactor_frame'

        })

         
        event.custom({
          "type": "extendedcrafting:shaped_table",
          "tier": 2,
          "pattern": [
            "AABAA",
            "ABCBA",
            "BDEDB",
            "BBDBA",
            "AABAA"
          ],
          "key": {
            "A": {
              "item": "solarpanels:creative_energy_tablet"
            },
            "B": {
              "type": "forge:nbt",
              "item": "botania:mana_tablet",
              "count": 1,
              "nbt": "{mana:500000}"
            },
            "C": {
              "item": "kubejs:star"
            },
            "D": {
              "item": "botania:pool_minecart"
            },
            "E": {
              "item": "botania:fabulous_pool"
            }
          },
          "result": {
            "item": 'botania:creative_pool',
            "count": 1
          }
        })


      })