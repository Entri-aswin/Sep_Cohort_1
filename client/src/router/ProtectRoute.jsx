import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export const ProtectRoute = () => {

    const userAutherized = useSelector((state)=>state.user.userAutherized)

    console.log('userAutherized======',userAutherized);
    
    const navigate = useNavigate();

    // useEffect(() => {
        if (!userAutherized) {
            navigate("/login");
        }
    // }, []);

    return userAutherized && <Outlet />;
};
