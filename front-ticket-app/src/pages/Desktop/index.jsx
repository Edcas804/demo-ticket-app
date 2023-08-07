import {useContext, useState} from "react";
import {SocketContext} from "../../context/SocketContext.jsx";
import usePendingTickets from "../../hooks/usePendingTickets.jsx";

const Desktop = () => {
    const [agent, setAgent] = useState(() => window.localStorage.getItem('agent'));
    const [desktop, setDesktop] = useState(() => window.localStorage.getItem('desktop'));
    const [attendTicket, setAttendTicket] = useState(null);
    const {pendingTickets} = usePendingTickets()
    const {socket} = useContext(SocketContext)
    const nextTicket = (e) => {
        e.preventDefault();
        socket.emit('next-ticket-to-attend', {agent, desktop}, (ticket) => {
            setAttendTicket(ticket?.number ?? null)
        })
    }
    return (
        <section className="flex w-full flex-col p-5">
            <div className="flex justify-between items-center p-4">
                <p>
                    Hola, {agent}
                </p>
                <p className="bg-brand-color text-white px-4 py-2 rounded-md m-3">
                    Modulo: {desktop}
                </p>
                <div>
                    <p className={`${pendingTickets > 0 ? 'bg-green-500' : 'bg-orange-500' }  text-white px-4 py-2 rounded-full`}>
                        {pendingTickets}
                    </p>
                </div>
            </div>
            <div className="flex justify-start items-center p-4 border-b border-brand-color">
                <p>
                    {
                        attendTicket
                            ? (<p>Atendiendo el ticket <i className="bg-green-500 font-bold text-white px-4 py-2 rounded-md m-3">{attendTicket}</i></p>)
                            : 'Disponible para recibir tickets'
                    }
                </p>
            </div>
            <button
                className="bg-brand-color text-white px-4 py-2 rounded-md m-3"
                onClick={(e) => nextTicket(e)}
            >
                Siguiente
            </button>
        </section>
    )
}
export default Desktop;