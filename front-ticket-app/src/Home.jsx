import usePendingTickets from "./hooks/usePendingTickets.jsx";
import {useContext, useEffect, useState} from "react";
import {SocketContext} from "./context/SocketContext.jsx";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Gestión de tickets',
        },
    },
};

function Home() {
    const {pendingTickets} = usePendingTickets()
    const {socket} = useContext(SocketContext)
    const [ticketQueue, setTicketQueu] = useState([]);
    const [dataChart, setDataChart] = useState(null)
    useEffect(() => {
        socket.on('all-current-state', (data) => {
            setTicketQueu(data)
        })
        return () => {
            socket.off('all-current-state')
        }
    }, [socket])
    useEffect(() => {
        socket.emit('get-all-current-state')
    }, [])

   useEffect(() => {
       let agents= Array.from(new Set(ticketQueue.map(ticket => ticket.agent)))
       let ticketsForAgent = []
       agents.forEach(agent => {
           let tickets = ticketQueue.filter(ticket => ticket.agent === agent)
           ticketsForAgent.push(tickets.length)
       })
       setDataChart({
           labels: agents,
           datasets: [
               {
                   label: 'tickets',
                   data: ticketsForAgent,
                   backgroundColor: 'rgba(99,255,226,0.2)',
                   borderColor: 'rgb(34,123,115)',
                   borderWidth: 1,
               }
           ]
       })
   }, [pendingTickets, ticketQueue])
    return (
        <section>
            {
                dataChart && (
                    <Bar options={options} data={dataChart} />
                )
            }
        </section>
    )
}

export default Home
