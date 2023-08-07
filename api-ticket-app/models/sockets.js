import TicketList from "./ticket-list.js";

class Sockets {
    constructor(io) {
        this.io = io
        this.ticketList = new TicketList()
        this.socketEvents()
    }

    socketEvents() {
        this.io.on('connection', (socket) => {
            socket.on('new-ticket', (data, callback) => {
                const newTicket = this.ticketList.newTicket(data)
                callback(newTicket)
                this.io.emit('count-pending-tickets', this.ticketList.pendingCount())
            })
            socket.on('next-ticket-to-attend', (data, callback) => {
                const nextTicket = this.ticketList.assignTicket(data.agent, data.desktop)
                callback(nextTicket)
                this.io.emit('current-state', this.ticketList.last13)
                this.io.emit('all-current-state', this.ticketList.assignedAll())
                this.io.emit('count-pending-tickets', this.ticketList.pendingCount())
            })
            socket.on('get-current-state', () => {
                this.io.emit('current-state', this.ticketList.last13)
                this.io.emit('all-current-state', this.ticketList.assignedAll())
            })
            socket.on('get-all-current-state', () => {
                this.io.emit('all-current-state', this.ticketList.assignedAll())
                this.io.emit('count-pending-tickets', this.ticketList.pendingCount())
            })
            socket.on('get-count-pending-tickets', (data, callback) => {
                this.io.emit('count-pending-tickets', this.ticketList.pendingCount())
                this.io.emit('all-current-state', this.ticketList.assignedAll())
            })
        });
    }
}

export default Sockets;