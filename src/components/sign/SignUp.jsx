import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";
import { BsGoogle } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import Navbar from "../home/Navbar";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {

    const { createUser, user, googleSignUp, facebookSignUp, } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");



    const handleGoogle = () => {
        googleSignUp()
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.error(err);
            })
    }

    const handleFacebook =()=>{
        facebookSignUp()
        .then( res =>{
            console.log(res.user);
        })
        .catch( err =>{
            console.error(err);
        })
    }


    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const username = form.username.value
        const photoUrl = form.photoUrl.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        const regex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (password.length < 6) {
            setError("Password should be at least 6 characters");
            return;
        }
        else if (regex.test(password)) {
            setError("You can not use any capital letter or any special character");
            return;
        }

        setError('');
        setSuccess('');

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state : "/");
                setSuccess(swal("Congratulations!!!", "You successfully signed up", "success"));
                updateProfile(res.user, {
                    displayName: username,
                    photoURL: photoUrl
                })
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-20">
                <div className="hero w-11/12 mx-auto">
                    <div className="hero-content w-5/6 flex-col">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Sign Up here!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-5/6 shadow-2xl bg-base-100">
                            <form onSubmit={handleSignUp} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Username</span>
                                    </label>
                                    <input type="text" name="username" placeholder="Enter  username" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photoUrl" placeholder="Photo URL" className="input input-bordered" />
                                </div>
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
                                </div>
                                <div className='flex mt-5 justify-center space-x-10'>
                                    <button><BsGoogle onClick={handleGoogle} className='text-3xl text-[#3c3ff2]'></BsGoogle></button>
                                    <button><GrFacebook onClick={handleFacebook} className='text-3xl text-[#3c3ff2]'></GrFacebook></button>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary font-semibold"><Link to={'/'}>Sign up</Link></button>
                                </div>
                                {
                                    error && <p className="text-red-800 text-base">{error}</p>
                                }
                                <p>Already have an account? <Link to={"/signIn"} className="text-blue-900 font-semibold">Sign in</Link> here</p>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;