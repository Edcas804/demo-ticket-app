import {Outlet} from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import SideBar from "../SideBar.jsx";

const Layout = () => {
    return (
        <main className="grid grid-cols-12">
            <SideBar/>
            <section className="col-span-9">
                <Outlet/>
            </section>
        </main>
    )
}

export default Layout;