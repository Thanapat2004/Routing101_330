import { Link } from "@inertiajs/react";
import { FaArrowLeft } from "react-icons/fa"; // นำเข้าไอคอนจาก react-icons


export default function Show({ product }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-12 px-4 flex justify-center items-center">
            <div className="max-w-3xl w-full bg-white shadow-xl rounded-3xl overflow-hidden transform transition-all hover:scale-105">
                {/* ภาพสินค้า */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover sm:h-96 lg:h-80 rounded-t-3xl"
                />

                {/* รายละเอียดสินค้า */}
                <div className="p-8">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center leading-tight">
                        {product.name}
                    </h1>
                    <p className="text-lg text-gray-600 text-center mb-6 max-w-xl mx-auto">
                        {product.description}
                    </p>
                    <p className="text-2xl font-semibold text-green-600 mb-6 text-center">
                        Price: ${product.price.toLocaleString()}
                    </p>
                </div>

                {/* ปุ่ม Back พร้อมไอคอน */}
                <div className="flex justify-center pb-8">
                    <Link
                        href="/products"
                        className="flex items-center text-white bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 px-8 py-4 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
                    >
                        <FaArrowLeft className="mr-3" /> {/* ไอคอนลูกศร */}
                        Back to All Products
                    </Link>
                </div>
            </div>
        </div>
    );
}
