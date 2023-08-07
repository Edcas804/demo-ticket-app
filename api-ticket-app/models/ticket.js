import {v4 as uuidV4} from 'uuid';

class Ticket {
    constructor(number,  username) {
        this.id = uuidV4();
        this.number = number;
        this.desktop= null;
        this.agent = null;
        this.username = username;
    }
}

export default Ticket