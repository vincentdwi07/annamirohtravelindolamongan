import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function UserNavbar({isForceBlack = false}) {
    const [isScrolled, setIsScrolled] = useState(false);
    const textColor = isForceBlack ? "text-black" : isScrolled ? "text-black" : ""; 

    useEffect(()=> {
        const handleScroll = () => {
            const height = 250;
            if (window.scrollY > height){
                setIsScrolled(true);
            }else{
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    return (
        <nav className={`user-navbar navbar navbar-expand-lg fixed-top px-lg-5 px-4 ${isScrolled ? "bg-white" : "bg-transparent" }`}>
            <div className={`container-fluid  ${isScrolled ? "" : "border-1 border-bottom"}`}>
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
                        <li className={`nav-item ${isScrolled ? "py-2" : "py-3"}`}>
                            <Link className={`nav-link ${textColor}`} aria-current="page" href="/">beranda</Link>
                        </li>
                        <li className={`nav-item dropdown ${isScrolled ? "py-2" : "py-3"}`}>
                            <Link className={`nav-link dropdown-toggle  ${textColor}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Paket Umroh
                            </Link>
                            <ul className={`dropdown-menu ${isScrolled ? "mt-2" : "mt-3"}`}>
                                <li><Link className="dropdown-item" href={`/umroh?kategori=promo`}>Paket Promo</Link></li>
                                <li><Link className="dropdown-item" href={`/umroh?kategori=reguler`}>Paket Reguler</Link></li>
                                <li><Link className="dropdown-item" href={`/umroh?kategori=ekonomis`}>Paket Ekonomis</Link></li>
                                <li><Link className="dropdown-item" href={`/umroh?kategori=plus`}>Paket Plus</Link></li>
                                <li><Link className="dropdown-item" href={`/umroh?kategori=premium`}>Paket Premium</Link></li>
                                <li><Link className="dropdown-item" href={`/umroh?kategori=eksklusif`}>Paket Eksklusif</Link></li>
                                <li><Link className="dropdown-item" href={`/umroh?kategori=umroh+tour`}>Paket Umroh + Tour</Link></li>
                            </ul>
                        </li>
                        <li className={`nav-item dropdown ${isScrolled ? "py-2" : "py-3"}`}>
                            <Link className={`nav-link dropdown-toggle  ${textColor}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Haji
                            </Link>
                            <ul className={`dropdown-menu ${isScrolled ? "mt-2" : "mt-3"}`}>
                                <li><Link className="dropdown-item" href="#">Haji Plus</Link></li>
                                <li><Link className="dropdown-item" href="#">Haji Furodha</Link></li>
                            </ul>
                        </li>
                        <li className={`nav-item ${isScrolled ? "py-2" : "py-3"}`}>
                            <Link className={`nav-link  ${textColor}`} aria-current="page" href="#">BADAL</Link>
                        </li>
                        <li className={`nav-item ${isScrolled ? "py-2" : "py-3"}`}>
                            <Link className={`nav-link  ${textColor}`} aria-current="page" href="#">FAQ</Link>
                        </li>
                        <li className={`nav-item ${isScrolled ? "py-2" : "py-3"}`}>
                            <Link className={`nav-link  ${textColor}`} aria-current="page" href="/blog">BLOG</Link>
                        </li>
                        <li className={`nav-item ${isScrolled ? "py-2" : "py-3"}`}>
                            <Link className={`nav-link  ${textColor}`} aria-current="page" href="/tentang-kami">TENTANG KAMI</Link>
                        </li>
                        <li className={`nav-item ${isScrolled ? "py-2" : "py-3"}`}>
                            <a className="nav-link nav-btn-whatsapp" aria-current="page" target="_blank" href="https://wa.me/6285649594417">Whatsapp</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
