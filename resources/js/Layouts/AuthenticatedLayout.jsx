import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-vh-100 background-kuning">
            <nav className="navbar navbar-expand-lg py-3 navbar-light bg-white border-bottom">
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center" href="/">
                        <img src="./user/logo.png" style={{ width: "100px" }} alt="" />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setShowingNavigationDropdown(!showingNavigationDropdown)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${showingNavigationDropdown ? 'show' : ''}`}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link ms-3 me-3 nav-link-admin text-black"
                                    href={route('dashboard')}
                                    active={route().current('dashboard')}
                                >
                                    Dashboard
                                </NavLink>
                                <NavLink
                                    className="nav-link me-3 nav-link-admin text-black"
                                    href={route('admin.umroh')}
                                    active={route().current('admin.umroh')}
                                >
                                    Umroh
                                </NavLink>
                                <NavLink
                                    className="nav-link me-3 nav-link-admin text-black"
                                    href={route('dashboard')}
                                    active={route().current('AdminHaji')}
                                >
                                    Haji
                                </NavLink>
                                <NavLink
                                    className="nav-link me-3 nav-link-admin text-black"
                                    href={route('dashboard')}
                                    active={route().current('AdminBadal')}
                                >
                                    Badal
                                </NavLink>
                                <NavLink
                                    className="nav-link me-3 nav-link-admin text-black"
                                    href={route('dashboard')}
                                    active={route().current('AdminBlog')}
                                >
                                    Blog
                                </NavLink>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link navlink-admin text-black dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {user.name}
                                </a>
                                <ul className="dropdown-menu dropdown-admin dropdown-menu-end">
                                    <li>
                                        <Dropdown.Link
                                            href={route('logout')}
                                            method="post"
                                            as="button"
                                            className='bg-transparent border-none border-0 w-100'
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* {header && (
                <header className="bg-white border-bottom shadow-sm py-3">
                    <div className="container">
                        {header}
                    </div>
                </header>
            )} */}

            <main className="py-3">
                {children}
            </main>
        </div>
    );
}
