import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { CartCards } from "../../components/user/Cards";
import toast from "react-hot-toast";
import { axiosInstance } from "../../config/axiosInstance";
import { loadStripe } from "@stripe/stripe-js";

export const Cart = () => {
    const [cartData, isLoading, error] = useFetch("/cart/get-cart");

    console.log("cartData====", cartData);

    const handleRemoveItem = async (courseId) => {
        try {
            const response = await axiosInstance({
                method: "DELETE",
                url: "/cart/remove-course",
                // data: { courseId : courseId },
                data:{courseId:courseId}
                
            });
            toast.success("item removed from cart");
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || "error while removing product");
        }
    };

    const makePayment = async () => {
        try {
            const stripe = await loadStripe(import.meta.env.VITE_STRIPE_Publishable_key);

            const session = await axiosInstance({
                url: "/payment/create-checkout-session",
                method: "POST",
                data: { products: cartData?.courses },
            });

            console.log(session, "=======session");
            const result = stripe.redirectToCheckout({
                sessionId: session?.data?.sessionId,
            });
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="">
            <div>

            {cartData?.courses?.map((value) => (
                <CartCards item={value} key={value._id} handleRemove={handleRemoveItem} />
            ))}
            </div>
            
            <div className="w-6/12 bg-base-300 flex flex-col items-center gap-5">
                <h2>Price summary</h2>

                <h2>Total Price: {cartData?.totalPrice}</h2>

                <button onClick={makePayment}  className="btn btn-success">Checkout</button>
            </div>
        </div>
    );
};
