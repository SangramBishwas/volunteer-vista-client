import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../CustomHooks/useAuth';
import PropTypes from 'prop-types';
const PivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation()
    if (loading) {
        return <div className="flex items-center"><span className="mx-auto loading loading-spinner loading-lg"></span></div>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to="/login" state={location.pathname} replace></Navigate>;
};

PivateRoute.propTypes = {
    children: PropTypes.node
};

export default PivateRoute;