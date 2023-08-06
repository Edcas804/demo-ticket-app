import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [desktop, setDesktop] = useState(0);
    const login = (e) => {
        e.preventDefault();
        localStorage.setItem('agent', name);
        localStorage.setItem('desktop', desktop);
        console.log(name, desktop);
        navigate('/desktop')
    }
    return (
        <div className="w-full flex flex-col justify-center items-center p-5">
            <div className="w-5/6 flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mb-3 text-slate-500">Bienvenido</h1>
                <form action=""
                    className="w-5/6 flex flex-col justify-center items-center gap-3"
                >
                    <input
                        type="text"
                        placeholder="Nombre"
                        className="w-full p-2 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Modulo"
                        className="w-full p-2 rounded"
                        value={desktop}
                        onChange={(e) => setDesktop(e.target.value)}
                    />
                    <button className="bg-brand-color px-5 py-2 rounded text-white"
                            onClick={(e) => login(e)}
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Login;