import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import registerImage from '../../assets/registerr-png.png'
import useAuth from "../../CustomHooks/useAuth";
import toast from "react-hot-toast";
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { creatUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const Register = (data) => {
        const { email, password, name, image } = data;
        creatUser(email, password)
            .then(() => {
                toast.success('Registration successful');
                // console.log(result.user)
                updateUserProfile(name, image)
                    .then(() => {
                        navigate("/")
                    })
                    .catch((error) => console.error(error))
            })
            .catch((error) => {
                toast.error(error)
                console.error(error)
            })
    }

    return (
        <div className="mx-5 md:mx-10 my-5 lg:mx-20">
            <div className="bg-gray-50 dark:bg-gray-900 flex items-center md:flex-row-reverse flex-col-reverse md:shadow-2xl lg:my-10 lg:pl-24 justify-between rounded-2xl shadow-2xl">
                <div className="py-5 w-full md:w-1/2">
                    <div className="card shrink-0 w-full max-w-sm bg-base-100 mx-auto">
                        <form onSubmit={handleSubmit(Register)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" placeholder="Name"
                                    name="name" className="input input-bordered" required
                                    {...register("name", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="image" placeholder="Photo URL" className="input input-bordered" required
                                    {...register("image", { required: true })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required
                                    {...register("email", { required: true })} />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="password" className="input input-bordered" required
                                    {...register("password", {
                                        required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z]).+$/
                                    })} />
                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-14 right-3">{showPassword ?
                                    <FaEye /> : <FaEyeSlash />}</span>
                                {errors.password && errors.password.type === "minLength" && (<span>Password must be atleast 6 digit.</span>)}
                                {errors.password && errors.password.type === "pattern" && (<span>Password must be atleast one uppercase and one lowercase letter.</span>)}
                                <div className="flex justify-between">
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                    <label className="label">
                                        <span className="text-sm">Already have account? <Link to="/login" className="hover:underline font-semibold">Login</Link>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img className="w-full" src={registerImage} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Register;