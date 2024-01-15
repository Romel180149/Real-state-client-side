
import { Link } from "react-router-dom";
import useWishData from "../../../../hooks/useWishData";
import PropertyCard from "../../../../layout/Shared/PropertyCard/PropertyCard";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Wishlist = () => {
    const [wishData, refetch] = useWishData()
    const axiosSecure = useAxiosSecure()

    const handleDeleteWish = (wishID) => {
        console.log(wishID)
        Swal.fire({
            title: "Want to delete??",
            text: "If you want to delete, click Confirm",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/wishlist/${wishID}`)
                console.log(res.data)
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "A property deleted from the wishlist",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }

    return (
        <div className=" w-full bg-base-200 p-[60px] ml-[300px] min-h-screen pt-[120px]">
            <div className="grid">
                {
                    wishData.map(data => (
                        <div key={data._id} className=" card card-side mb-6 lg:w-[600px] xl:min-w-[900px] mx-auto max-h-[380px] bg-base-100 shadow-xl rounded-lg relative hover:bottom-2">

                            <figure><img className="w-full h-full" src={data.Property_img} alt="Shoes" /></figure>
                            <div className="card-body pt-5">
                                <div className="flex gap-3 items-center mb-3">
                                    <img className="w-[44px] h-[44px] rounded-full" src={data.Agent_img} alt="" />
                                    <div>
                                        <p className="text-[#0b2c3d] font-bold">{data.Agent_name}</p>
                                        <div className="badge text-white bg-[#0b2c3d]">{data.verification_status}</div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <h2 className="card-title text-[#0b2c3d] text-[26px] lora-font">
                                        {data.Property_title}
                                    </h2>
                                </div>
                                <p>{data.Property_location}</p>
                                <div className="divider my-[8px]"></div>

                                <div className="flex justify-center items-center">
                                    <div>
                                        <p className="text-[24px] text-[#0b2c3d] lora-font font-semibold">Price: ${data.Min_price} - ${data.Max_price}</p>
                                    </div>
                                    {/* <div>
                                    <button className="btn bg-[#0b2c3d] text-white">Remove</button>
                                </div> */}
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div className="flex gap-5 justify-center">
                                        {/* <Link to={`details/${data._id}`}> */}
                                        <Link
                                            className="btn w-1/2 bg-[#0b2c3d] text-white"
                                            to={`makeOffer/${data._id}`}
                                        >
                                            <button>Make an offer</button>
                                        </Link>
                                        <button onClick={() => handleDeleteWish(data._id)} className="btn w-1/2 bg-[#0b2c3d] text-white">Remove</button>
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Wishlist;