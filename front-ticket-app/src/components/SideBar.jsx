import { NavLink } from "react-router-dom"
import Footer from "./Footer.jsx"
import { useSocketContext } from "../context/SocketContext.jsx"
import usePendingTickets from "../hooks/usePendingTickets.jsx"

const navLinkStyles = "hover:text-brand-color font-bold"
const navLinkStylesActive = "text-brand-color hover:text-brand-color font-bold"
const SideBar = () => {
	const { online } = useSocketContext()

	const { pendingTickets } = usePendingTickets()
	return (
		<section className="col-span-2 bg-slate-800 rounded-lg h-screen flex flex-col justify-between">
			<nav className="">
				<h1 className="text-white text-center text-xl font-bold px-4">
					Administrador
					<br />
					<span className="text-sm">
						{online ? (
							<span className="text-green-500">Online</span>
						) : (
							<span className="text-red-500">Offline</span>
						)}
					</span>
				</h1>
				<h1 className="text-white text-center text-sm">
					<p>
						tickets
						<span className="text-white bg-red-500 rounded-full px-2 py-1 text-xs ml-2">
							{pendingTickets}
						</span>
					</p>
				</h1>
				<ul className="w-full flex flex-col gap-3 p-4 text-white">
					<li>
						<NavLink
							to={"/"}
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
									: isActive
									? navLinkStylesActive
									: navLinkStyles
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/login"}
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
									: isActive
									? navLinkStylesActive
									: navLinkStyles
							}
						>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/new-ticket"}
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
									: isActive
									? navLinkStylesActive
									: navLinkStyles
							}
						>
							Crear Ticket
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/queue"}
							className={({ isActive, isPending }) =>
								isPending
									? "pending"
									: isActive
									? navLinkStylesActive
									: navLinkStyles
							}
						>
							Cola
						</NavLink>
					</li>
				</ul>
			</nav>
			<Footer />
		</section>
	)
}
export default SideBar
