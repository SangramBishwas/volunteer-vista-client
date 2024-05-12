import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NeedVolunteer = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        axios('/public/volunteers.json')
            .then(res => setVolunteers(res.data))
    }, [])
    console.log(volunteers)
    return (
        <div className="mx-12 my-5 md:my-10 lg:mx-24">
            <h2 className="text-center font-bold text-2xl md:text-3xl">Volunteer Needs Now</h2>

            <form className="my-5 md:my-10 max-w-md mx-auto">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by title..." required />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>

            <div className="gap-7 grid md:grid-cols-2 lg:grid-cols-3">
                {
                    volunteers.map((volunteer) => <div key={volunteer._id} className="card w-96 bg-base-100 shadow-xl">
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
                                <Link to={`/need&volunteer/${volunteer._id}`}>
                                    <button className="btn btn-primary text-lg">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default NeedVolunteer;