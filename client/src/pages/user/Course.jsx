import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { CourseCard } from "../../components/user/Cards";

export const Course = () => {
    const [courses, setCourses] = useState([]);

    const fetchCourses = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: "/course/all-courses",
            });
            setCourses(response?.data?.data);
            console.log("response===", response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return <div>

        {courses.map((value,index)=>(
            <CourseCard course={value} key={value._id}  />
        ))}

    </div>;
};
