import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../CustomHooks/useAuth";
import toast from "react-hot-toast";
// import { FaGoogle } from "react-icons/fa";
const Login = () => {
    // const [showPassword, setShowPassword] = useState(false);
    const { userLogin, googleLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)
        userLogin(email, password)
            .then(result => {
                console.log(result);
                toast.success('Logged in successfully')
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => {
                toast.error('Invalid email and password')
                console.error(error)
            })
    }
    const handleLoginWithGoogle = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user);
                toast.success('Logged in successfully')
                navigate(location?.state ? location.state : "/");
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="bg-gray-50 dark:bg-gray-900 my-10">
            <div className="mx-auto w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@anymail.com" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div className="flex items-center justify-between">
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            <Link to="/register" className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Donot have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                            </Link>
                        </div>
                        <button className="w-full btn btn-primary">Sign in</button>
                    </form>
                    <div className="space-y-5">
                        <hr />
                        <div className="flex justify-between items-center">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-xl dark:text-white">
                                Sign up with
                            </h1>
                            <button onClick={handleLoginWithGoogle} className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2">
                                <FcGoogle className="text-xl text-white bg-white mr-2 rounded" />
                                Sign in with Google
                            </button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;