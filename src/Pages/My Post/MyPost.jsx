import { useEffect, useState } from "react";
import useAuth from "../../CustomHooks/useAuth";
import useAxios from "../../CustomHooks/useAxios";
import Apost from "./Apost";
import Request from "./Request";
import noDataAvailable from "../../assets/sorry-no-data.png"
import { Helmet } from "react-helmet-async";
const MyPost = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    const [posts, setPosts] = useState([]);
    const [requests, setRequests] = useState([]);
    // const url = `/myPost/${user?.email}`
    useEffect(() => {
        axiosSecure.get(`/myPost/${user?.email}`)
            .then(res => setPosts(res.data))
    }, [axiosSecure, user])

    useEffect(() => {
        axiosSecure.get(`/myRequests/${user?.email}`)
            .then(res => setRequests(res.data))
    }, [axiosSecure, user])


    return (
        <div className="mx-5 md:mx-12 lg:mx-24 my-5 lg:my-5">
            <Helmet>
                <title>
                    VolunteerVista | My Post
                </title>
            </Helmet>
            <h2 className="text-center font-bold text-xl md:text-3xl pb-10">My Needed Posts</h2>
            {posts.length === 0 ?
                <div className="w-full">
                    <img className="mx-auto" src={noDataAvailable} alt="No data" />
                </div> :
                <div className="my-5 gap-7 grid md:grid-cols-2">
                    {
                        posts.map(post => <Apost
                            key={post._id}
                            post={post}
                            posts={posts}
                            setPosts={setPosts}></Apost>)
                    }
                </div>}
            <h2 className="text-center font-bold text-xl md:text-3xl py-10">My Volunteer Requests</h2>

            {requests.length === 0 ?
                <div className="w-full">
                    <img className="mx-auto" src={noDataAvailable} alt="No data" />
                </div> :
                <div className="my-5 gap-7 grid md:grid-cols-2">
                    {
                        requests.map(request => <Request
                            key={request}
                            requests={requests}
                            setRequests={setRequests}
                            request={request}></Request>)
                    }
                </div>}

        </div>
    );
};

export default MyPost;