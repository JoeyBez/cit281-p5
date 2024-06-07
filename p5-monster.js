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
