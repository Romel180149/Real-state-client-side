import useReviews from "../../../../hooks/useReviews";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const ManageReviews = () => {
    const [allReviews, refetch] = useReviews()
    const axiosSecure = useAxiosSecure()

    const handleDeleteReview = (reviewID) => {
        console.log(reviewID)
        Swal.fire({
            title: "Want to delete??",
            text: "Are you sure you want to delete this review?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/reviews/${reviewID}`)
                console.log(res.data)
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }


    return (
        <div className="ml-[300px] w-full pt-[90px]">

            <section className="bg-base-300 min-w-full min-h-screen">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <h2
                        className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
                    >
                        All the reviews which you have reviewed
                    </h2>

                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                        {
                            allReviews.map(review => (
                                <blockquote
                                    key={review._id}
                                    className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            alt="Man"
                                            src={review.Reviewer_img}
                                            className="h-14 w-14 rounded-full object-cover border"
                                        />

                                        <div>
                                            <p className="mt-0.5 text-lg font-medium text-gray-900">{review.Reviewer_name}</p>
                                            <p className=" text-gray-400 font-bold text-[14px]">{review.Reviewer_email}</p>
                                        </div>
                                    </div>

                                    <div>

                                        <div className="mt-4">
                                            <p className="text-2xl lora-font font-semibold sm:text-3xl mt-[20px]">
                                                {review.Property_title}
                                            </p>

                                            <p className="mt-4 leading-relaxed text-gray-700">
                                                {review.Review_description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-[15px]">
                                        <div className=" text-sm font-medium text-gray-700 mt-4">
                                            &mdash; {review.formattedTime}
                                        </div>
                                        <button onClick={() => handleDeleteReview(review._id)} className="btn bg-[#0b2c3d] text-white">Delete</button>
                                    </div>


                                </blockquote>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageReviews;