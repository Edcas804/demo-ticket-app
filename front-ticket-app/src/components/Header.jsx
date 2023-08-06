import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="w-full flex justify-around py-4 border-b border-slate-300">
            <nav className="w-full flex justify-around gap-4">
                <ul className="flex justify-around gap-4">
                    <li>
                        <NavLink to={"/"} >
                            <h1>Ticket App</h1>
                        </NavLink>
                    </li>
                </ul>
                <ul className="flex justify-around gap-4">
                    <li>
                        <NavLink to={"/"} >
                            Home
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header