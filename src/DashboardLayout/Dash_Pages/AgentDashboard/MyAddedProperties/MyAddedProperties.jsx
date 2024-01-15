import { useContext } from "react";
import useProperty from "../../../../hooks/useProperty";
import { ProviderContext } from "../../../../Provider/Provider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";


const MyAddedProperties = () => {
    const { user } = useContext(ProviderContext)
    const axiosSecure = useAxiosSecure()
    const [allProperties, refetch] = useProperty()
    const agentProperties = allProperties.filter(property => property.Agent_email === user?.email)
    // console.log(agentProperties, 'all agent properties')

    const handleDeleteProperty = (propertyID) => {
        console.log(propertyID)
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
                const res = await axiosSecure.delete(`/property/${propertyID}`)
                console.log(res.data)
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Property has been deleted successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                // send the user to the login page by navigate
                // navigate('/login')
            }
        });
    }

    return (
        <div className="ml-[300px] bg-base-300 w-full min-h-screen mt-[90px]">
            <div className="grid grid-cols-3 justify-items-center min-w-full pt-[100px]">
                {
                    agentProperties.map(agentProperty => (
                        <div key={agentProperty._id} className="card w-[410px] h-[542px] bg-base-100 shadow-xl rounded-lg relative hover:bottom-2">
                            <figure><img className="w-full" src={agentProperty.Property_img} alt="Shoes" /></figure>
                            <div className="card-body pt-5">
                                <div className="flex gap-3 items-center mb-3">
                                    <img className="w-[44px] h-[44px] rounded-full" src={agentProperty.Agent_img} alt="" />
                                    <div>
                                        <p className="text-[#0b2c3d] font-bold">{agentProperty.Agent_name}</p>
                                        <div className="badge text-white bg-[#0b2c3d]">{agentProperty.verification_status}</div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <h2 className="card-title text-[#0b2c3d] text-[26px] lora-font">
                                        {agentProperty.Property_title}
                                    </h2>
                                </div>
                                <p>{agentProperty.Property_location}</p>
                                <div>
                                    <p className="text-[18px] text-[#0b2c3d] lora-font font-semibold">Price: ${agentProperty.Min_price} - ${agentProperty.Max_price}</p>
                                </div>
                                <div className="divider my-[8px]"></div>
                                <div className={`flex justify-between items-center ${agentProperty.verification_status === 'Rejected' ? "" : "gap-4"}`}>
                                    <div className="w-1/2">
                                        {
                                            agentProperty.verification_status === 'Rejected' ?
                                                <></>
                                                :
                                                <Link to={`updateProperty/${agentProperty._id}`}>
                                                    <button className="btn bg-[#0b2c3d] text-white w-full">Update</button>
                                                </Link>
                                        }

                                    </div>
                                    <div className={`${agentProperty.verification_status === 'Rejected' ? "min-w-full" : "w-1/2"}`}>
                                        <button onClick={() => handleDeleteProperty(agentProperty._id)} className="btn bg-[#0b2c3d] text-white w-full">Delete</button>
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

export default MyAddedProperties;