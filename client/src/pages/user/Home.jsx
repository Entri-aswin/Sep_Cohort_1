import React from "react";

export const Home = () => {
    return (
        <div className="">
            <main className="min-h-96 flex gap-20 px-20 py-10 w-full">
                <div className="w-8/12">
                    <h1 className="font-bold text-4xl my-5  ">Welcome user, </h1>
                    <p className="text-xl font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aspernatur ratione sint odit minus, saepe distinctio
                        cupiditate necessitatibus nemo, laboriosam perspiciatis vero blanditiis, ut corrupti!
                    </p>
                </div>
                <div className="w-5/12">
                    <img className="w-full" src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png" alt="home-image" />
                </div>
            </main>
        </div>
    );
};
