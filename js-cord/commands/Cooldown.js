class Cooldown {
    /**
     * Represents a command cooldown.
     */
    constructor(rate, cooldown, type = "user") {
        this.rate = rate;
        this.cooldown = cooldown;
        this.type = type;
    }

    static none() {
        return new Cooldown(1, 0);
    }
}

module.exports = Cooldown;