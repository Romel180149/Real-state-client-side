import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { ProviderContext } from "../Provider/Provider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user} = useContext(ProviderContext)
    const axiosSecure = useAxiosSecure()
    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async() => {
            const res = await axiosSecure.get(`/allUsers/admin/${user?.email}`)
            console.log(res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;