import { FaBan } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";

const Cart = () => {

    const product = {
        name: "burger",
        quantity: 2,
        price: 25.60,
        color: "bg-red-700"
    }

    return (
        <div className="py-8 h-full">
            <div className="relative h-full">
                <div className="bg-white p-3 flex flex-col justify-between h-[70vh]">
                    <div className="">
                        <div className="card flex gap-2 justify-between">
                            <div className="flex gap-2">
                                <div className={`${product.color} h-10 w-10`}></div>

                                <div className="">
                                    <p>{product.name}</p>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <p>{product.price}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <hr />
                        <p>Price</p>
                        <hr />
                        <p>VAT</p>
                        <hr />
                        <div className="flex justify-between items-center">
                        <p>Total Price</p>
                        <p className="text-xl font-bold">Total Price</p>
                        </div>
                    </div>

                    <div className="flex gap-2 absolute w-full bottom-0 left-0">
                        <button className="">
                            <div className="min-w-16 h-12 bg-red-600 flex justify-center items-center rounded">
                                <FaBan className="text-white text-2xl" />
                            </div>
                        </button>

                        <button className="w-full">
                            <div className="w-full h-12 bg-green-600 flex justify-center items-center gap-2 rounded text-white text-2xl">
                                <FiCheck className="" />
                                <p> PAY</p>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;