ServerEvents.recipes(event => {
	
	//eliminadas
	event.remove({output:'botania:apothecary_fungal'})
	event.remove({output:'botania:apothecary_swamp'})
	event.remove({output:'botania:apothecary_taiga'})
	event.remove({output:'botania:apothecary_mesa'})
	event.remove({output:'botania:apothecary_mountain'})
	event.remove({output:'botania:apothecary_plains'})
	event.remove({output:'botania:apothecary_forest'})
	event.remove({output:'botania:runic_altar'})
	
	

	
	
	
	//altar runico
    event.shaped('botania:runic_altar', [
    'TCT',
    'INI',
    'NNN'
  ], {
    N: 'botania:livingrock_bricks',
    T: 'advancednetherite:netherite_emerald_ingot',
    C: 'evilcraft:blood_orb_filled',
    I: 'bloodmagic:reinforcedslate',
  });
	
	
})