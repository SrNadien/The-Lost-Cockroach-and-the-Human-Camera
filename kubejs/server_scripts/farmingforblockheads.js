//farmingforblockheads By SrNadien
ServerEvents.recipes(event => {
	
	
	//eliminadas
    event.remove({output:'farmingforblockheads:market'})
	event.remove({output:'cookingforblockheads:sink'})
    


    //fregadero
  event.recipes.create.mechanical_crafting('cookingforblockheads:sink', [
	'    T    ',
  '   DDD   ',
	'  FACAF  ',
	'  RABAR  ',
	'   AAA   ',
	'    T    '
  ], {
    A: 'minecraft:green_terracotta',
    B: 'reliquary:emperor_chalice',
    C: 'argentinas_delight:pava',
    R: 'argentinas_delight:jarravacia',
	T: 'create:water_wheel',
	F: 'create:fluid_tank',
    D: '#forge:ingots/enderium'
  })
  
  
      //market
  event.recipes.create.mechanical_crafting('farmingforblockheads:market', [
	'    T    ',
  '   DND   ',
	'  FACAF  ',
	'  FABAF  ',
	'   AAA   ',
	'    T    '
  ], {
    A: '#minecraft:logs',
    B: 'minecraft:cocoa_beans',
    C: 'minecraft:wheat_seeds',
	T: 'minecraft:torchflower_seeds',
	F: 'minecraft:torchflower',
	N: 'allthecompressed:emerald_block_1x',
    D: 'minecraft:netherite_ingot'
  }) 
})