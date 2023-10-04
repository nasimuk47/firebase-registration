import React from "react";
import { Authcontext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const privateRoute = ({ children }) => {
    const { user } = useContext(Authcontext);

    if (user) {
        return children;
    }
    return <Navigate to="/Login"></Navigate>;
};

export default privateRoute;
