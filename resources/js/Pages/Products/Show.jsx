import { Link } from "@inertiajs/react";

export default function Show({ product }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-10 px-4 flex justify-center items-center">
            <div className="max-w-3xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all hover:scale-105">
                {/* ภาพสินค้า */}
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover"
                />

                {/* รายละเอียดสินค้า */}
                <div className="p-8">
                    <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center ">
                        {product.name}
                    </h1>
                    <p className="text-gray-700 text-center leading-relaxed mb-6">
                        {product.description}
                    </p>
                    <p className="text-xl font-semibold text-blue-600 mb-6 text-center ">
                        Price: ${product.price.toLocaleString()}
                    </p>
                </div>

                {/* ปุ่ม Back */}
                <div className="flex justify-center pb-8">
                    <Link
                        href="/products"
                        className="text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-8 py-4 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
                    >
                        Back to All Products
                    </Link>
                </div>
            </div>
        </div>
    );
}
