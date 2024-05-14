import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../CustomHooks/useAuth';
import PropTypes from 'prop-types';
const PivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation()
    console.log(location.pathname)
    if (loading) {
        return <progress className="progress w-56"></progress>
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