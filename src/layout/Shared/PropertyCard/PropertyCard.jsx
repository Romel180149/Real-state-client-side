import { Link, useLocation } from "react-router-dom";

const PropertyCard = ({ PropertyInfo }) => {
    console.log('this is', PropertyInfo)
    // const location = useLocation()
    // const pathname = location.pathname.includes('wishlist')
    // console.log('location', location)
    // console.log('pathname', pathname)
    return (
        <div>
            <div className="card md:w-[410px] h-[542px] bg-base-100 shadow-xl rounded-lg relative hover:bottom-2">
                <figure><img className="w-full" src={PropertyInfo.Property_img} alt="Shoes" /></figure>
                <div className="card-body pt-5">
                    <div className="flex gap-3 items-center mb-3">
                        <img className="w-[44px] h-[44px] rounded-full" src={PropertyInfo.Agent_img} alt="" />
                        <div>
                            <p className="text-[#0b2c3d] font-bold">{PropertyInfo.Agent_name}</p>
                            <div className="badge text-white bg-[#0b2c3d]">{PropertyInfo.verification_status}</div>
                        </div>
                    </div>
                    <div className="">
                        <h2 className=" font-bold text-[#0b2c3d] text-[26px] lora-font truncate  ">
                            {PropertyInfo.Property_title}
                        </h2>
                    </div>
                    <p>{PropertyInfo.Property_location}</p>
                    <div className="divider my-[8px]"></div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-[18px] text-[#0b2c3d] lora-font font-semibold">Price: ${PropertyInfo.Min_price} - ${PropertyInfo.Max_price}</p>
                        </div>
                        <div>
                            <Link to={`details/${PropertyInfo._id}`}>
                                <button className="btn bg-[#0b2c3d] text-white">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;