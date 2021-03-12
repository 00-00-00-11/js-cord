const User = require("../structures/User");

class ClientUser extends User {
    constructor(client) {
        const data = client.http.getClientUser();
        data.resolve();
        super(client, data['id']);
        this.email = data['email'];
        this.verified = data['verified'];
        this.locale = data['locale'];
    }
}

module.exports = ClientUser;