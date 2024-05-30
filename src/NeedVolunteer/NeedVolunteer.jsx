import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../CustomHooks/useAxios";
import { GrLinkNext } from "react-icons/gr";
import { Helmet } from "react-helmet-async";
import { CgMenuGridR } from "react-icons/cg";
const NeedVolunteer = () => {
    const axiosSecure = useAxios();
    const [volunteers, setVolunteers] = useState([]);
    const [searchVolunteers, setSearchVolunteers] = useState(' ');
    const [layout, setLayout] = useState('card');
    const url = '/posts'
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setVolunteers(res.data))
    }, [axiosSecure])

    const handleSearchInput = (e) => {
        e.preventDefault();
        const searchValue = e.target.value
        setSearchVolunteers(searchValue)
    }

    const volunteerPosts = volunteers.filter(post =>
        post.title.toLowerCase().includes(searchVolunteers.toLowerCase())
    );

    const switchToCard = () => {
        setLayout('card');
    };

    const switchToTable = () => {
        setLayout('table');
    };

    return (
        <div className="mx-5 md:mx-12 my-5 md:my-10 lg:mx-24">
            <Helmet>
                <title>
                    VolunteerVista | All Posts
                </title>
            </Helmet>
            <h2 className="text-center font-bold text-2xl md:text-3xl">Volunteer Needs Now</h2>
            <div className="my-10 md:my-20 flex justify-between items-center">
                <form className="w-1/2 max-w-md mx-auto">
                    <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" name="search" onChange={handleSearchInput} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by title....." required />
                    </div>

                </form>
                <div className="mx-10 dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="text-3xl md:text-4xl"><CgMenuGridR /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li onClick={switchToCard}><a>Card</a></li>
                        <li onClick={switchToTable}><a>Table</a></li>
                    </ul>
                </div>
            </div>

            {layout === 'card' ?
                <div className="gap-7 grid md:grid-cols-2 lg:grid-cols-3">
                    {volunteerPosts.map((volunteer) => <div key={volunteer._id} className="card lg:1/3 bg-base-100 shadow-xl">
                        <figure><img className="h-64 w-full" src={volunteer.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{volunteer.title}</h2>
                            <div className="flex">
                                <div className="flex gap-2 items-center"><h4 className="font-semibold">Category</h4><span>: {volunteer.category}</span></div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex gap-2 items-center"><h4 className="font-semibold">Last Date:</h4><span>: {volunteer.deadline}</span></div>
                            </div>
                            <div className="card-actions justify-end">
                                <Link to={`/posts/${volunteer._id}`}>
                                    <button className="btn btn-primary text-lg"><GrLinkNext /></button>
                                </Link>
                            </div>
                        </div>
                    </div>)}
                </div>
                :
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Deadine</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                volunteerPosts.map((post) => <tr key={post._id} className="hover:bg-base-200 cursor-pointer">
                                    <td>{post.title}</td>
                                    <td>{post.category}</td>
                                    <td>{post.deadline}</td>
                                    <td className="hover:underline"><Link to={`/posts/${post._id}`}>
                                        <button className="btn btn-sm btn-neutral text-lg"><GrLinkNext /></button>
                                    </Link></td>
                                </tr>

                                )
                            }

                            {/* row 2
                        <tr className="hover:bg-base-200 cursor-pointer">
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr> */}
                            {/* row 3 
                        <tr className="hover:bg-base-200 cursor-pointer">
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>*/}
                        </tbody>
                    </table>
                </div>}

        </div>
    );
};

export default NeedVolunteer;