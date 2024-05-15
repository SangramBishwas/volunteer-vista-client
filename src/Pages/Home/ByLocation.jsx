import dhaka from "../../assets/dhaka-bangladesh.jpg"
import khulna from "../../assets/bangladesh-khulna.jpg"
import satkhira from "../../assets/bangladesh-satkhira.jpg"
import rajshahi from "../../assets/bangladesh-rajshahi.jpg"
import { GrLinkNext } from "react-icons/gr";
const ByLocation = () => {
    return (
        <div className="my-10 mx-5 md:mx-12 lg:mx-24">
            <h2 className="text-center lg:text-left font-bold text-xl md:text-3xl p-7">Volunteers Need By Location__</h2>
            <div className="px-7 gap-10 grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between">
                <div className="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src={dhaka} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Dhaka</h2>
                        <p>This is an extra category by post locations</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><GrLinkNext /></button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src={khulna} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Khulna</h2>
                        <p>This is an extra category by post locations</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><GrLinkNext /></button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src={satkhira} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Satkhira</h2>
                        <p>This is an extra category by post locations</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><GrLinkNext /></button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl image-full">
                    <figure><img src={rajshahi} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Rajshahi</h2>
                        <p>This is an extra category by post locations</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary"><GrLinkNext /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ByLocation;