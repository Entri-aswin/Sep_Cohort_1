import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { CourseCard } from "../../components/user/Cards";
import { useFetch } from "../../hooks/useFetch";
import { CoursePageSkelton } from "../../components/mentor/Skelton";

export const Course = () => {
    console.log("========= component rendering ==========");
    const [url, setUrl] = useState("/course/all-courses");

    const [courses, loading, error] = useFetch(url);


    const changeUrl = () => {
        setUrl("/cart/get-cartItems");
    };

    {
        return loading ? (
            <CoursePageSkelton />
        ) : (
            <div>
                <button onClick={changeUrl} className="btn btn-success">changeUrl</button>
                <div className="grid gap-y-20 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
                    {courses.map((value) => (
                        <CourseCard course={value} key={value._id} />
                    ))}
                </div>
            </div>
        );
    }
};
