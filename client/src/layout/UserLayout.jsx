import React from "react";
import { Header } from "../components/user/Header";
import { Footer } from "../components/user/Footer";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
    return (
        <div className="text-black">
            <Header />

            <div className="min-h-96">
                <Outlet/>

            </div>
            <Footer />
        </div>
    );
};
