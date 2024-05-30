import { CgProfile } from "react-icons/cg";
import { MdOutlineHome, MdOutlineLocalPostOffice, MdPostAdd } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="py-5 px-20 flex gap-24">
            <div className="menu h-full p-3 space-y-2 w-60 md:1/3 lg:w-1/5 bg-blue-600 text-white">
                <div className="flex items-center p-2 space-x-4">
                    <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                    <div>
                        <h2 className="text-xl font-semibold">Leroy Jenkins</h2>
                        <span className="flex items-center space-x-1">
                            <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">View profile</a>
                        </span>
                    </div>
                </div>
                <div className="divide-y dark:divide-gray-300">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="dark:bg-gray-100 dark:text-gray-900">
                            <Link to="/dashboard/my&profile" className="flex items-center p-2 space-x-3 rounded-md">
                                <CgProfile className="text-xl" />
                                <span className="text-lg">My Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center p-2 space-x-3 rounded-md">
                                <MdOutlineLocalPostOffice className="text-xl"></MdOutlineLocalPostOffice>
                                <span className="text-lg">My Posts</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <MdPostAdd className="text-xl"/>
                                <span className="text-lg">Add Post</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="flex items-center p-2 space-x-3 rounded-md">
                            <MdOutlineHome className="text-xl" />
                                <span className="text-lg">Home</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="pt-4 pb-2 space-y-1 text-sm">
                        <li>
                            <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-600">
                                    <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                    <rect width="32" height="64" x="256" y="232"></rect>
                                </svg>
                                <span className="text-lg">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className=" w-2/3 lg:w-4/5">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;