// import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../CustomHooks/useAxios";

const VolunteersNeed = () => {
    const axiosSecure = useAxios();
    const [allVolunteers, setAllVolunteers] = useState([]);
    const url = '/posts'
    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setAllVolunteers(res.data))
    }, [axiosSecure])
    const sortByDeadline = (x, y) => {
        const seriaiA = new Date(x.deadline);
        const serialB = new Date(y.deadline);
        return seriaiA - serialB;
    }
    allVolunteers.sort(sortByDeadline);
    const volunteers = allVolunteers.slice(0, 6)
    
    return (
        <div className="mx-5 md:mx-12 lg:mx-24">
            <h2 className="text-center font-bold text-xl md:text-3xl py-5">Volunteer Needs Now</h2>
            <div className="my-5 gap-7 grid md:grid-cols-2 lg:grid-cols-3">
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
                                <Link to={`/posts/${volunteer._id}`}>
                                    <button className="btn btn-primary text-lg">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="card-actions justify-center my-10">
                <Link to="/need&volunteer">
                    <button className="btn w-40 text-lg btn-primary text-white">All Posts</button>
                </Link>
            </div>
        </div >
    );
};

export default VolunteersNeed;