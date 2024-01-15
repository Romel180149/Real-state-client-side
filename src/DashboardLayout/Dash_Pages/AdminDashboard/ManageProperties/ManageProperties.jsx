import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useProperty from "../../../../hooks/useProperty";
import CommonHeading from "../../../../layout/Shared/CommonHeading/CommonHeading";


const ManageProperties = () => {
    const [allProperties, refetch] = useProperty()
    const axiosSecure = useAxiosSecure()
    console.log(allProperties)

    const handleVerify = property => {
        axiosSecure.patch(`/property/verify/${property._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Request has been accepted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleReject = property => {
        axiosSecure.patch(`/property/reject/${property._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Request has been accepted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    return (
        <div className="ml-[300px] w-full bg-white mt-[90px]">
            {/* <CommonHeading
            heading={'Manage Properties'}
            ></CommonHeading> */}
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    SL No.
                                </th>
                                <th>Property Image</th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Agent Name</th>
                                <th>Agent Email</th>
                                <th>Price Range</th>
                                {/* <th>Verification Status</th> */}
                                <th>Make verify</th>
                                <th>Reject Property</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                allProperties.map((property, index) => (
                                    <tr key={property._id}>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={property.Property_img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {property.Property_title}
                                        </td>
                                        <td>
                                            {property.Property_location}
                                        </td>
                                        <td>
                                            {property.Agent_name}
                                        </td>
                                        <td>
                                            {property.Agent_email}
                                        </td>
                                        <td>
                                            ${property.Min_price} - ${property.Max_price}
                                        </td>
                                        {/* <td>
                                            {property.verification_status}
                                        </td> */}
                                        <td>
                                            {
                                                property.verification_status === 'Verified' ?
                                                    <>
                                                        {property.verification_status}
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            property.verification_status === 'Rejected' ?
                                                                <>{property.verification_status}</>
                                                                :
                                                                <>
                                                                    <button onClick={() => handleVerify(property)} className="btn btn-ghost bg-purple-500 text-white btn-xs">Verify</button>
                                                                </>
                                                        }
                                                    </>
                                            }
                                        </td>
                                        <td>
                                            {
                                                property.verification_status === 'Verified' ?
                                                    <>
                                                        {property.verification_status}
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            property.verification_status === 'Rejected' ?
                                                                <>{property.verification_status}</>
                                                                :
                                                                <>
                                                                    <button onClick={() => handleReject(property)} className="btn btn-ghost bg-purple-500 text-white btn-xs">Reject</button>
                                                                </>
                                                        }
                                                    </>
                                            }

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProperties;