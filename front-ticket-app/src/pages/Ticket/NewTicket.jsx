import {useContext, useEffect, useState} from "react";
import {SocketContext} from "../../context/SocketContext.jsx";

const NewTicket = () => {
    const [ticketNumber, setTicketNumber] = useState(0);
    const [userName, setUserName] = useState('');
    const [userError, setUserError] = useState(null);
    const {socket } = useContext(SocketContext)
    const newTicket = (e) => {
        e.preventDefault();
        if(!userName){
            setUserError('El nombre es obligatorio');
            return;
        }
        socket.emit('new-ticket',{'username':  userName}, (data) => {
            setTicketNumber(data.number);
        })
        setUserName('');
        setUserError(null);
    }

    return (
        <>
            <section className="w-full flex flex-col justify-center items-center text-center mt-5">
                <h2 className="text-brand-color font-bold text-2xl">
                    <span className="text-slate-700">
                        Nuevo Ticket
                    </span>
                </h2>

                <form action=""
                      className="w-5/6 flex flex-col justify-center items-center gap-3 p-4"
                >
                    <label htmlFor="name">Nombre de usuario:</label>
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full p-2 rounded"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    {
                        userError && (
                            <p className="text-red-500 text-sm">
                                {userError}
                            </p>
                        )
                    }
                    <button
                        className="bg-brand-color m-2 p-3 rounded text-slate-100 font-bold"
                        type="submit"
                        onClick={(e) => newTicket(e)}
                    >
                        <span> Nuevo ticket</span>
                    </button>
                </form>
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