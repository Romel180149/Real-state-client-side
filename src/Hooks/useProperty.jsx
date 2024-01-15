// import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useProperty = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: allProperties = [] } = useQuery({
        queryKey: ['allProperties'],
        queryFn: async () => {
            const res = await axiosSecure.get('/property')
            return res.data
        }
    }) 
    // toDO: return loading here
    return [allProperties, refetch]
};

export default useProperty;




// Navbar Color: #e9f1ff
// Main color: #0b2c3d
// Sub color: #b39359
