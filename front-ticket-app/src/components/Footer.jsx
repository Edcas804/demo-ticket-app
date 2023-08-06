const Footer = () => {
    return (
        <footer className="w-full bg-brand-color text-slate-200 flex flex-col justify-center items-center py-3">
            <p className="">
                Ticket App
            </p>
            <p className="">
                &copy;
                All rights reserved
            </p>
            <p className="">
                {new Date().getFullYear()}
            </p>
        </footer>
    )
}
export default Footer;