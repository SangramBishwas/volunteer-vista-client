import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import useAxios from '../../CustomHooks/useAxios';

const Request = ({ request, requests, setRequests }) => {
    const { _id, category, title, image, location } = request;
    const axiosSecure = useAxios();
    const handleDelete = (id) => {
        // console.log('cancel this card', id);

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
                        // console.log(data)

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
        <div className="card flex-col md:flex-row lg:flex-row lg:h-full card-side bg-base-100 shadow-xl">
            <div className="card w-full bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="request" /></figure>
                <div className="card-body space-y-4">
                    <h2 className="card-title">{title}</h2>
                    <div className='flex justify-between'>
                        <p>{category}</p>
                        <p>{location}</p>
                        <div onClick={() => handleDelete(_id)} className="card-actions justify-center pb-5">
                        <button className="btn md:btn-sm btn-primary">Cancel</button>
                    </div>
                    </div>
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