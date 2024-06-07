# Project 5

Project 5 took a step back from fastify servers, and focused more on classes and functions within those classes. The goal was to make a short game about monsters, with each monster inheriting from the same class, as well as the game itself.
```ruby
const MonsterGame = require("./p5-monster-game.js");

// Game monsters setup information
const monsterList = [
  {
    monsterName: "King Kong",
    minimumLife: 10,
    currentLife: 150,
  },
  {
    monsterName: "Godzilla",
    minimumLife: 10,
    currentLife: 200,
  },
];
// Game configuration information
const minimumLifeDrain = 10;
const maximumLifeDrain = 50;
const gameDelayInMilliseconds = 5000; // 5 second game delay

// Create Monster Game instance
const monsterGame = new MonsterGame(
  {
    monsterList, gameDelayInMilliseconds, minimumLifeDrain, maximumLifeDrain
  }
);

// List monsters
monsterGame.listMonsters();

// Start game
monsterGame.playGame();
```

Monster class:
```ruby
module.exports = class Monster {
    constructor({
        monsterName = "Unknown",
        minimumLife = 0,
        currentLife = 100,
    }){
        this.monsterName = monsterName;
        this.minimumLife = minimumLife;
        this.currentLife = currentLife;
        this.isAlive = currentLife >= minimumLife ? true : false;
    }

    getRandomInteger(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    updateLife(lifeChangeAmount){
        this.currentLife -= lifeChangeAmount;
        this.currentLife = this.currentLife < 0 ? 0 : this.currentLife;
        this.isAlive = this.currentLife < this.minimumLife ? false : true;
        console.log(`${this.monsterName} random power drain of ${lifeChangeAmount}`);
    }

    randomLifeDrain(minimumLifeDrain, maximumLifeDrain){
        maximumLifeDrain += 1;
        this.updateLife(this.getRandomInteger(minimumLifeDrain, maximumLifeDrain));
    }
}
```

The monster game class just handled gameplay and the timing of everything, while printing it to the console.
<a href="https://joeybez.github.io/joeybezner.github.io/">Back to Home</a>
