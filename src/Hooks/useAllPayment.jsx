import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { ProviderContext } from "../Provider/Provider";


const useAllPayment = () => {
    const {user} = useContext(ProviderContext)
    const axiosSecure = useAxiosSecure()
    const { refetch, data: allPayment = []} = useQuery({
        queryKey: ['allPayment', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`)
            return res.data
        }
    })
    return [allPayment, refetch]
};

export default useAllPayment;