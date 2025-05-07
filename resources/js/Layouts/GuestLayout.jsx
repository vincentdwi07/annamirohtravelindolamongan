import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#fff2d7" }}>
            <div className="card shadow-sm p-4" style={{ maxWidth: '400px', width: '100%' }}>
                <div className="text-center mb-4">
                    <Link href="/">
                        {/* Ganti logo sesuai kebutuhan */}
                        <img src="./user/logo.png" alt="Logo" width="80" />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
