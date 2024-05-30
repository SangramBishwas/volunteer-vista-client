import { CgProfile } from "react-icons/cg";
import { MdOutlineHome, MdOutlineLocalPostOffice, MdPostAdd } from "react-icons/md";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../CustomHooks/useAuth";

const Dashboard = () => {
    const { user, LogOut } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        LogOut()
            .then(navigate("/"))
            .catch(error => console.error(error))
    }
    return (
        <div className="p-5 lg:px-20 flex flex-col lg:flex-row gap-24">
            <div className="menu h-full p-3 space-y-2 w-full lg:w-1/4 bg-blue-600 text-white">
                <div className="flex items-center p-2 space-x-4">
                    <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    <div>
                        <h2 className="text-xl font-semibold">{user?.displayName
                        }</h2>
                        <span className="flex items-center space-x-1">
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">{user?.email}</a>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col-reverse lg:flex-col divide-y dark:divide-gray-300">
                    <ul className="flex justify-between flex-row-reverse lg:flex-col pt-2 pb-4 space-y-1 text-sm">
                        <li className="dark:bg-gray-100 dark:text-gray-900">
                            <Link to="/dashboard/my&profile" className="flex items-center p-2 space-x-3 rounded-md">
                                <CgProfile className="text-xl" />
                                <span className="text-lg">My Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/add&volunteer" className="flex items-center p-2 space-x-3 rounded-md">
                                <MdPostAdd className="text-xl" />
                                <span className="text-lg">Add Post</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/my&post" className="flex items-center p-2 space-x-3 rounded-md">
                                <MdOutlineLocalPostOffice className="text-xl"></MdOutlineLocalPostOffice>
                                <span className="text-lg">My Posts</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="flex items-center p-2 space-x-3 rounded-md">
                                <MdOutlineHome className="text-xl" />
                                <span className="text-lg">Home</span>
                            </Link>
                        </li>
                        <li>
                            <button onClick={handleLogout} rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                                    <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                    <rect width="32" height="64" x="256" y="232"></rect>
                                </svg>
                                <span className="text-lg">Logout</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full lg:w-3/4">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;