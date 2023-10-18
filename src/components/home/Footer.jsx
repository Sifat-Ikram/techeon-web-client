

const Footer = () => {
    return (
        <div>
            <footer  className="footer footer-center p-10 bg-primary text-primary-center rounded text-white">
                <nav className="grid grid-flow-col gap-4 text-base">
                   <a href="" className="link link-hover">About us</a> 
                   <a href="" className="link link-hover">Contact</a> 
                   <a href="" className="link link-hover">Press kit</a> 
                   <a href="" className="link link-hover">Jobs</a> 
                </nav>
                <aside className="text-xl">
                    <p className="font-bold">TechEon ltd.</p>
                    <p>Providing reliable tech since 2000</p>
                    <p>Copyright @ 2023 - All right reserved</p>
                </aside>
            </footer> 
        </div>
    );
};

export default Footer;