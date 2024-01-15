import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAgent from "../../hooks/useAgent";
import { useContext } from "react";
import { ProviderContext } from "../../Provider/Provider";
import './Dash_Nav.css'
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineGroups2 } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdAddHomeWork } from "react-icons/md";
import { MdAssignmentAdd } from "react-icons/md";
import { VscLayersActive } from "react-icons/vsc";
import { MdPendingActions } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdRateReview } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

const Dash_Nav = () => {
    const { user, loading, logOut } = useContext(ProviderContext)
    // ToDo: get is admin value from database
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isAgent, isAgentLoading] = useAgent()
    console.log(isAgent)
    if (loading || isAdminLoading || isAgentLoading) {
        return
    }
    const handleLogout = () => {
        logOut()
    }
    return (
        <div className="w-[300px] fixed bg-white">
            <div className="flex min-h-screen pt-[60px] flex-col justify-between border-e">
                <div className="px-4 py-6">
                    {/* <Link to="/">
                        <span
                            className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
                        >
                            Home
                        </span>
                    </Link> */}

                    <ul className="mt-6 space-y-1 dash_nav">
                        {
                            isAgent ? <>
                                <li>
                                    <NavLink
                                        to='/dashboard/agent_profile'
                                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                                    >
                                        <ImProfile className="text-[22px]"/>Agent Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/add_property'
                                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                                    >
                                        <MdAddHomeWork className="text-[22px]"/>Add Property
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to='/dashboard/myAddedProperties'
                                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                                    >
                                        <MdAssignmentAdd className="text-[22px]"/>My Added Properties
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        to='/dashboard/mySoldProperties'
                                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                                    >
                                       <VscLayersActive className="text-[22px]" /> My sold properties
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to='/dashboard/requestedProperties'
                                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                                    >
                                        <MdPendingActions className="text-[22px]"/>Requested properties
                                    </NavLink>
                                </li>
                            </>
                                :
                                <>
                                    {
                                        isAdmin ? <>
                                            <li>
                                                <NavLink
                                                    to='/dashboard/admin_profile'
                                                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                                                >
                                                    <MdOutlineAdminPanelSettings className="text-[22px]" /> Admin Profile
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/dashboard/manageProperties'
                                                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                                                >
                                                    <HiBuildingOffice2 className="text-[22px]" /> Manage Properties
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    to='/dashboard/manage_users'
                                                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                                                >
                                                    <MdOutlineGroups2 className="text-[22px]" /> Manage Users
                                                </NavLink>
                                            </li>

                                            <li>
                                                <NavLink
                                                    to='/dashboard/manageReviews'
                                                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                                                >
                                                    <MdOutlineRateReview className="text-[22px]" />Manage Reviews
                                                </NavLink>
                                            </li>
                                        </>
                                            :
                                            // this is user dashboard
                                            <>
                                                <li>
                                                    <NavLink
                                                        to='/dashboard/user_profile'
                                                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                                                    >
                                                      <FaRegUser className="text-[22px]"/>  My Profile
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to='/dashboard/wishlist'
                                                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                                                    >
                                                        <FaRegHeart className="text-[22px]"/> Wishlist
                                                    </NavLink>
                                                </li>

                                                <li>
                                                    <NavLink
                                                        to='/dashboard/property_bought'
                                                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                                                    >
                                                        <LuShoppingCart className="text-[22px]"/> Property bought
                                                    </NavLink>
                                                </li>

                                                <li>
                                                    <NavLink
                                                        to='/dashboard/myReviews'
                                                        className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                                                    >
                                                        <MdRateReview className="text-[22px]"/> My Reviews
                                                    </NavLink>
                                                </li>
                                            </>
                                    }
                                </>
                        }
                    </ul>

                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider"></div>
                    </div>
                    {/* Home routess --------- */}
                    <ul className=" space-y-1 dash_nav">
                        <li>
                            <NavLink
                                to='/'
                                className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                            >
                                <IoHome className="text-[22px]" /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/all_properties'
                                className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                            >
                                <HiBuildingOffice2 className="text-[22px]" /> All Properties
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                onClick={handleLogout}
                                to='/login'
                                className="flex items-center gap-2 rounded-lg px-4 py-2 text-lg font-medium text-gray-700"
                            >
                                <IoLogOutOutline className="text-[22px]"/> Log Out
                            </NavLink>
                        </li>
                    </ul>

                </div>

                <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 dash_nav">
                    <NavLink href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                        <img
                            alt="Man"
                            src={user?.photoURL}
                            className="h-10 w-10 rounded-full object-cover"
                        />

                        <div>
                            <p className="text-xs">
                                <strong className="block font-medium">{user?.displayName}</strong>

                                <span>{user?.email}</span>
                            </p>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Dash_Nav;