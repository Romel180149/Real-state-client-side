import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { ProviderContext } from "../Provider/Provider";

const useWishData = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(ProviderContext)
    const { refetch, data: wishData = [] } = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/wishlist?email=${user?.email}`)
            return res.data;
        }
    })
    return [wishData, refetch]
};

export default useWishData;