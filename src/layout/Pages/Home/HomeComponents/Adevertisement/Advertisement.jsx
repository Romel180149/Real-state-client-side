
import CommonHeading from "../../../../Shared/CommonHeading/CommonHeading";
import useProperty from "../../../../../hooks/useProperty";
import { Link } from "react-router-dom";

const Advertisement = () => {
    const [allProperties] = useProperty()
    const getAdvertisement = allProperties.filter(adProperies => adProperies.advertisement_status === 'advertised')
    // console.log(getAdvertisement)
    const advertisementProperties = getAdvertisement.slice(0, 4)
    return (
        <div className="max-w-[1320px] mx-auto mt-[120px]">
            <CommonHeading
                subHeading={'Best Choice'}
                heading={'Popular Properties'}
            ></CommonHeading>
            <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center justify-between gap-10">
                {
                    advertisementProperties.map(property => (
                        <div key={property._id} className="card mx-5  md:m-0  md:w-[410px] h-[542px] bg-base-100 shadow-xl rounded-lg relative hover:bottom-2">
                            <figure>
                                <img className="w-full" src={property.Property_img} alt="Shoes" />
                                <div className="badge badge-neutral absolute top-5 right-5">Advertisement</div>
                            </figure>
                            <div className="card-body">
                                <div className="flex justify-between">
                                    <h2 className="card-title text-[#0b2c3d] text-[26px] lora-font">
                                        {property.Property_title}
                                    </h2>
                                    <div className="badge text-white bg-[#0b2c3d] mt-[5px]">{property.verification_status}</div>
                                </div>
                                <p>{property.Property_location}</p>
                                <div className="divider my-[8px]"></div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <p className="text-[18px] text-[#0b2c3d] lora-font font-semibold">Price: ${property.Min_price} - ${property.Max_price}</p>
                                    </div>
                                    <div className="">
                                        <Link to={`all_properties/details/${property._id}`}>
                                            <button className="btn bg-[#0b2c3d] text-white">Details</button>
                                        </Link>
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

export default Advertisement;