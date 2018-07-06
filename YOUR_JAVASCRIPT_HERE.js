// Write your JS here



let hero = {
    name: 'Superman',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {type:'sword', damage: 2}
}


function rest(hero) {
    while (hero.health < 10) {
    hero.health = 10
    // console.log('health restored')
    }
    return hero;
}

rest(hero)

function pickUpItem (yourHero, yourWeapon) { // dont know the parameters??
    hero.inventory.push(hero.weapon)
    // console.log('item picked up')
}

pickUpItem (hero, hero.weapon)
// console.log(hero.inventory)

function equipWeapon (thePicker) {
    hero.inventory.unshift(hero.weapon)
    // console.log('weapon equiped')
}

equipWeapon(hero)