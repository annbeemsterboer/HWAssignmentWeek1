// Write your JS here

let hero = {
    name: 'Superman',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {type: 'sword', damage: 2},
}

let newWeapon = {type: 'dagger', damage: 2}

function rest(hero) {
    while (hero.health < 10) {
    hero.health = 10
    // console.log('health restored')
    }
    return hero;
}

rest(hero)

function pickUpItem (yourHero, yourWeapon) { // ADD TO INVENTORY[0]
    hero.inventory.push(newWeapon)
}

pickUpItem(hero, dagger);
console.log(hero.inventory)


// function equipWeapon(yourHero) {
//     hero.inventory.unshift(hero.weapon)
//     // console.log('weapon equiped')
// }

// equipWeapon(hero)