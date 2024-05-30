import { Helmet } from "react-helmet-async";
import useAuth from "../../CustomHooks/useAuth";

const MyProfile = () => {
    const { user, updateUserProfile } = useAuth();

    const handleUpdateInfo = (e) => {
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoURl = form.get('photo');
        updateUserProfile(name, photoURl)
            .then(() => {
                location.reload();
            })
            .catch((error) => console.error(error))
    }
    return (
        <div className="hero w-full mx-auto lg:w-2/3 bg-base-200 rounded-3xl">
            <Helmet>
                <title>Dashboard | Update Profile</title>
            </Helmet>
            {
                user &&
                <div className="hero-content lg:items-start gap-10 flex-col lg:flex-row">
                    <img className="rounded-full w-24 h-24" src={user.photoURL} />
                    <div>
                        <h1 className="text-2xl lg:text-4xl font-bold">My Profile!</h1>
                        <div className="flex items-center gap-5 my-5">
                            <h2 className="text-xl font-bold">Name:</h2>
                            <h4 className="text-xl font-semibold">{user?.displayName || 'Not found'}</h4>
                        </div>
                        <div className="flex items-center gap-5 my-5">
                            <h2 className="text-xl font-bold">Email:</h2>
                            <h4 className="text-xl font-semibold">{user.email}</h4>
                        </div>
                        <p className="py-4">Now you can update your profile information. So if you want to update your personal information, please click /Edit Profile/ button here... </p>
                        <div className="card-actions justify-center md:justify-end">
                        <button className="btn text-lg btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>Edit Profile</button>
                        </div>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h2 className="text-3xl font-bold text-center">Update Information</h2>
                                <p className="py-4">You can only update your name and photo as well.</p>
                                <form onSubmit={handleUpdateInfo} method="dialog">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input type="text" placeholder="Name"
                                            name="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text"
                                            name="photo"
                                            placeholder="Photo URL" className="input input-bordered" />
                                    </div>
                                    <div className="flex justify-end mt-5">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Update</button>
                                    </div>
                                </form>
                            </div>
                        </dialog>

                    </div>
                </div>
            }

        </div>
    );
};

export default MyProfile;