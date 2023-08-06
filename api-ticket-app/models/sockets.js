import TicketList from "./ticket-list.js";

class Sockets {
    constructor(io) {
        this.io = io
        this.ticketList = new TicketList()
        this.socketEvents()
    }

    socketEvents() {
        this.io.on('connection', (socket) => {
            console.log('new client connected')
            socket.on('new-ticket', (data, callback) => {
                const newTicket = this.ticketList.newTicket()
                callback(newTicket)
            })
            socket.on('next-ticket-to-attend', (data, callback) => {
                console.log('data from front', data)
                const nextTicket = this.ticketList.assignTicket(data.agent, data.desktop)
                callback(nextTicket)
                this.io.emit('current-state', this.ticketList.last13)
            })
            socket.on('get-current-state', () => {
                this.io.emit('current-state', this.ticketList.last13)
            })
        });
    }
}

export default Sockets;