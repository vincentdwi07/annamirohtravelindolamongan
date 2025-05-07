import UserNavbar from "@/Components/user/UserNavbar"
import Footer from "@/Components/user/UserFooter"
import { Head, usePage } from "@inertiajs/react"
import { useState } from "react";
import { useForm } from "@inertiajs/react";

export default function UserUmrohDetail(){
    const {umroh} = usePage().props;
    const [activeTab, setActiveTab] = useState("tab1");
    const [active, setActive] = useState({
        nama: false,
        whatsapp: false,
        email: false,
        catatan: false
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
                alert('Pendaftaran berhasil!');
            }
        });
    };

    return (
        <>
            <Head title={`Umroh ${umroh.kategori}`}/>
            <UserNavbar isForceBlack={true}/>
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
                                    placeholder="Masukkan email Anda"
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

                    {/* PAKET PUSAT */}
                    <div className="paket-umroh-lainnya mt-5">
                        <h1 className="title">Paket Umroh Lainnya</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
