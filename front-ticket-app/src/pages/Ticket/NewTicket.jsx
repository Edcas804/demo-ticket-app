import {useContext, useState} from "react";
import {SocketContext} from "../../context/SocketContext.jsx";

const NewTicket = () => {
    const [ticketNumber, setTicketNumber] = useState(0);
    const {socket } = useContext(SocketContext)
    const newTicket = (e) => {
        e.preventDefault();
        socket.emit('new-ticket',null, (data) => {
            setTicketNumber(data.number);
        })
    }

    return (
        <>
            <section className="text-center mt-5">
                <h2 className="text-brand-color font-bold text-2xl">
                    <span className="text-slate-700">
                        Nuevo Ticket
                    </span>
                </h2>

                <button
                    className="bg-brand-color m-2 p-3 rounded text-slate-100 font-bold"
                    onClick={(e) => newTicket(e)}
                >
                    <span> Nuevo ticket</span>
                </button>
                {
                    (ticketNumber > 0) && (
                        <div>
                            <p className="text-brand-color font-bold text-md my-3">
                                El ticket generado fue:
                            </p>
                            <p className="text-brand-color font-bold text-7xl">
                                    <span className="text-slate-700">
                                        #
                                        {
                                            ticketNumber
                                        }
                                    </span>
                            </p>
                        </div>
                    )
                }
            </section>

        </>
    )
}
export default NewTicket;