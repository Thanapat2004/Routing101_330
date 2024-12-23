import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"; // สำหรับผู้ใช้ที่ล็อกอิน
import GuestLayout from "@/Layouts/GuestLayout"; // สำหรับผู้ใช้ที่ไม่ได้ล็อกอิน
import { Link } from "@inertiajs/react";
import SimpleFooter from "@/Components/footer"; // เรียกใช้ SimpleFooter

export default function Products({ products }) {
    const { auth } = usePage().props; // ตรวจสอบการล็อกอินของผู้ใช้

    // ตรวจสอบว่า user ล็อกอินหรือไม่
    if (auth.user) {
        return (
            <AuthenticatedLayout>
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mt-10 text-center mb-8 text-gray-500">
                        Products
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="card shadow-md p-4 border border-gray-200 rounded-lg transform transition-all duration-100 hover:scale-105 hover:shadow-2xl"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover rounded-lg mb-4"
                                />
                                <h2 className="text-xl font-semibold">
                                    {product.name}
                                </h2>
                                <p className="text-gray-600 mb-2">
                                    {product.description.slice(0, 60)}...
                                </p>
                                <p className="text-lg font-semibold text-blue-500">
                                    ${product.price}
                                </p>
                                <div className="flex justify-center mt-4">
                                    <Link
                                        href={`/products/${product.id}`}
                                        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 transition duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <GuestLayout>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-full max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mt-10 text-center mb-8 text-gray-500">
                    Products
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="card shadow-md p-4 border border-gray-200 rounded-lg transform transition-all duration-100 hover:scale-105 hover:shadow-2xl"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-xl font-semibold">
                                {product.name}
                            </h2>
                            <p className="text-gray-600 mb-2">
                                {product.description.slice(0, 60)}...
                            </p>
                            <p className="text-lg font-semibold text-blue-500">
                                ${product.price}
                            </p>
                            <div className="flex justify-center mt-4">
                                <Link
                                    href={`/products/${product.id}`}
                                    className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 transition duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="mt-4 text-center">
                    <Link href="/login" className="text-blue-500">
                        Log in to purchase
                    </Link>
                </p>
            </div>
            <SimpleFooter /> {/* เพิ่ม SimpleFooter ที่นี่ */}
        </GuestLayout>
    );
}
