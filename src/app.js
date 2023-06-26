const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = [];

    for (let i = 0; i < players.length; i++) {
        var obj = {}
        obj.name = players[i]
        obj.strength = getRandomStrength()
        obj.image = `../images/super-${i+1}.png`
        
        // let num = Math.floor((Math.random()*10)+1);
        // console.log(num)
        
        if (i%2 == 0) {
            obj.type = "hero"
        } else {
            obj.type = "villain"
        }
        detailedPlayers.push(obj)

    }

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    let strengthnum = Math.floor((Math.random() * 100) + 1);
    return strengthnum;
}

const buildPlayers = (players, type) => {
    let fragment = '';

    // Loop through players and accumulate HTML template
    // depending of type of player(hero|villain)
    // Type your code here

    for (let i = 0; i < players.length; i++) {

        if (players[i].type == type) {
            
            let text = `<div class="player">
            <img src="${players[i].image}" alt="">
            <div class="name">${players[i].name}</div>
            <div class="strength">${players[i].strength}</div>
            </div>`

            fragment = fragment + text;

        }
        // console.log();
    }
    return fragment;
}
// Display players in HTML
const viewPlayers = (players) => {

    document.getElementById('heroes').innerHTML =  buildPlayers(players, 'hero')

    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}