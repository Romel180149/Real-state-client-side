import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { ProviderContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";

// ToDo: this component will be used as admin route protection
const AdminRoute = ({children}) => {
    const { user, loading } = useContext(ProviderContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <div className="mx-auto min-h-screen flex items-center">
            <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        </div>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;