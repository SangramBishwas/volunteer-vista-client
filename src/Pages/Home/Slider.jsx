import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import slider1 from "../../assets/team-background-3.jpg"
import slider2 from "../../assets/team-background-1.jpg"
import slider3 from "../../assets/team-background-2.jpg"
import { Link } from 'react-router-dom';

import { Typewriter } from 'react-simple-typewriter';
const Slider = () => {

    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}>
            <SwiperSlide>
                <img className='h-[300px] lg:h-[650px] w-full relative' src={slider2} alt="banner" />
                <div className='text-center text-white absolute top-10 left-6 lg:top-40 lg:left-64 space-y-3 lg:space-y-10'>
                    <h1 className="font-extrabold text-4xl lg:text-7xl">
                        <Typewriter
                            words={['Welcome To VolunteerVista']}
                            loop={5}
                            typeSpeed={50}
                        />
                    </h1>
                    <p>The biggest platform site. Where we can provide the best of best han made craft and also modern craft works like Ceramics and Pottery. <br />If you are here for the first time. You need to register.</p>
                    <button className='btn lg:text-lg font-bold'>
                        <Link to="/register">Register Now</Link>
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-[300px] lg:h-[650px] w-full relative' src={slider1} alt="banner" />
                <div className='text-center text-white absolute top-10 left-6 lg:top-40 lg:left-64 space-y-3 lg:space-y-10'>
                    <h1 className="font-extrabold text-4xl lg:text-7xl">Make Your Choice</h1>
                    <p>The biggest platform site. here we can provide the best of best han made craft and also modern craft works like Ceramics and Pottery. <br />If you want to buy and order something. So you need to see our items.</p>
                    <button className='btn lg:text-lg font-bold'>
                        <Link to="/need&volunteer">Find Volunteer</Link>
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-[300px] lg:h-[650px] w-full relative' src={slider3} alt="banner" />
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;