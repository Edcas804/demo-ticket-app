import Home from "./Home.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/layout/index";
import Login from "./pages/Login/index";
import Desktop from "./pages/Desktop/index";
import NewTicket from "./pages/Ticket/NewTicket.jsx";
import Queue from "./pages/Queue/index.jsx";
import {SocketProvider} from "./context/SocketContext.jsx";

const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/">
                <Route path="new-ticket" element={<NewTicket />} />
                <Route path="queue" element={<Queue />} />
                <Route path="desktop" element={<Desktop />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="login" element={<Login />} />
                {
                   /*
                <Route
                    path="dashboard"
                    element={<Dashboard />}
                    loader={({ request }) =>
                        fetch("/api/dashboard.json", {
                            signal: request.signal,
                        })
                    }
                />
                <Route element={<AuthLayout />}>
                    <Route
                        path="login"
                        element={<Login />}
                        loader={redirectIfUser}
                    />
                    <Route path="logout" action={logoutUser} />
                </Route>
                    */

                }
                </Route>
                <Route path="*" element={<p>404</p>} />
            </Route>
        )
    );
function App() {
    return (
        <SocketProvider>
            <RouterProvider router={router} />
        </SocketProvider>
    )
}

export default App
