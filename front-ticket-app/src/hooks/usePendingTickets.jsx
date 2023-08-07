import {useContext, useEffect, useState} from "react";
import {SocketContext} from "../context/SocketContext.jsx";

const usePendingTickets = () => {

    const {socket} = useContext(SocketContext)
    const [pendingTickets, setPendingTickets] = useState(0)

    useEffect(() => {
        socket.emit('get-count-pending-tickets')
    }, [socket])
    useEffect(() => {
        socket.on('count-pending-tickets', (pendingTickets) => {
            setPendingTickets(pendingTickets)
        })
    }, [socket])

    return {pendingTickets}
}
export default usePendingTickets;