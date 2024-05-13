import PropTypes from 'prop-types';

const Apost = ({ post }) => {
    const { category, title, image } = post;
    console.log(post)
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
            <div className="w-full h-64 bg-black bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url("${image}")` }}>
                <h2 className="text-white text-center font-bold italic">{title}
                </h2>

            </div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{category}</h3>

                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <button className="btn btn-sm px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-red-700 rounded hover:bg-red-500 dark:hover:bg-red-600 focus:bg-red-700 dark:focus:bg-red-600 focus:outline-none">Delete</button>
                    <button className="btn btn-sm px-2 py-1 text-xs     font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Update</button>
                </div>
            </div>
        </div>
    );
};

Apost.propTypes = {
    post: PropTypes.object
};

export default Apost;