import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import useAxios from '../../CustomHooks/useAxios';

const Apost = ({ post, posts, setPosts }) => {
    const { _id, category, title, image } = post;
    const axiosSecure = useAxios();

    const handleDelete = (id) => {
        console.log('delete this craft', id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/posts/${id}`)
                    .then((res) => {
                        const data = res.data;
                        console.log(data)

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your post has been deleted.",
                                icon: "success"
                            });

                            const remaining = posts.filter(item => item._id !== id);
                            setPosts(remaining)
                        }
                    });

            }
        });
    }
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div className="w-full h-64 bg-black bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url("${image}")` }}>
                <h2 className="text-white text-center font-bold italic">{title}
                </h2>

            </div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{category}</h3>

                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-red-700 rounded hover:bg-red-500 dark:hover:bg-red-600 focus:bg-red-700 dark:focus:bg-red-600 focus:outline-none">Delete</button>
                    <button className="btn btn-sm px-2 py-1 text-xs     font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Update</button>
                </div>
            </div>
        </div>
    );
};

Apost.propTypes = {
    post: PropTypes.object,
    posts: PropTypes.array,
    setPosts: PropTypes.func
};

export default Apost;