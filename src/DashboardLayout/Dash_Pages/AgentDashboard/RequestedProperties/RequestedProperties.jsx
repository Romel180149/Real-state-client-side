import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useRequestedProperties from "../../../../hooks/useRequestedProperties";


const RequestedProperties = () => {
    const [requestedProperties, refetch] = useRequestedProperties()
    const axiosSecure = useAxiosSecure()
    console.log('Requested Properties', requestedProperties)


    const handleAccept = requestInfo => {
        axiosSecure.patch(`/requestedProperties/accept/${requestInfo._id}`)
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

    const handleReject = requestInfo => {
        axiosSecure.patch(`/requestedProperties/reject/${requestInfo._id}`)
            .then(res => {
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Request has been Rejected`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }



    return (
        <div className="bg-base-300 ml-[300px] w-full mt-[90px]">
            <div>
                <div className="overflow-x-auto">
                    <table className="table-lg w-full text-center">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <p>SL No.</p>
                                </th>
                                <th>Property Image</th>
                                <th>Title</th>
                                <th>Location</th>
                                <th>Buyer Name</th>
                                <th>Buyer Email</th>
                                <th>Offered Price</th>
                                <th>Status</th>
                                <th>Accept Request</th>
                                <th>Reject Request</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                requestedProperties.map((request, index) => (
                                    <tr key={request._id} className="border border-gray-300">
                                        <th>
                                            <p>{index + 1}</p>
                                        </th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={request.Property_img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{request.Property_title}</p>
                                        </td>
                                        <td>
                                            <p>{request.Property_location}</p>
                                        </td>
                                        <td>
                                            <p>{request.BuyerName}</p>
                                        </td>
                                        <td>
                                            <p>{request.BuyerEmail}</p>
                                        </td>
                                        <td>
                                            <p>${request.offered_Price}</p>
                                        </td>
                                        <td>
                                            <p className="capitalize">{request.status}</p>
                                        </td>
                                        <td className="capitalize">
                                            {
                                                request.status === 'pending' ?
                                                    <button onClick={() => handleAccept(request)} className="btn btn-ghost btn-xs">Accept</button>
                                                    : <p>{request.status}</p>
                                            }
                                        </td>
                                        <td className="capitalize">
                                            {
                                                request.status === 'pending' ?
                                                    <button onClick={() => handleReject(request)} className="btn btn-ghost btn-xs">Reject</button>
                                                    : <p>{request.status}</p>
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

export default RequestedProperties;