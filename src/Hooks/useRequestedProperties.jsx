import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { ProviderContext } from "../Provider/Provider";

const useRequestedProperties = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(ProviderContext)
    const { refetch, data: requestedProperties = [] } = useQuery({
        queryKey: ['requestedProperties', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/requestedProperties?email=${user?.email}`)
            return res.data;
        }
    })
    return [requestedProperties, refetch]
};

export default useRequestedProperties;