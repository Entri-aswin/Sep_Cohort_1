import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { CourseCard } from "../../components/user/Cards";
import { useFetch } from "../../hooks/useFetch";
import { CoursePageSkelton } from "../../components/mentor/Skelton";

export const Course = () => {
    const [courses, loading,error] = useFetch("/course/all-courses");

    {
        return loading ? (
            <CoursePageSkelton />
        ) : (
            <div>
                <div className="grid gap-y-20 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
                    {courses.map((value) => (
                        <CourseCard course={value} key={value._id} />
                    ))}
                </div>
            </div>
        );
    }
};
