import React, { useEffect } from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { UserHeader } from "../components/user/UserHeader";
import { axiosInstance } from "../config/axiosInstance";
import { ProtectRoute } from "../router/ProtectRoute";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, saveUser } from "../redux/features/userSlice";

export const UserLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { userAutherized } = useSelector((state) => state.user);

    const checkUser = async () => {
        try {
            const response = await axiosInstance({ method: "GET", url: "/user/check-user" });
            console.log(response, "====response");
            dispatch(saveUser(response?.data?.data));
        } catch (error) {
            console.log(error?.response?.data, "===error");
            dispatch(clearUser());
        }
    };

    useEffect(() => {
        checkUser();
    }, [location.pathname]);

    return (
        <div className="">
            {userAutherized ? <UserHeader /> : <Header />}

            <div className="min-h-96 px-24 py-14">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
