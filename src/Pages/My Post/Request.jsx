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
        <div className="relative card flex-col md:flex-row lg:flex-row lg:h-2/3 card-side bg-base-100 shadow-xl">
            <figure className='md:w-1/2'><img src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between">
                    <h4 className="font-semibold">{category}</h4>
                    <h4 className="font-semibold">{location}</h4>

                </div>
                <div onClick={() => handleDelete(_id)} className="right-1 top-1 lg:absolute card-actions justify-end pb-5">
                    <button className="btn lg:btn-sm btn-primary">Cancel</button>
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