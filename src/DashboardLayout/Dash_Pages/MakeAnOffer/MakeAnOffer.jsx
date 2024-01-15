import { useParams } from "react-router-dom";
import useWishData from "../../../hooks/useWishData";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const MakeAnOffer = () => {
    const [wishData] = useWishData();
    const currentOffer = useParams()
    const axiosSecure = useAxiosSecure()
    // const [, refetch] = useWishData()
    // State variables to store the extracted values
    // const [minOffer, setMinOffer] = useState();
    // const [maxOffer, setMaxOffer] = useState();
    let offerData = wishData.filter(data => data._id === currentOffer.id)
    offerData = offerData[0]
    console.log(offerData)
    const minOffer =  offerData?.Min_price
    const maxOffer = offerData?.Max_price


    const handleMakeOffer = e => {
        e.preventDefault();
        const form = e.target;
        const Buying_date = form.Buying_date?.value
        const offered_Price = form?.offered_Price?.value
        const offeredProperty = {
            wishID: offerData._id,
            propertyID: offerData.propertyID,
            Property_img: offerData.Property_img,
            Property_title: offerData.Property_title,
            Property_location: offerData.Property_location,
            Agent_name: offerData.Agent_name,
            Agent_email: offerData.Agent_email,
            Agent_img: offerData.Agent_img,
            BuyerEmail: offerData.wishUserEmail,
            BuyerName: offerData.wishUserName,
            Buying_date,
            offered_Price,
            status: 'pending'
        }


        // const checkAmount = offeredProperty.offered_Price 

        if (offered_Price >= minOffer && offered_Price <= maxOffer) {
            console.log('yes')
            axiosSecure.post('/property_bought', offeredProperty)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Offer sent successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch data to update the cart length
                        // refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "Offer denied",
                text: `Thank you for your offer! However, this product's price range is between $${offerData?.Min_price} - $${offerData?.Max_price}. Your current offer falls outside this range. Please adjust accordingly`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Offer Again",
            }).then((result) => {
                if (result.isConfirmed) {
                    // send the user to the login page by navigate
                    // navigate('/login')
                }
            });
        }
        // console.log('OfferedProperty info', offeredProperty)
    }



    return (
        <div className="ml-[300px] w-full min-h-screen mt-[90px]">
            <section className="bg-gray-100 h-full">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="">
                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form onSubmit={handleMakeOffer} className="space-y-4">
                                <h1 className="text-[#0b2c3d] text-center text-[36px] font-semibold">Property price: ${offerData?.Min_price} - ${offerData?.Max_price}</h1>
                                <div>
                                    <label >Property Title</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                        placeholder={offerData?.Property_title}
                                        disabled
                                        type="text"
                                        name="Property_title"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label>Agent Name</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                            placeholder={offerData?.Agent_name}
                                            disabled
                                            type="text"
                                            name="Agent_name"
                                        />
                                    </div>
                                    <div>
                                        <label>Location</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                            placeholder={offerData?.Property_location}
                                            disabled
                                            type="text"
                                            name="Property_location"
                                        />
                                    </div>

                                    <div>
                                        <label>Buyer Name</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                            placeholder={offerData?.wishUserName}
                                            disabled
                                            type="text"
                                            name="BuyerName"
                                        />
                                    </div>
                                    <div>
                                        <label>Buyer email</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                            placeholder={offerData?.wishUserEmail}
                                            disabled
                                            type="email"
                                            name="BuyerEmail"
                                        />
                                    </div>

                                    <div>
                                        <label>Buying date</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-400 p-3 text-sm text-black"
                                            placeholder="Phone Number"
                                            type="date"
                                            // value=''
                                            name="Buying_date"
                                        />
                                    </div>
                                    <div>
                                        <label>Offered Price</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                            placeholder="$"
                                            type="number"
                                            name="offered_Price"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 flex justify-center">
                                    <button
                                        type="submit"
                                        className="inline-block w-full hover:w-[250px] transition-all rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Make an offer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MakeAnOffer;