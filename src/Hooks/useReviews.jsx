import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useReviews = () => {
    const axiosSecure = useAxiosSecure()
    const { refetch, data: allReviews = [] } = useQuery({
        queryKey: ['allReviews'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reviews')
            return res.data
        }
    })
    // toDO: return loading here
    return [allReviews, refetch]
};

export default useReviews;