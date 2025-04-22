import { Link } from "@inertiajs/react";

export default function UserNavbar() {
    return (
        <nav className="user-navbar navbar navbar-expand-lg bg-transparent fixed-top px-lg-5 px-4 py-3">
            <div className="container-fluid pb-2 border-1 border-bottom">
                <a className="navbar-brand" href="#">
                    <img className="brand-logo" src="./user/logo.png" alt="" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav gap-2 ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" href="#">Umroh</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" href="#">Haji</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" href="#">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" href="#">TENTANG KAMI</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link nav-btn-whatsapp" aria-current="page" href="#">Whatsapp</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
