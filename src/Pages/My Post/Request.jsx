import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import useAxios from '../../CustomHooks/useAxios';

const Request = ({ request, requests, setRequests }) => {
    const { _id, category, title, image, location } = request;
    const axiosSecure = useAxios();
    const handleDelete = (id) => {
        console.log('cancel this card', id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/requests/${id}`)
                    .then((res) => {
                        const data = res.data;
                        console.log(data)

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Canceled!",
                                text: "Your post has been deleted.",
                                icon: "success"
                            });

                            const remaining = requests.filter(item => item._id !== id);
                            setRequests(remaining)
                        }
                    });

            }
        });
    }
    return (
        <div className="card h-2/3 card-side bg-base-100 shadow-xl">
            <figure className='lg:w-1/2'><img src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex">
                    <div className="flex gap-2 items-center"><h4 className="font-semibold">Category</h4><span>: {category}</span></div>
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center"><h4 className="font-semibold">Location:</h4><span>: {location}</span></div>
                </div>
                <div onClick={() => handleDelete(_id)} className="card-actions justify-end pb-5">
                    <button className="btn btn-primary">Cancel</button>
                </div>
            </div>
        </div>
    );
};

Request.propTypes = {
    request: PropTypes.object,
    requests: PropTypes.array,
    setRequests: PropTypes.func
};

export default Request;