import { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

export const useFetch = (url) => {
    const [data, setData] = useState();
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState("");

    const fetchData = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: url,
            });
            setData(response?.data?.data);
            setIsloading(false);
        } catch (error) {
            console.log(error);
            setError(error);
        }finally{
            setIsloading(false)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return [data, isLoading, error];
};
