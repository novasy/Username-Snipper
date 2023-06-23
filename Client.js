const { Client } = require("discord.js-selfbot-v13");

module.exports = class Novasy extends Client {
    constructor(token) {
        super();
        this.token = token;
    };
};
