import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { ProviderContext } from "../Provider/Provider";
import useAxiosSecure from "./useAxiosSecure";

const useAgent = () => {
    const {user} = useContext(ProviderContext)
    const axiosSecure = useAxiosSecure()
    const {data: isAgent, isPending: isAgentLoading} = useQuery({
        queryKey: [user?.email, 'isAgent'],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async() => {
            const res = await axiosSecure.get(`/allUsers/agent/${user?.email}`)
            console.log(res.data);
            return res.data?.agent;
        }
    })
    return [isAgent, isAgentLoading]
};

export default useAgent;
