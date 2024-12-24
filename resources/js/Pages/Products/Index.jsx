import { usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link } from "@inertiajs/react";
import { FaArrowRight, FaShoppingCart } from "react-icons/fa"; // เพิ่มไอคอน

export default function Products({ products }) {
    const { auth } = usePage().props;

    const ProductCard = ({ product }) => (
        <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform transition-all hover:scale-105">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <FaShoppingCart className="text-white text-3xl" /> {/* ไอคอนตรงกลาง */}
                </div>
            </div>
            <div className="flex flex-col p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800 truncate">
                    {product.name}
                </h3>
                <p className="text-sm text-gray-500">
                    {product.description.slice(0, 80)}...
                </p>
                <p className="text-xl font-bold text-green-600">${product.price}</p>
                <Link
                    href={`/products/${product.id}`}
                    className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition duration-300"
                >
                    View Details <FaArrowRight className="ml-2" /> {/* ไอคอนลูกศร */}
                </Link>
            </div>
        </div>
    );

    const LayoutWrapper = ({ children }) => (
        <div className="bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{children}</div>
        </div>
    );

    return auth.user ? (
        <AuthenticatedLayout>
            <LayoutWrapper>
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800">
                        Our Premium Products
                    </h1>
                    <p className="text-lg text-gray-600 mt-4">
                        Handpicked just for you. Discover the difference.
                    </p>
                </header>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>
            </LayoutWrapper>
        </AuthenticatedLayout>
    ) : (
        <GuestLayout>
            <LayoutWrapper>
                <header className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-800">
                        Explore Our Collections
                    </h1>
                    <p className="text-lg text-gray-600 mt-4">
                        Sign in to unlock exclusive access.{" "}
                        <Link href="/login" className="text-green-600 underline">
                            Log in now
                        </Link>
                    </p>
                </header>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>
            </LayoutWrapper>
        </GuestLayout>
    );
}
