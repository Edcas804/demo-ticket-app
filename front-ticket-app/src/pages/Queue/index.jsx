import {useContext, useEffect, useState} from "react";
import {SocketContext} from "../../context/SocketContext.jsx";
const CardQueue = ({data}) => {
    return (
        <section className="shadow-md m-3 flex flex-col">
            {
                data.map((item, index) => (
                    <div key={index} className="grid grid-cols-2 gap-2 m-2 border-b border-brand-color">
                        <h3 className="col-span-2 text-center p-4 text-4xl text-brand-color">No: {item.number}</h3>
                        <p className="col-span-2 text-center p-2 text-2xl text-slate-500">{item.username}</p>
                        <p className="col-span-1 bg-slate-200 rounded m-2 px-3 py-1 text-brand-color font-bold text-center">Agente: {item.agent}</p>
                        <p className="col-span-1 bg-brand-color rounded m-2 px-3 py-1 text-white text-center">MÓDULO: {item.desktop}</p>
                    </div>
                ))
            }
        </section>
    )
}
const CardHistory = ({data}) => {
    return (
        <section className="shadow-md m-3 flex flex-col">
            {
                data.map((item, index) => (
                    <div key={index} className="grid grid-cols-2 gap-2 border-b border-brand-color">
                        <h3 className="col-span-2 text-center p-2 text-2xl text-slate-500">No: {item.number}</h3>
                        <p className="col-span-2 text-center p-2 text-2xl text-slate-500">{item.username}</p>
                        <p className="col-span-1 rounded px-2 py-1 text-brand-color text-center mr-2">Agente:{item.agent}</p>
                        <p className="col-span-1 bg-brand-color rounded px-2 py-1 text-white text-center ml-2">Módulo: {item.desktop}</p>
                    </div>
                ))
            }
        </section>
    )
}
const Queue = () => {
    const {socket} = useContext(SocketContext)
    const [ticketQueue, setTicketQueu] = useState([]);
    useEffect(() => {
        socket.on('current-state', (data) => {
            setTicketQueu(data)
        })
        return () => {
            socket.off('current-state')
        }
    }, [socket])
    useEffect(() => {
        socket.emit('get-current-state')
    }, [])

    return (
        <section>
            <h2 className="text-2xl text-center text-brand-color font-bold m-2 mb-5 border-b border-brand-color py-3">Cola de atención</h2>
            <div className="grid grid-cols-12">
                <div className="col-span-8 h-screen max-h-screen overflow-y-auto">
                    <CardQueue data={ticketQueue.slice(0, 4)} />
                </div>
                <div className="col-span-4 h-screen max-h-screen overflow-y-auto">
                    <h4 className="text-slate-500 text-center text-xl font-bold m-2 mb-5 border-b border-brand-color py-3">Historial de atención</h4>
                    <CardHistory data={ticketQueue.slice(4)} />
                </div>
            </div>
        </section>
    )
}
export default Queue;