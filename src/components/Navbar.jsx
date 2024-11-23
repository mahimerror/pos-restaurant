import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    return (
        <div className="bg-white">
            <div className="container w-11/12 mx-auto py-2">
                <div className="flex items-center justify-between">
                    <div className="">
                        <button><IoMdMenu  className="text-2xl" /></button>
                    </div>

                    <div className="">
                        <p className="font-bold text-4xl">GO</p>
                    </div>

                    <div className="">
                        <button><FaRegUserCircle className="text-2xl" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;