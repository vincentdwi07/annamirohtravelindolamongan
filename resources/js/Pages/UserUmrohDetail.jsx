import UserNavbar from "@/Components/user/UserNavbar"
import Footer from "@/Components/user/UserFooter"
import { Head, usePage } from "@inertiajs/react"
import { useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";

// Toast Component
const Toast = ({ show, message, type, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000); // Auto close after 5 seconds
            
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);
    
    if (!show) return null;
    
    return (
        <div className={`toast-notification ${type}`}>
            <div className="toast-content">
                <div className="toast-icon">
                    {type === 'success' && <i className="bi bi-check-circle-fill"></i>}
                    {type === 'error' && <i className="bi bi-exclamation-circle-fill"></i>}
                </div>
                <div className="toast-message">{message}</div>
                <button className="toast-close" onClick={onClose}>
                    <i className="bi bi-x"></i>
                </button>
            </div>
        </div>
    );
};

export default function UserUmrohDetail(){
    const {umroh} = usePage().props;
    const [activeTab, setActiveTab] = useState("tab1");
    const [active, setActive] = useState({
        nama: false,
        whatsapp: false,
        email: false,
        catatan: false
    });
    
    // Toast state
    const [toast, setToast] = useState({
        show: false,
        message: '',
        type: 'success'
    });

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleFocus = (field) => {
        setActive(prev => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field) => {
        setActive(prev => ({ ...prev, [field]: false }));
    };
    
    const closeToast = () => {
        setToast(prev => ({ ...prev, show: false }));
    };

    const { data, setData, post, processing, errors } = useForm({
        nama_lengkap: '',
        no_wa: '',
        email: '',
        alamat: '',
        nama_paket: umroh.title,
        jenis_pesanan: 'Umroh',
        status: false,
        is_open: false
    });

    const handleSubmit = (e) => {
        e.preventDefault(); // Mencegah reload halaman
        
        // Use the useForm hook's post method
        post('/submit-pesanan', {
            onSuccess: () => {
                // Show success toast instead of alert
                setToast({
                    show: true,
                    message: 'Terima kasih telah mendaftar, tim kami akan segera menghubungi Anda.',
                    type: 'success'
                });
            },
            onError: (errors) => {
                // Show error toast when validation fails
                setToast({
                    show: true,
                    message: 'Gagal mendaftar. Silakan periksa formulir Anda.',
                    type: 'error'
                });
            }
        });
    };

    return (
        <>
            <Head title={`Umroh ${umroh.kategori}`}/>
            <UserNavbar isForceBlack={true}/>
            
            {/* Toast notification */}
            <Toast 
                show={toast.show}
                message={toast.message}
                type={toast.type}
                onClose={closeToast}
            />
            
            <div className="umroh-detail-page mx-3 mx-lg-5" style={{ marginTop: "6em" }}>
                <div className="container-fluid m-0 py-3 mb-5">
                    <div className="row p-0 m-0">
                        <div className="col-md-5 p-0 m-0 col-12">
                            <img className="umroh-detail-img" src={umroh.img_url} alt="" />
                        </div>
                        <div className="col-md-7 ps-0 ps-lg-4 mt-3 mt-lg-0 m-0 p-0 col-12">
                            <h1 className="title">{umroh.title}</h1>
                            <h1 className="price m-0">{`Rp${umroh.price}`}<span className="fs-5 text-dark fw-normal">/pax</span></h1>
                            <div className="d-flex user-umroh-detail-tab mb-3">
                                {["tab1", "tab2", "tab3"].map((tab, index) => (
                                    <button
                                        key={tab}
                                        className={`btn-umroh-detail-tab ${activeTab === tab ? 'active' : 'not-active'}`}
                                        onClick={() => handleTabClick(tab)}
                                    >
                                        {["Detail", "Itenerary", "Catatan Penting"][index]}
                                    </button>
                                ))}
                            </div>

                            <div className="tab-content">
                                {activeTab === "tab1" && (
                                    <div>
                                        {/* PERIODE */}
                                        <div className="row m-0 p-0">
                                            <div className="col-1 p-0" style={{ maxWidth: "20px", marginRight: "11px" }}>
                                                <h5 className="m-0 umroh-card-logo p-0"><i className="bi bi-calendar3"></i></h5>
                                            </div>
                                            <div className="col-11 p-0 text-start d-flex flex-column">
                                                <h5 className="umroh-card-logo m-0">Periode</h5>
                                                <p className="p-0">{umroh.periode}</p>
                                            </div>
                                        </div>
                                        {/* HOTEL */}
                                        <div className="row m-0 p-0">
                                            <div className="col-1 p-0" style={{ maxWidth: "20px", marginRight: "11px" }}>
                                                <h5 className="m-0 umroh-card-logo p-0"><i className="bi bi-building"></i></h5>
                                            </div>
                                            <div className="col-11 p-0 text-start d-flex flex-column">
                                                <h5 className="umroh-card-logo m-0">Hotel</h5>
                                                <p className="p-0 mb-0">{`Hotel Mekkah: ${umroh.hotel_mekkah}`}</p>
                                                <p className="p-0">{`Hotel Madinah: ${umroh.hotel_madinah}`}</p>
                                            </div>
                                        </div>
                                        {/* MASKAPAI */}
                                        <div className="row m-0 p-0">
                                            <div className="col-1 p-0" style={{ maxWidth: "20px", marginRight: "11px" }}>
                                                <h5 className="m-0 umroh-card-logo p-0"><i className="bi bi-airplane"></i></h5>
                                            </div>
                                            <div className="col-11 p-0 text-start d-flex flex-column">
                                                <h5 className="umroh-card-logo m-0">Maskapai</h5>
                                                <p className="p-0">{umroh.maskapai}</p>
                                            </div>
                                        </div>
                                        {/* SISA KURSI */}
                                        <div className="row m-0 p-0">
                                            <div className="col-1 p-0" style={{ maxWidth: "20px", marginRight: "10px" }}>
                                                <img style={{ width: "100%", zIndex: 2 }} src="./user/chair.svg" alt="" />
                                            </div>
                                            <div className="col-11 p-0 text-start d-flex flex-column">
                                                <h5 className="umroh-card-logo m-0">Sisa Kursi</h5>
                                                <p className="p-0 mb-0">{`${umroh.seat} kursi`}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === "tab2" && (
                                    <div>
                                        <div dangerouslySetInnerHTML={{ __html: umroh.itenerary }} />
                                    </div>
                                )}
                                {activeTab === "tab3" && (
                                    <div>
                                        <div dangerouslySetInnerHTML={{ __html: umroh.catatan }} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                            
                    <div className="d-flex justify-content-center w-100">
                        <img className="pendaftaran-umroh-divider" src="./user/divider.svg" alt="" />
                    </div>

                    <div className="form-pendaftaran-umroh">
                        <h1 className="mt-0">{`Formulir Pendaftaran | ${umroh.title}`}</h1>
                        <p>Silakan isi form di bawah ini untuk melakukan pendaftaran. Setelah itu, tim kami akan menghubungi Anda melalui WhatsApp secepatnya untuk informasi selanjutnya.</p>
                    
                        <form onSubmit={handleSubmit}>
                            {/* Nama Lengkap */}
                            <div className={`mb-3 input-area ${active.nama ? "active" : ""}`}>
                                <label htmlFor="nama_lengkap" className="form-label">Nama Lengkap</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nama_lengkap"
                                    name="nama_lengkap"
                                    placeholder="Masukkan nama lengkap Anda"
                                    value={data.nama_lengkap}
                                    onChange={e => setData('nama_lengkap', e.target.value)}
                                    onFocus={() => handleFocus("nama")}
                                    onBlur={() => handleBlur("nama")}
                                    required
                                />
                                {errors.nama_lengkap && <div className="text-danger mt-1">{errors.nama_lengkap}</div>}
                            </div>

                            {/* Nomor WhatsApp */}
                            <div className={`mb-3 input-area ${active.whatsapp ? "active" : ""}`}>
                                <label htmlFor="no_wa" className="form-label">Nomor WhatsApp</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="no_wa"
                                    name="no_wa"
                                    placeholder="Masukkan nomor WhatsApp Anda"
                                    value={data.no_wa}
                                    onChange={e => setData('no_wa', e.target.value)}
                                    onFocus={() => handleFocus("whatsapp")}
                                    onBlur={() => handleBlur("whatsapp")}
                                    required
                                />
                                {errors.no_wa && <div className="text-danger mt-1">{errors.no_wa}</div>}
                            </div>

                            {/* Email */}
                            <div className={`mb-3 input-area ${active.email ? "active" : ""}`}>
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Masukkan email Anda (Kosongkan jika tidak ada)"
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                    onFocus={() => handleFocus("email")}
                                    onBlur={() => handleBlur("email")}
                                />
                                {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
                            </div>

                            {/* Alamat */}
                            <div className={`mb-3 input-area ${active.catatan ? "active" : ""}`}>
                                <label htmlFor="alamat" className="form-label">Alamat</label>
                                <textarea
                                    className="form-control"
                                    id="alamat"
                                    name="alamat"
                                    rows="3"
                                    placeholder="Masukkan alamat anda"
                                    value={data.alamat}
                                    onChange={e => setData('alamat', e.target.value)}
                                    onFocus={() => handleFocus("catatan")}
                                    onBlur={() => handleBlur("catatan")}
                                ></textarea>
                                {errors.alamat && <div className="text-danger mt-1">{errors.alamat}</div>}
                            </div>

                            <button 
                                type="submit" 
                                className="btn-daftar-umroh-detail" 
                                disabled={processing}
                            >
                                {processing ? 'Mengirim...' : 'Daftar Sekarang'}
                            </button>
                        </form>

                    </div>
                </div>
            </div>
            <Footer />
            
            {/* CSS untuk Toast */}
            <style jsx>{`
                .toast-notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    z-index: 9999;
                    min-width: 300px;
                    max-width: 400px;
                    border-radius: 8px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    animation: slide-in 0.3s ease-out forwards;
                }
                
                @keyframes slide-in {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                .toast-notification.success {
                    background-color: #e7f6ea;
                    border-left: 5px solid #28a745;
                }
                
                .toast-notification.error {
                    background-color: #fbedee;
                    border-left: 5px solid #dc3545;
                }
                
                .toast-content {
                    display: flex;
                    align-items: center;
                    padding: 15px;
                }
                
                .toast-icon {
                    font-size: 20px;
                    margin-right: 12px;
                }
                
                .success .toast-icon {
                    color: #28a745;
                }
                
                .error .toast-icon {
                    color: #dc3545;
                }
                
                .toast-message {
                    flex: 1;
                    font-size: 14px;
                    font-weight: 500;
                }
                
                .toast-close {
                    background: none;
                    border: none;
                    font-size: 16px;
                    cursor: pointer;
                    opacity: 0.7;
                    transition: opacity 0.2s;
                    color: #555;
                }
                
                .toast-close:hover {
                    opacity: 1;
                }
            `}</style>
        </>
    )
}