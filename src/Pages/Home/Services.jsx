import events from "../../assets/special-events-events-clip.png"
import team from "../../assets/team-management.jpg"
import organization from "../../assets/organization.png"
import { Slide } from "react-awesome-reveal";

const Services = () => {
    return (
        <div className="my-10 lg:my-20 mx-5 md:mx-12 lg:mx-24">
            <h2 className="my-10 text-center text-3xl font-bold">Our Services</h2>
            <div className="space-y-7">
                <div className="lg:mx-auto lg:w-[700px] bg-[#00d16926] flex items-center flex-col lg:flex-row hover:bg-orange-600 hover:text-white transition duration-300 hover:ease-in gap-7 p-7">
                    <img className="rounded-full w-40 h-40" src={events} alt="" />
                    <div>
                        <h3 className="font-bold text-2xl mb-5">Special Events</h3>
                        <p>we are generally provide special events with a 30% reduction in fees for digital land registration, encouraging cost-effective and efficient property transactions while promoting the adoption of digital platforms.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-7">
                    <Slide duration={2000}>
                        <div className="bg-[#00d16926] flex items-center flex-col lg:flex-row hover:bg-orange-600 hover:text-white transition duration-300 hover:ease-in gap-7 p-[25px]">
                            <img className="rounded-full w-40 h-40" src={team} alt="" />
                            <div>
                                <h3 className="font-bold text-2xl mb-5">Team Management</h3>
                                <p>Our team management simplifies tasks like rent collection, lease management, and maintenance requests, empowering landlords with efficient tools to oversee properties and communicate with tenants effectively.</p>
                            </div>
                        </div>
                    </Slide>
                    <Slide direction="right" duration={2000}>
                        <div className="bg-[#00d16926] flex items-center flex-col lg:flex-row hover:bg-orange-600 hover:text-white transition duration-300 hover:ease-in gap-7 p-7">
                            <img className="rounded-full w-40 h-40" src={organization} alt="" />
                            <div>
                                <h3 className="font-bold text-2xl mb-5">Organization Support</h3>
                                <p>Our organization support delivers assistance via digital channels like live chat and email, offering prompt responses and solutions to inquiries and issues, enhancing customer satisfaction and experience</p>
                            </div>
                        </div>
                    </Slide>

                </div>
            </div>
        </div>
    );
};

export default Services;