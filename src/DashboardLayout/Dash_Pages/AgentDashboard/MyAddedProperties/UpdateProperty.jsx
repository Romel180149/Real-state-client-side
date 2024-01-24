import { useParams } from "react-router-dom";
import useProperty from "../../../../hooks/useProperty";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_key = '206379d748d51b2a1554cf470cd5a0d41';
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const UpdateProperty = () => {
    // const { user } = useContext(ProviderContext)
    const [allProperties] = useProperty()
    const updateID = useParams()
    const getUpdateProperty = allProperties.filter(update => update._id === updateID.id)
    const updateProperty = getUpdateProperty[0]
    console.log(allProperties)
    console.log(updateID)
    console.log('Updating property', updateProperty)

    // react-hook-form
    const { register, handleSubmit} = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = (data) => {
        console.log(data)

        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to update your existing property?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Update Property"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const imageFile = { image: data.Property_img[0] }
                const res = await axiosPublic.post(image_hosting_api, imageFile, {
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                });
                console.log(res.data)

                if (res.data.success) {
                    // posting the data to the server with photo url
                    const propertyItem = {
                        Property_title: data.Property_title,
                        Property_location: data.Property_location,
                        Min_price: parseInt(data.Min_price),
                        Max_price: parseInt(data.Max_price),
                        description: data.description,
                        Property_img: res.data.data.display_url,
                    }
                    const propertyRes = await axiosSecure.patch(`/property/${updateProperty._id}`, propertyItem)
                    console.log(propertyRes.data)
                    if (propertyRes.data.modifiedCount > 0) {
                        // show success
                        Swal.fire({
                            title: "Updated!",
                            text: "Your Property has been updated successfully",
                            icon: "success"
                        });
                    }
                }
            }
        });
    }
    return (
        <div className="pl-[300px] w-full min-h-screen">
            <div>
                <h1>thsi is add property route</h1>
                <div className="w-[800px] mx-auto bg-base-300">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4 px-[40px] py-[40px]"
                    >
                        <h1 className="text-[#0b2c3d] text-center text-[36px] font-semibold">Update Existing Property</h1>




                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {/* Agent_name */}
                            <div>
                                <label >Agent name</label>
                                <input
                                    className="w-full rounded-lg border border-gray-400 p-3 text-sm"
                                    placeholder={updateProperty?.Agent_name}
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
                                    placeholder={updateProperty?.Agent_email}
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
                                    defaultValue={updateProperty?.Property_title}
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
                                    defaultValue={updateProperty?.Property_location}
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
                                    defaultValue={updateProperty?.Min_price}
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
                                    placeholder="Maximum price $"
                                    defaultValue={updateProperty?.Max_price}
                                    type="number"
                                    {...register("Max_price")}
                                />
                            </div>
                            {/* Property_img */}
                            <div>
                                <input
                                    type="file"
                                    required
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
                                defaultValue={updateProperty?.description}
                                rows="8"
                                type="number"
                                {...register("description")}
                            ></textarea>
                        </div>

                        <div className="mt-4 flex justify-center">
                            <button
                                type="submit"
                                className="inline-block w-full hover:w-[250px] transition-all rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            >
                                Update Property
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProperty;