ServerEvents.recipes(event => {
    function addRecipeRockGen(adjacent,below,out,id) {
        let recipe =  {
            "type": "thermal:rock_gen",
            "adjacent":adjacent,
            "result": Item.of(out)
        }
        if (below != '') {
            recipe.below = below
        }
        event.custom(recipe).id(id)
    }
    addRecipeRockGen('minecraft:water','minecraft:polished_diorite','minecraft:diorite','kubejs:rock_gen/rock_gen_diorite')
    addRecipeRockGen('minecraft:water','minecraft:polished_andesite','minecraft:andesite','kubejs:rock_gen/rock_gen_andesite')
    addRecipeRockGen('minecraft:water','minecraft:polished_granite','minecraft:granite','kubejs:rock_gen/rock_gen_granite')
    addRecipeRockGen('minecraft:water','minecraft:bone_block','minecraft:calcite','kubejs:rock_gen/rock_gen_calcite')
	
	//multiverso press
	event.recipes.thermal.press('alltheores:osmium_plate', ['#forge:ingots/osmium']).energy(2400)
	event.recipes.thermal.press('allthemodium:vibranium_plate', ['allthemodium:vibranium_ingot']).energy(2400)
	event.recipes.thermal.press('allthemodium:unobtainium_plate', ['allthemodium:unobtainium_ingot']).energy(2400)
	event.recipes.thermal.press('allthemodium:allthemodium_plate', ['allthemodium:allthemodium_ingot']).energy(2400)
	event.recipes.thermal.press('#forge:plates/brass', ['#forge:ingots/brass']).energy(2400)
	event.recipes.thermal.press('create:brass_sheet', ['#forge:ingots/brass']).energy(2400)
	event.recipes.thermal.press('alltheores:diamond_plate', ['minecraft:diamond']).energy(2400)
    event.recipes.thermal.press('thermal:constantan_gear', ['4x thermal:constantan_plate']).energy(2400)


    //indusction smelter
    event.recipes.thermal.smelter('thermal:steel_ingot', ['minecraft:iron_ingot', 'minecraft:coal']).energy(4800)
    event.recipes.thermal.smelter('thermal:steel_block', ['minecraft:iron_block', 'minecraft:coal_block']).energy(4800)
   

})