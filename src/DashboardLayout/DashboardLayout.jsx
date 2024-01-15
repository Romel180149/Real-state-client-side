import { Outlet } from "react-router-dom";
import Dash_Nav from "./Dash_Nav/Dash_Nav";
// import Navbar from "../layout/Shared/Navbar/Navbar";
import Dash_Header from "./Dash_Header/Dash_Header";
import { Helmet } from "react-helmet";

const DashboardLayout = () => {
    return (
        <div className="bg-base-200 h-full">
            <Helmet>
                <title>Bery | Dashboard</title>
            </Helmet>
            <div className=" mx-auto">
                <Dash_Header></Dash_Header>
                <div className="flex w-auto mx-auto">
                    <Dash_Nav></Dash_Nav>
                    <Outlet></Outlet>
                    {/* <h1 className="bg-black">this is dashboard layout</h1> */}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;