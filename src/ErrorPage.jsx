import { Link } from 'react-router-dom';
import errorpage from './assets/404-not-found-png.png'
const ErrorPage = () => {
    return (
        <div className="w-full min-h-screen flex justify-center flex-col text-center space-y-5">
            <img className='mx-auto' src={errorpage} alt="" />
            <h3 className='px-5'>Oops! It seems like the page you are looking for has taken a vacation. We could not find it anywhere on our servers.<br /> Please double-check the URL for any typos or head back to our homepage to explore other exciting destinations on our website.</h3>
            <Link to="/">
                <button className="btn btn-primary">Go To Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;