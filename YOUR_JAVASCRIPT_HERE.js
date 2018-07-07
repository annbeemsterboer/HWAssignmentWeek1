

let hero = {
    name: 'Superman',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {type: 'gun', damage: 2},
}

function rest(hero) {
    while (hero.health < 10) {
    hero.health = 10
    // console.log('health restored')
    }
    return hero;
}

rest(hero)

let newWeapon = {type:'dagger', damage: 2}

function pickUpItem (yourHero, yourWeapon) { // ADD TO INVENTORY[0]
    hero.inventory.push(newWeapon)
}

// console.log(hero.inventory)


function equipWeapon(yourHero) {
    hero.weapon = hero.inventory[0]
}

equipWeapon(hero)

function displayStats() {
    const newDiv = document.createElement("div")
    const newContent = document.createTextNode(`Your hero's name is ${hero.name}. Is he heroic? ${hero.heroic} He holds ${hero.inventory} and currently uses ${hero.weapon}. His health is ${hero.health}.`)
    newDiv.appendChild(newContent);
    console.log(newDiv)

    const existingElement = document.getElementById("herostats");
    existingElement.appendChild(newDiv)
    // console.log(theHero)
}

displayStats()