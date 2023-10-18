import Navbar from "../home/Navbar";


const SignIn = () => {
    const handleSignIn = e =>{
        e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-20">
                <div className="hero w-11/12 mx-auto">
                    <div className="hero-content w-5/6 flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sign in now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-5/6 shadow-2xl bg-base-100">
                            <form onSubmit={handleSignIn} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email"  placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary font-semibold">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;