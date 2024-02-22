ServerEvents.recipes(event => {
	
	//eliminadas
	

 //casco infinito
 event.recipes.create.mechanical_crafting('avaritia:infinity_armor_helmet', [
  "  NNNNN  ",
  " NIIIIIN ",
  " N XIX N ",
  " NIIIIIN ",
  " NIIIIIN ",
  " NI I IN "
  ], {
    I: 'avaritia:infinity_ingot',
    N: 'avaritia:neutronium_ingot',
    X: 'avaritia:infinity_catalyst'
  })


//pechera infinita
event.recipes.create.mechanical_crafting('avaritia:infinity_armor_chestplate', [
  " NN   NN ",
  "NNN   NNN",
  "NNN   NNN",
  " NIIIIIN ",
  " NIIXIIN ",
  " NIIIIIN ",
  " NIIIIIN ",
  " NIIIIIN ",
  "  NNNNN  "
  ], {
    I: 'avaritia:infinity_ingot',
    N: 'avaritia:neutronium_ingot',
    X: 'avaritia:infinity_catalyst'
  })	


  //pantalones infinitos
  event.recipes.create.mechanical_crafting('avaritia:infinity_armor_leggings', [
    "NNNNNNNNN",
    "NIIIXIIIN",
    "NINNXNNIN",
    "NIN   NIN",
    "NCN   NCN",
    "NIN   NIN",
    "NIN   NIN",
    "NIN   NIN",
    "NNN   NNN"
    ], {
      C: 'avaritia:crystal_matrix_ingot',
      I: 'avaritia:infinity_ingot',
      N: 'avaritia:neutronium_ingot',
      X: 'avaritia:infinity_catalyst'
    })


    //infinity boots
    event.recipes.create.mechanical_crafting('avaritia:infinity_armor_boots', [
      " NNN NNN ",
      " NIN NIN ",
      " NIN NIN ",
      "NNIN NINN",
      "NIIN NIIN",
      "NNNN NNNN"
      ], {
        I: 'avaritia:infinity_ingot',
        N: 'avaritia:neutronium_ingot'
      })


      //espada del cosmos
      event.recipes.create.mechanical_crafting('avaritia:swordofthe_cosmos', [
        "       II",
        "      III",
        "     III ",
        "    III  ",
        " C III   ",
        "  CII    ",
        "  NC     ",
        " N  C    ",
        "X        "
        ], {
          C: 'avaritia:crystal_matrix_ingot',
          I: 'avaritia:infinity_ingot',
          N: 'avaritia:neutronium_ingot',
          X: 'avaritia:infinity_catalyst'
        })




       //skullfire
       event.recipes.create.mechanical_crafting('avaritia:skullfire_sword', [
        "       IX",
        "      IXI",
        "     IXI ",
        "    IXI  ",
        " B IXI   ",
        "  BXI    ",
        "  WB     ",
        " W  B    ",
        "D        "
        ], {
          B: 'minecraft:bone',
          D: 'minecraft:nether_star',
          I: 'avaritia:infinity_ingot',
          W: '#minecraft:logs',
          X: 'minecraft:blaze_powder'
        })



       //arco multidisparo
       event.recipes.create.mechanical_crafting('avaritia:longbowofthe_heavens', [
        "   II",
        "  I W",
        " I  W",
        "I   W",
        "X   W",
        "I   W",
        " I  W",
        "  I W",
        "   II"
        ], {
          X: 'avaritia:infinity_catalyst',
          I: 'avaritia:infinity_ingot',
          W: 'minecraft:white_wool'
        })



        //destructor de mundos
        event.recipes.create.mechanical_crafting(Item.of('avaritia:world_breaker', '{Damage:0}').enchant('minecraft:fortune', 10), [
          " IIIIIII ",
          "IIIIXIIII",
          "II  N  II",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    ",
          "    N    "
          ], {
            I: 'avaritia:infinity_ingot',
            N: 'avaritia:neutronium_ingot',
            X: 'avaritia:infinity_catalyst'
          })



          //pala planetaria
          event.recipes.create.mechanical_crafting('avaritia:planet_eater', [
            "      III",
            "     IIXI",
            "      III",
            "     N I ",
            "    N    ",
            "   N     ",
            "  N      ",
            " N       ",
            "N        "
            ], {
              I: 'avaritia:infinity_ingot',
              N: 'avaritia:neutronium_ingot',
              X: 'avaritia:infinity_catalyst'
            })


            //hacha de la naturaleza
            event.recipes.create.mechanical_crafting('avaritia:natures_ruin', [
              "   I   ",
              "  IIIII",
              "  IIXI ",
              "   IN  ",
              "    N  ",
              "    N  ",
              "    N  ",
              "    N  ",
              "    N  "
              ], {
                I: 'avaritia:infinity_ingot',
                N: 'avaritia:neutronium_ingot',
                X: 'avaritia:infinity_catalyst'
              })


              //hacha del la tierra verde
              event.recipes.create.mechanical_crafting('avaritia:hoeofthe_green_earth', [
                "     N ",
                "   IIII",
                "  IIIII",
                "  I  XI",
                "     N ",
                "     N ",
                "     N ",
                "     N ",
                "     N "
                ], {
                  I: 'avaritia:infinity_ingot',
                  N: 'avaritia:neutronium_ingot',
                  X: 'avaritia:infinity_catalyst'
                })




                //albondigas cosmicas
                event.recipes.createMechanicalCrafting(
                  "avaritia:cosmic_meatballs",
                  ["ABCDEFGHI", "JKLM     "],
                  {
                    A: {
                      item: "minecraft:porkchop",
                    },
                    B: {
                      item: "minecraft:beef",
                    },
                    C: {
                      item: "minecraft:mutton",
                    },
                    D: {
                      item: "minecraft:cod",
                    },
                    E: {
                      item: "minecraft:salmon",
                    },
                    F: {
                      item: "minecraft:tropical_fish",
                    },
                    G: {
                      item: "minecraft:pufferfish",
                    },
                    H: {
                      item: "minecraft:rabbit",
                    },
                    I: {
                      item: "minecraft:chicken",
                    },
                    J: {
                      item: "minecraft:rotten_flesh",
                    },
                    K: {
                      item: "minecraft:spider_eye",
                    },
                    L: {
                      item: "minecraft:egg",
                    },
                    M: {
                      item: "avaritia:neutron_nugget",
                    },
                  }
                );



                //estofado ultimo
                event.recipes.createMechanicalCrafting(
                  "avaritia:ultimate_stew",
                  [
                    "ABCDEFGHI",
                    "JKLMOPQRS",
                    "TUVWXYZab",
                    "cdefghijk",
                    "lmnopqrst",
                    "uvwxyz123",
                    "45       ",
                  ],
                  {
                    A: {
                      item: "minecraft:apple",
                    },
                    B: {
                      item: "minecraft:golden_apple",
                    },
                    C: {
                      item: "minecraft:bread",
                    },
                    D: {
                      item: "minecraft:kelp",
                    },
                    E: {
                      item: "minecraft:cocoa_beans",
                    },
                    F: {
                      item: "minecraft:cake",
                    },
                    G: {
                      item: "minecraft:glistering_melon_slice",
                    },
                    H: {
                      item: "minecraft:carrot",
                    },
                    I: {
                      item: "minecraft:poisonous_potato",
                    },
                    J: {
                      item: "minecraft:chorus_fruit",
                    },
                    K: {
                      item: "minecraft:beetroot",
                    },
                    L: {
                      item: "minecraft:mushroom_stew",
                    },
                    M: {
                      item: "minecraft:honey_bottle",
                    },
                    O: {
                      item: "minecraft:sweet_berries",
                    },
                    P: {
                      item: "farmersdelight:apple_pie",
                    },
                    Q: {
                      item: "farmersdelight:sweet_berry_cheesecake",
                    },
                    R: {
                      item: "farmersdelight:chocolate_pie",
                    },
                    S: {
                      item: "farmersdelight:melon_popsicle",
                    },
                    T: {
                      item: "farmersdelight:fruit_salad",
                    },
                    U: {
                      item: "farmersdelight:mixed_salad",
                    },
                    V: {
                      item: "farmersdelight:nether_salad",
                    },
                    W: {
                      item: "farmersdelight:barbecue_stick",
                    },
                    X: {
                      item: "farmersdelight:egg_sandwich",
                    },
                    Y: {
                      item: "farmersdelight:chicken_sandwich",
                    },
                    Z: {
                      item: "farmersdelight:hamburger",
                    },
                    a: {
                      item: "farmersdelight:bacon_sandwich",
                    },
                    b: {
                      item: "farmersdelight:mutton_wrap",
                    },
                    c: {
                      item: "farmersdelight:dumplings",
                    },
                    d: {
                      item: "farmersdelight:stuffed_potato",
                    },
                    e: {
                      item: "farmersdelight:cabbage_rolls",
                    },
                    f: {
                      item: "farmersdelight:cooked_rice",
                    },
                    g: {
                      item: "farmersdelight:beef_stew",
                    },
                    h: {
                      item: "farmersdelight:chicken_soup",
                    },
                    i: {
                      item: "farmersdelight:vegetable_soup",
                    },
                    j: {
                      item: "farmersdelight:fish_stew",
                    },
                    k: {
                      item: "farmersdelight:fried_rice",
                    },
                    l: {
                      item: "farmersdelight:pumpkin_soup",
                    },
                    m: {
                      item: "farmersdelight:baked_cod_stew",
                    },
                    n: {
                      item: "farmersdelight:noodle_soup",
                    },
                    o: {
                      item: "farmersdelight:bacon_and_eggs",
                    },
                    p: {
                      item: "farmersdelight:pasta_with_meatballs",
                    },
                    q: {
                      item: "farmersdelight:pasta_with_mutton_chop",
                    },
                    r: {
                      item: "farmersdelight:roasted_mutton_chops",
                    },
                    s: {
                      item: "farmersdelight:vegetable_noodles",
                    },
                    t: {
                      item: "farmersdelight:steak_and_potatoes",
                    },
                    u: {
                      item: "farmersdelight:ratatouille",
                    },
                    v: {
                      item: "farmersdelight:salmon_roll",
                    },
                    w: {
                      item: "farmersdelight:stuffed_pumpkin_block",
                    },
                    x: {
                      item: "farmersdelight:roast_chicken_block",
                    },
                    y: {
                      item: "farmersdelight:grilled_salmon",
                    },
                    z: {
                      item: "ars_nouveau:sourceberry_bush",
                    },
                    1: {
                      item: "argentinas_delight:asadasoitem",
                    },
                    2: {
                      item: "create:blaze_cake",
                    },
                    3: {
                      item: "create:chocolate_glazed_berries",
                    },
                    4: {
                      item: "create:honeyed_apple",
                    },
                    5: {
                      item: "avaritia:neutron_nugget",
                    },
                  }
                );




                //perla destructora
                event.recipes.createMechanicalCrafting(
                  "avaritia:endest_pearl",
                  [
                    "   AAA   ",
                    " AABBBAA ",
                    " ABBBBBA ",
                    "ABBBDBBBA",
                    "ABBDCDBBA",
                    "ABBBDBBBA",
                    " ABBBBBA ",
                    " AABBBAA ",
                    "   AAA   ",
                  ],
                  {
                    A: {
                      item: "minecraft:end_stone",
                    },
                    B: {
                      item: "minecraft:ender_pearl",
                    },
                    C: {
                      item: "minecraft:nether_star",
                    },
                    D: {
                      item: "avaritia:neutronium_ingot",
                    },
                  }
                );


                //compresor
                event.recipes.createMechanicalCrafting(
                  "avaritia:neutronium_compressor",
                  [
                    "IIIHHHIII",
                    "X N   N X",
                    "I N   N I",
                    "X N   N X",
                    "RNN O NNR",
                    "X N   N X",
                    "I N   N I",
                    "X N   N X",
                    "IIIXIXIII",
                  ],
                  {
                    N: {
                      item: "avaritia:neutronium_ingot",
                    },
                    H: {
                      item: "minecraft:hopper",
                    },
                    I: {
                      tag: "forge:storage_blocks/iron",
                    },
                    O: {
                      item: "avaritia:neutronium_block",
                    },
                    X: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    R: {
                      tag: "forge:storage_blocks/redstone",
                    },
                  }
                );



                //colector de neutrones
                event.recipes.createMechanicalCrafting(
                  "avaritia:neutron_collector",
                  [
                    "IIQQQQQII",
                    "I QQQQQ I",
                    "I  RRR  I",
                    "X RRRRR X",
                    "I RRXRR I",
                    "X RRRRR X",
                    "I  RRR  I",
                    "I       I",
                    "IIIXIXIII",
                  ],
                  {
                    I: {
                      tag: "forge:storage_blocks/iron",
                    },
                    X: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    R: {
                      tag: "forge:storage_blocks/redstone",
                    },
                    Q: {
                      tag: "forge:storage_blocks/quartz",
                    },
                  }
                );


                //infinity catalyst
                event.recipes.createMechanicalCrafting(
                  "avaritia:infinity_catalyst",
                  ["ABCDEFGHI", "JKLMNOPQR", "STUVWXYZ1", "23456    "],
                  {
                    A: {
                      item: "avaritia:diamond_lattice",
                    },
                    B: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    C: {
                      item: "avaritia:pileof_neutrons",
                    },
                    D: {
                      item: "avaritia:neutronium_nugget",
                    },
                    E: {
                      item: "avaritia:neutronium_ingot",
                    },
                    F: {
                      item: "avaritia:record_fragment",
                    },
                    G: {
                      item: "avaritia:endest_pearl",
                    },
                    H: {
                      item: "avaritia:ultimate_stew",
                    },
                    I: {
                      item: "avaritia:cosmic_meatballs",
                    },
                    J: {
                      item: "avaritia:iron_singularity",
                    },
                    K: {
                      item: "avaritia:golden_singularity",
                    },
                    L: {
                      item: "ae2:singularity",
                    },
                    M: {
                      item: "avaritia:lapis_singularity",
                    },
                    N: {
                      item: "avaritia:redstone_singularity",
                    },
                    O: {
                      item: "avaritia:nether_quartz_singularity",
                    },
                    P: {
                      item: "avaritia:diamond_singularity",
                    },
                    Q: {
                      item: "avaritia:emerald_singularity",
                    },
                    R: {
                      item: "thermal:steel_block",
                    },
                    S: {
                      item: "botania:life_essence",
                    },
                    T: {
                      item: "kubejs:planos",
                    },
                    U: {
                      item: "kubejs:star",
                    },
                    V: {
                      item: "industrialforegoing:speed_addon_2",
                    },
                    W: {
                      item: "create:track",
                    },
                    X: {
                      item: "industrialforegoing:pink_slime_ingot",
                    },
                    Y: {
                      item: "mysticalagriculture:awakened_supremium_ingot",
                    },
                    Z: {
                      item: "ars_nouveau:source_gem_block",
                    },
                    1: {
                      item: "framedblocks:framed_redstone_block",
                    },
                    2: {
                      item: "megacells:mega_crafting_monitor",
                    },
                    3: {
                      item: "mythicbotany:helheim_rune",
                    },
                    4: {
                      item: "reliquary:mercy_cross",
                    },
                    5: {
                      item: "create_new_age:advanced_motor_extension",
                    },
                    6: {
                      item: "thermal_extra:dragonsteel_block",
                    },
                  }
                );


                //lingote infinito
                event.recipes.createMechanicalCrafting(
                  "avaritia:infinity_ingot",
                  ["NNNNNNNNN", "NCIICIICN", "NICCICCIN", "NCIICIICN", "NNNNNNNNN"],
                  {
                    C: {
                      item: "avaritia:crystal_matrix_ingot",
                    },
                    N: {
                      item: "avaritia:neutronium_ingot",
                    },
                    I: {
                      item: "avaritia:infinity_catalyst",
                    },
                  }
                );

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})