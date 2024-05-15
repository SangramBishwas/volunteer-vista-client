import { Helmet } from "react-helmet-async";
import ByLocation from "./ByLocation";
import Slider from "./Slider";
import VolunteersNeed from "./VolunteersNeed";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    VolunteerVista | Home
                </title>
            </Helmet>
            <Slider />
            {/* Banner Slider */}
            <VolunteersNeed />
            <ByLocation />
            <Services />
        </div>
    );
};

export default Home;