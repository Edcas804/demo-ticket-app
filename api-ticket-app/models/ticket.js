import {v4 as uuidV4} from 'uuid';

class Ticket {
    constructor(number) {
        this.id = uuidV4();
        this.number = number;
        this.desktop= null;
        this.agent = null;
    }
}

export default Ticket