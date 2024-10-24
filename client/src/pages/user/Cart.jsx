import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { CartCards } from "../../components/user/Cards";
import toast from "react-hot-toast";
import { axiosInstance } from "../../config/axiosInstance";

export const Cart = () => {
    const [cartData, isLoading, error] = useFetch("/cart/get-cart");

    console.log("cartData====", cartData);

    const handleRemoveItem = async (courseId) => {
        try {
            const response = await axiosInstance({
                method: "DELETE",
                url: "/cart/remove-course",
                data: { courseId : courseId },
            });
            toast.success("item removed from cart");
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "error while removing product");
        }
    };

    return (
        <div>
            {cartData?.courses?.map((value) => (
                <CartCards item={value} key={value._id} handleRemove={handleRemoveItem} />
            ))}
        </div>
    );
};
