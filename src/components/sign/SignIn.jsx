import Navbar from "../home/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import swal from "sweetalert";
import { sendPasswordResetEmail } from "firebase/auth";
import { AuthContext, auth } from "../providers/AuthProvider";


const SignIn = () => {

    const { signIn, resetPassword } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const [success, setSuccess] = useState("");
    const emailRef = useRef(null);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');
        setSuccess('');

        signIn(email, password)
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state : "/");
                setSuccess(swal("Congratulations!!!", "You successfully signed in", "success"));
            })
            .catch(err => {
                setError(err.message);
            })

    }

    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            setError("Please provide an email");
        }
        else if (!/^([a-zA-z0-9._%+-]+@[a-zA-z0-9.-]+\.[a-zA-z]{2,})$/.test(email)) {
            console.log("Please provide a validated email");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setError("Please check your email")
            })
            .catch(() => {
                setError("There must be some problem with email. Check your email and try again");
            })
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
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
                                {
                                    error && <p className="text-red-800 text-base">{error}</p>
                                }
                                <p>Don't have an account? <Link to={"/signUp"} className="text-blue-900 font-semibold">Sign up</Link> here</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;