import { useContext } from "react";
import { useForm } from "react-hook-form"
import { ProviderContext } from "../../../../Provider/Provider";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
// const image_hosting_key = '206379d748d51b2a1554cf470cd5a0d4'
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddProperty = () => {
    const { user } = useContext(ProviderContext)
    // const { register, handleSubmit, watch } = useForm();
    const { register, handleSubmit, setValue } = useForm()
    const axiosPublic =useAxiosPublic()
    const axiosSecure  = useAxiosSecure()
    const onSubmit = async (data) => {
        console.log(data)
        fetch('property.json')
        // now have to upload the image in imgbb and get an url from the imgbb
        const imageFile = {image: data.Property_img[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // 
      
        if(res.data.success) {
            // posting the data to the server with photo url
            const propertyItem = {
                Agent_name: data.Agent_name,
                Agent_email: data.Agent_email,
                Agent_img: user.photoURL,
                Property_title: data.Property_title,
                Property_location: data.Property_location,
                Min_price: parseInt(data.Min_price),
                Max_price: parseInt(data.Max_price),
                description: data.description,
                Property_img: res.data.data.display_url,
                verification_status: 'Not verified',
            }
            const propertyRes = await axiosSecure.post('/property', propertyItem)
            console.log(propertyRes.data)
            if(propertyRes.data.insertedId){
                // show success
                Swal.fire({
                    title: "Property Added!",
                    text: "Your Property has been added, Wait for Admin verification to add the property at the website",
                    icon: "success"
                });
            }
        }
        console.log(res.data)
    }
    //     _id": "6560fdf86c8e29cfe58f1570",
    // "Property_img": "https://i.ibb.co/GRCDc4r/properties1.webp",

    // "Agent_name": "Emily Davis",------
    // Agent_email:
    // "Agent_img": "https://i.ibb.co/BjhHrdM/real-estate-agent-photo.png",

    // "Property_title": "Serene Mountain Cabin",
    // "Property_location": "Mountain Retreat, LMN",
    // Min_price
    // Max_price
    // "description": "Escape to the mount

    // "verification_status": "Verified",
    return (
        <div className="pl-[300px] w-full min-h-screen mt-[90px]">
            <div className="pt-[100px]">
                <div className="w-[800px] mx-auto bg-base-300">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4 px-[40px] py-[40px]"
                    >
                        <h1 className="text-[#0b2c3d] text-center text-[36px] font-semibold">Add New Property to sell</h1>




                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {/* Agent_name */}
                            <div>
                                <label >Agent name</label>
                                <input
                                    className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                    placeholder={user?.displayName}
                                    disabled
                                    type="text"
                                    {...register("Agent_name")}
                                />
                            </div>
                            {/* Agent_email */}
                            <div>
                                <label>Agent Email</label>
                                <input
                                    className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                    placeholder={user?.email}
                                    disabled
                                    type="text"
                                    {...register("Agent_email")}
                                />
                            </div>
                            {/* Property_title */}
                            <div>
                                <label>Property Title</label>
                                <input
                                    className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                    placeholder="Type your property title here"
                                    type="text"
                                    {...register("Property_title")}
                                />
                            </div>
                            {/* Property_location */}
                            <div>
                                <label>Property location</label>
                                <input
                                    className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                    placeholder="Type your property location here"
                                    type="text"
                                    {...register("Property_location")}
                                />
                            </div>
                            {/* Min_price */}
                            <div>
                                <label>Minimum Price</label>
                                <input
                                    className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                    placeholder='Minimum Price $'
                                    type="number"
                                    name="Min_price"
                                    {...register("Min_price")}
                                />
                            </div>
                            {/* Max_price */}
                            <div>
                                <label>Maximum Price $</label>
                                <input
                                    className="w-full rounded-lg border border-gray-400 p-3 text-sm text-black"
                                    placeholder="Phone Number"
                                    type="number"
                                    {...register("Max_price")}
                                />
                            </div>
                            {/* Property_img */}
                            <div>
                                <input
                                    type="file"
                                    className="file-input file-input-bordered w-full"
                                    {...register("Property_img")}
                                />
                            </div>

                        </div>
                        {/* description */}
                        <div>
                            <label>Property Description</label>

                            <textarea
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Type here"
                                rows="8"
                                type="number"
                                {...register("description")}
                            ></textarea>
                        </div>

                        <div className="mt-4 flex justify-center">
                            <button
                                type="submit"
                                onClick={() => {
                                    setValue("Agent_name", `${user?.displayName}`)
                                    setValue("Agent_email", `${user?.email}`)
                                }}
                                className="inline-block w-full hover:w-[250px] transition-all rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Add Property
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProperty;