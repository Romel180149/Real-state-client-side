import { useContext } from "react";
import { ProviderContext } from "../Provider/Provider";
import useAgent from "../hooks/useAgent";
import { Navigate, useLocation } from "react-router-dom";


// ToDo: this component will be used as agent route protection
const AgentRoute = ({children}) => {
    const { user, loading } = useContext(ProviderContext)
    const [isAgent, isAgentLoading] = useAgent()
    const location = useLocation()

    if (loading || isAgentLoading) {
        return <div className="mx-auto min-h-screen flex items-center">
            <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        </div>
    }
    if (user && isAgent) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AgentRoute;