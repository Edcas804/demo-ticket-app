import {NavLink} from "react-router-dom";
import Footer from "./Footer.jsx";
import {useContext} from "react";
import {SocketContext} from "../context/SocketContext.jsx";

const navLinkStyles ="hover:text-brand-color font-bold"
const navLinkStylesActive ="text-brand-color hover:text-brand-color font-bold"
const SideBar = () => {
    const {online} = useContext(SocketContext);
    return (
        <section className="col-span-3 bg-slate-800 rounded-lg h-screen flex flex-col justify-between">
            <nav className="">
                <h1 className="text-white text-center text-xl font-bold p-4">
                    Administrador
                    <br />
                    <span className="text-sm">{
                        online
                            ? (<span className="text-green-500">Online</span>)
                            : (<span className="text-red-500">Offline</span>)
                    }</span>
                </h1>
                <ul className="w-full flex flex-col gap-3 p-4 text-white">
                    <li>
                        <NavLink
                            to={"/"}
                            className={({isActive, isPending}) =>
                                isPending ? "pending" : isActive ? navLinkStylesActive : navLinkStyles
                            }
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/login"}
                            className={({isActive, isPending}) =>
                                isPending ? "pending" : isActive ? navLinkStylesActive : navLinkStyles
                            }
                        >Login</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/new-ticket"}
                            className={({isActive, isPending}) =>
                                isPending ? "pending" : isActive ? navLinkStylesActive : navLinkStyles
                            }
                        >Crear Ticket</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/queue"}
                            className={({isActive, isPending}) =>
                                isPending ? "pending" : isActive ? navLinkStylesActive : navLinkStyles
                            }
                        >Cola</NavLink>
                    </li>
                </ul>
            </nav>
            <Footer/>
        </section>
    )
}
export default SideBar;