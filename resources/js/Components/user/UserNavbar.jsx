import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function UserNavbar({ isForceBlack = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    umroh: false,
    haji: false,
    badal: false,
  });

  const textColor = isForceBlack ? "text-black" : isScrolled ? "text-black" : "";

  useEffect(() => {
    const handleScroll = () => {
      const height = 250;
      if (window.scrollY > height) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleDropdown(name) {
    setDropdownOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  }

  const renderDesktopDropdownItems = (items) => {
    return items.map(({ href, label }) => (
      <li key={label}>
        <Link className="dropdown-item" href={href}>
          {label}
        </Link>
      </li>
    ));
  };

  const renderMobileDropdownItems = (items) => {
    return items.map(({ href, label }) => (
      <li key={label}>
        <Link
          href={href}
          className="text-black text-decoration-none d-block py-1"
          onClick={() => setModalOpen(false)}
        >
          {label}
        </Link>
      </li>
    ));
  };

  const umrohItems = [
    { href: "/umroh?kategori=Promo", label: "Paket Promo" },
    { href: "/umroh?kategori=Reguler", label: "Paket Reguler" },
    { href: "/umroh?kategori=Ekonomis", label: "Paket Ekonomis" },
    { href: "/umroh?kategori=Plus", label: "Paket Plus" },
    { href: "/umroh?kategori=Premium", label: "Paket Premium" },
    { href: "/umroh?kategori=Eksklusif", label: "Paket Eksklusif" },
    { href: "/umroh?kategori=Tour", label: "Paket Umroh + Tour" },
  ];

  const hajiItems = [
    { href: "/haji?kategori=Plus", label: "Haji Plus" },
    { href: "/haji?kategori=Furodha", label: "Haji Furodha" },
    { href: "/haji?kategori=Percepatan", label: "Haji Percepatan" },
  ];

  const badalItems = [
    { href: "/badal?kategori=Umroh", label: "Badal Umroh" },
    { href: "/badal?kategori=Haji", label: "Badal Haji" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`user-navbar navbar navbar-expand-lg fixed-top px-lg-5 px-4 ${
          isScrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className={`container-fluid ${isScrolled ? "" : "border-1 border-bottom"}`}>
          <a className="navbar-brand" href="#">
            <img className="brand-logo" src="./user/logo.png" alt="Logo" />
          </a>

          {/* Mobile hamburger button */}
          <button
            className="navbar-toggler border-0 d-lg-none"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setModalOpen(true)}
          >
            <span><i class="bi bi-list"></i></span>
          </button>

          {/* Desktop menu items */}
          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarSupportedContent">
            <ul className="navbar-nav gap-2 ms-auto mb-2 mb-lg-0">
              <li className={`nav-item ${isScrolled ? "py-2" : "py-3"}`}>
                <Link className={`nav-link ${textColor}`} href="/">
                  beranda
                </Link>
              </li>

              {/* Umroh Dropdown */}
              <li className={`nav-item dropdown ${isScrolled ? "py-2" : "py-3"}`}>
                <Link
                  className={`nav-link dropdown-toggle ${textColor}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Paket Umroh
                </Link>
                <ul className={`dropdown-menu ${isScrolled ? "mt-2" : "mt-3"}`}>
                  {renderDesktopDropdownItems(umrohItems)}
                </ul>
              </li>

              {/* Haji Dropdown */}
              <li className={`nav-item dropdown ${isScrolled ? "py-2" : "py-3"}`}>
                <Link
                  className={`nav-link dropdown-toggle ${textColor}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Haji
                </Link>
                <ul className={`dropdown-menu ${isScrolled ? "mt-2" : "mt-3"}`}>
                  {renderDesktopDropdownItems(hajiItems)}
                </ul>
              </li>

              {/* Badal Dropdown */}
              <li className={`nav-item dropdown ${isScrolled ? "py-2" : "py-3"}`}>
                <Link
                  className={`nav-link dropdown-toggle ${textColor}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Badal
                </Link>
                <ul className={`dropdown-menu ${isScrolled ? "mt-2" : "mt-3"}`}>
                  {renderDesktopDropdownItems(badalItems)}
                </ul>
              </li>

              {/* Regular menu items */}
              {[
                { href: "/blog", label: "BLOG" },
                { href: "/faq", label: "FAQ" },
                { href: "/tentang-kami", label: "TENTANG KAMI" },
              ].map(({ href, label }) => (
                <li key={label} className={`nav-item ${isScrolled ? "py-2" : "py-3"}`}>
                  <Link className={`nav-link ${textColor}`} href={href}>
                    {label}
                  </Link>
                </li>
              ))}

              {/* WhatsApp button */}
              <li className={`nav-item ${isScrolled ? "py-2" : "py-3"}`}>
                <a
                  className="nav-link nav-btn-whatsapp"
                  target="_blank"
                  href="https://wa.me/6285649594417"
                  rel="noreferrer"
                >
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Modal */}
      {modalOpen && (
        <div
          className="mobile-menu-modal fixed-top fixed-start w-100 h-100" 
          style={{ zIndex: 1050, overflowY: "auto", backgroundColor: "#fff2d7" }}
          role="dialog"
          aria-modal="true"
        >
          <div className="modal-header p-3 px-4 border-0">
            <div><img src="./user/logo.png" width={100} alt="" /></div>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setModalOpen(false)}
            ></button>
          </div>
          <div className="modal-body px-4">
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link
                  className="text-black fs-5 text-decoration-none"
                  href="/"
                  onClick={() => setModalOpen(false)}
                >
                  BERANDA
                </Link>
              </li>

              {/* Mobile Umroh Dropdown */}
              <li className="mb-3">
                <button
                  className="btn btn-link p-0 fs-5 text-black d-flex justify-content-between align-items-center w-100"
                  onClick={() => toggleDropdown("umroh")}
                  aria-expanded={dropdownOpen.umroh}
                  aria-controls="dropdown-umroh"
                  style={{ textDecoration: "none" }}
                >
                  PAKET UMROH
                  <span>{dropdownOpen.umroh ? "▲" : "▼"}</span>
                </button>
                {dropdownOpen.umroh && (
                  <ul id="dropdown-umroh" className="list-unstyled ps-3 mt-2">
                    {renderMobileDropdownItems(umrohItems)}
                  </ul>
                )}
              </li>

              {/* Mobile Haji Dropdown */}
              <li className="mb-3">
                <button
                  className="btn btn-link p-0 fs-5 text-black d-flex justify-content-between align-items-center w-100"
                  onClick={() => toggleDropdown("haji")}
                  aria-expanded={dropdownOpen.haji}
                  aria-controls="dropdown-haji"
                  style={{ textDecoration: "none" }}
                >
                  HAJI
                  <span>{dropdownOpen.haji ? "▲" : "▼"}</span>
                </button>
                {dropdownOpen.haji && (
                  <ul id="dropdown-haji" className="list-unstyled ps-3 mt-2">
                    {renderMobileDropdownItems(hajiItems)}
                  </ul>
                )}
              </li>

              {/* Mobile Badal Dropdown */}
              <li className="mb-3">
                <button
                  className="btn btn-link p-0 fs-5 text-black d-flex justify-content-between align-items-center w-100"
                  onClick={() => toggleDropdown("badal")}
                  aria-expanded={dropdownOpen.badal}
                  aria-controls="dropdown-badal"
                  style={{ textDecoration: "none" }}
                >
                  BADAL
                  <span>{dropdownOpen.badal ? "▲" : "▼"}</span>
                </button>
                {dropdownOpen.badal && (
                  <ul id="dropdown-badal" className="list-unstyled ps-3 mt-2">
                    {renderMobileDropdownItems(badalItems)}
                  </ul>
                )}
              </li>

              {/* Mobile Regular Menu Items */}
                {[
                { href: "/blog", label: "BLOG" },
                { href: "/faq", label: "FAQ" },
                { href: "/tentang-kami", label: "TENTANG KAMI" },
                ].map(({ href, label }) => (
                <li key={label} className="mb-3">
                    <Link
                    className="text-black fs-5 text-decoration-none"
                    href={href}
                    onClick={() => setModalOpen(false)}
                    >
                    {label}
                    </Link>
                </li>
                ))}

                <li className="mb-3">
                <a
                    href="https://wa.me/6285649594417"
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setModalOpen(false)}
                    className="text-white fs-5 text-decoration-none d-inline-block px-3 py-2 w-100 text-center fw-bold"
                    style={{
                    backgroundColor: "#09643b",
                    borderRadius: "5px",
                    }}
                >
                    Whatsapp
                </a>
                </li>

            </ul>
          </div>
        </div>
      )}
    </>
  );
}