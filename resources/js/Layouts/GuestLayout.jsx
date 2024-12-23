import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children, produc }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-start bg-gray-100">
            {/* Logo Section */}
            <div className="mb-4 mt-6">
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div>

            {/* Content Section */}
            <div className="w-full max-w-7xl overflow-hidden bg-white px-6 py-8 shadow-md sm:rounded-lg">
                {children}
            </div>

            {/* Optional Products Section (produc prop) */}
            {produc && (
                <div className="w-full max-w-7xl overflow-hidden bg-white px-6 py-8 shadow-md sm:rounded-lg mt-6">
                    {produc}
                </div>
            )}
        </div>
    );
}
