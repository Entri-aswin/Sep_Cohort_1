import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { axiosInstance } from "../../config/axiosInstance";
import toast from "react-hot-toast";

export const CourseDetails = () => {

    const { id } = useParams();
    const [courseDetails,isLoading]=useFetch(`/course/courseDetails/${id}`)

    const handleAddToCart = async()=>{
      try {
        const response = await axiosInstance({
          method:"POST",
          url:"/cart/add-to-cart",
          data: {courseId:id}
        })
        toast.success('product added to cart')
      } catch (error) {
        console.log(error); 
        toast.error(error?.response?.data?.message ||  'error adding product to cart') 
      }
    }


    return (
        <div className="flex ">
            <div className="w-4/12">
              <img src={courseDetails?.image} alt="course-image" />
            </div>
            <div className="w-10/12">
              <h2 className="text-3xl">{courseDetails?.title}</h2>
              <p>{courseDetails?.description}</p>
              <button className="btn btn-success" onClick={handleAddToCart}>Add to cart</button>
            </div>
        </div>
    );
};
