import ByLocation from "./ByLocation";
import Slider from "./Slider";
import VolunteersNeed from "./VolunteersNeed";

const Home = () => {
    return (
        <div>
            <Slider />
            {/* Banner Slider */}
            <VolunteersNeed />
            <ByLocation />
        </div>
    );
};

export default Home;