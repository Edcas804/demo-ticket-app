import { useEffect, useState } from "react"
import { useSocketContext } from "../context/SocketContext.jsx"

const usePendingTickets = () => {
	const { socket } = useSocketContext()
	const [pendingTickets, setPendingTickets] = useState(0)

	useEffect(() => {
		socket.emit("get-count-pending-tickets")
	}, [socket])
	useEffect(() => {
		socket.on("count-pending-tickets", (pendingTickets) => {
			setPendingTickets(pendingTickets)
		})
	}, [socket])

	return { pendingTickets }
}
export default usePendingTickets
