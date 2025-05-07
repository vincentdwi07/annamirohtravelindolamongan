import UserNavbar from "@/Components/user/UserNavbar"
import Footer from "@/Components/user/UserFooter"
import FloatWhatsappButton from "@/Components/user/FloatWhatsappButton"
import { Head } from "@inertiajs/react"
import { usePage } from "@inertiajs/react"
import { useState } from "react"
import { useForm } from "@inertiajs/react";

export default function Haji(){
    const { haji, kategori } = usePage().props;
    

    const [active, setActive] = useState({
        nama: false,
        whatsapp: false,
        email: false,
        catatan: false
    });


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
        nama_paket: haji.title,
        jenis_pesanan: 'Haji',
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

    if (!haji) {
        return (
            <>
                <UserNavbar isForceBlack={true} />
                <FloatWhatsappButton />
                <div className="haji-page d-flex align-items-center justify-content-center mx-3 mb-5 mx-lg-5" style={{ height: "50vh" }}>
                    <h1 className="title text-black fw-normal">Mohon maaf untuk Haji {kategori} belum tersedia</h1>
                </div>
                <Footer />
                <Head title="Haji" />
            </>
        );
    }

    return(
        <>
            <UserNavbar isForceBlack={true}/>
            <FloatWhatsappButton/>
            <div className="haji-page mx-3 mb-5 mx-lg-5">
                <div className="container-fluid m-0">
                    <div className="row">
                        <div className="gambar-kiri d-flex align-items-start justify-content-start col-12 col-md-5 p-0">
                        <img
                            style={{
                                objectFit: "contain",
                            }}
                            src={haji.img_url}
                            alt="Gambar"
                            className=" haji-img"
                        />
                        </div>

                        <div className="konten-kanan ps-0 ps-md-3 col-12 col-md-7 hide-scrollbar " style={{ maxHeight: "100vh", overflowY: "auto" }}>
                            <h1 className="title">{haji.title}</h1>
                            <h1 className="price">${haji.harga}<span className="fs-6 text-secondary fw-normal">/pax</span></h1>
                            <hr style={{
                                height: "2px",
                                backgroundColor: "#09643b",  
                                border: "none",              
                                opacity: 1
                            }} />

                           {haji.konten}
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center w-100">
                    <img className="pendaftaran-umroh-divider" src="./user/divider.svg" alt="" />
                </div>

                <div className="form-pendaftaran-umroh">
                    <h1 className="mt-0">{`Formulir Pendaftaran | ${haji.title}`}</h1>
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
            </div>              

            <Footer/>
            <Head title="Haji"/>
        </>
    )
}