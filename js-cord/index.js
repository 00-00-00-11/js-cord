const { ConnectionError, InvalidEventError, ConstructionError } = require("./errors/DiscordEventError");

module.exports = {
    Client: require("./client/Client"),
    Bot: require("./client/Bot"),

    Check: require("./commands/Check"),
    Command: require("./commands/Command"),
    CommandContext: require("./commands/CommandContext"),
    Cooldown: require("./commands/Cooldown"),

    AllowedMentions: require("./structures/AllowedMentions"),
    Channel: require("./structures/Channel"),
    ClientUser: require("./structures/ClientUser"),
    Embed: require("./structures/Embed"),
    Guild: require("./structures/Guild"),
    Intents: require("./structures/Intents"),
    Member: require("./structures/Member"),
    Message: require("./structures/Message"),
    Messageable: require("./structures/Messageable"),
    Permissions: require("./structures/Permissions"),
    Reaction: require("./structures/Reaction"),
    Role: require("./structures/Role"),
    User: require("./structures/User"),

    BaseConverter: require("./converters/BaseConverter"),
    UserConverter: require("./converters/User"),

    errors: {
        ConnectionError: ConnectionError,
        InvalidEventError: InvalidEventError,
        ConstructionError: ConstructionError,
        CooldownError: require("./errors/CooldownError")
    }
};