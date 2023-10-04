import React, { useContext, useState } from "react";
import Navbar from "./Navber";
import { Authcontext } from "./provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(Authcontext);
    const [registrationError, setRegistrationError] = useState(null);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        // Call createUser function to register the user
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                // You can add further logic here, such as redirecting the user or displaying a success message.
            })
            .catch((error) => {
                console.error(error);
                setRegistrationError(error.message); // Set the error message state
            });
    };

    return (
        <div>
            <Navbar /> {/* Render your navigation component */}
            <p className="text-4xl text-blue-400 text-center font-bold mt-5">
                Please register
            </p>
            <form onSubmit={handleRegister} className="w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered"
                        required
                        name="name" // Use lowercase "name"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Photo URL"
                        className="input input-bordered"
                        required
                        name="photo" // Use lowercase "photo"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                        name="email"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                        name="password"
                    />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                            Forgot password?
                        </a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    <a
                        className="text-center underline text-blue-600 "
                        href="/Login">
                        Login
                    </a>
                </div>
            </form>
            {registrationError && (
                <p className="text-red-500 mt-4">{registrationError}</p>
            )}
        </div>
    );
};

export default Register;
