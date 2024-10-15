import React from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet } from "react-router-dom";
import { UserHeader } from "../components/user/UserHeader";

export const UserLayout = () => {
    return (
        <div className="text-black">
            <Header />
            {/* <UserHeader/> */}

            <div className="min-h-96">
                <Outlet/>

            </div>
            <Footer />
        </div>
    );
};
