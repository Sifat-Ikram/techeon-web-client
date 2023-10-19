

const Footer = () => {
    return (
        <div className="">
            <footer  className="footer footer-center p-10 bg-blue-700 text-primary-center rounded text-white">
                <nav className="grid grid-flow-col gap-4 text-base">
                   <a href="" className="link link-hover">About us</a> 
                   <a href="" className="link link-hover">Contact</a> 
                   <a href="" className="link link-hover">Press kit</a> 
                   <a href="" className="link link-hover">Jobs</a> 
                </nav>
                <aside className="text-xl">
                    <p className="font-bold text-4xl">TechEon ltd.</p>
                    <p>Providing reliable tech since 2000</p>
                    <p>Copyright @ 2023 - All right reserved</p>
                </aside>
            </footer> 
        </div>
    );
};

export default Footer;