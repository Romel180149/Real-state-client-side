import { useLocation } from "react-router-dom";


const Dash_Header = () => {
    const location = useLocation();
    const path = location.pathname;

    // Split the pathname using '/' as the delimiter and get the last element
    const lastPath = path.split('/').pop();

    console.log(lastPath);
    return (
        <div>
            <header className="bg-[#0b2c3d] fixed z-10  w-full py-[10px]">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center">
                        <div className="w-[300px] flex justify-center">
                            <a className="block text-teal-600" href="/">
                                <span className="sr-only">Home</span>
                                <img src="https://i.ibb.co/XtqfBDk/logo-white.png" alt="" />
                            </a>
                        </div>
                        <div className="text-center w-full p-4">
                            <h3 className="text-4xl lora-font text-white font-medium capitalize">
                                {
                                    lastPath == 'admin_profile' && 'Admin Profile'
                                    || lastPath == 'manageProperties' && 'Manage Properties'
                                    || lastPath == 'manage_users' && 'Manage Users'
                                    || lastPath == 'manageReviews' && 'Manage Reviews'
                                    // for agents routes
                                    || lastPath == 'agent_profile' && 'Agent Profile'
                                    || lastPath == 'add_property' && 'Add Property'
                                    || lastPath == 'myAddedProperties' && 'My Added Properties'
                                    || lastPath == 'mySoldProperties' && 'My Sold Properties'
                                    || lastPath == 'requestedProperties' && 'Requested Properties'
                                    // for user
                                    || lastPath == 'user_profile' && 'User Profile'
                                    || lastPath == 'wishlist' && 'My wishlist'
                                    || lastPath == 'property_bought' && 'property bought'
                                    || lastPath == 'myReviews' && 'My Reviews'

                                }
                            </h3>
                        </div>
                        {/* <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center gap-6 text-sm">
                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            About
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            Careers
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            History
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            Services
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            Projects
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="text-gray-500 transition hover:text-gray-500/75"
                                            href="/"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <div className="flex items-center gap-4">
                                <div className="sm:flex sm:gap-4">
                                    <a
                                        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                        href="/"
                                    >
                                        Login
                                    </a>

                                    <div className="hidden sm:flex">
                                        <a
                                            className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                                            href="/"
                                        >
                                            Register
                                        </a>
                                    </div>
                                </div>

                                <div className="block md:hidden">
                                    <button
                                        className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Dash_Header;