import UserNavbar from "@/Components/user/UserNavbar";
import { Head, usePage } from "@inertiajs/react";
import { useState } from "react";
import UmrohCard from "@/Components/user/UmrohCard";
import FloatWhatsappButton from "@/Components/user/FloatWhatsappButton";
import Footer from "@/Components/user/UserFooter";

export default function UserUmroh() {
    const { umroh, kategori } = usePage().props;

    const [bulanDipilih, setBulanDipilih] = useState("Januari");

    const daftarBulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    // Filter umroh berdasarkan bulan yang dipilih
    const filteredUmroh = umroh.filter((item) => 
        item.periode.toLowerCase().includes(bulanDipilih.toLowerCase())
    );

    return (
        <>
            <Head title={`Umroh ${kategori}`} />
            <FloatWhatsappButton />
            <UserNavbar isForceBlack={true} />
            <div className="user-umroh mx-3 mx-lg-5" style={{ marginTop: "6em" }}>
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <h1 className="title">Paket Umroh {kategori}</h1>
                    <div className="d-flex align-items-start">
                        <p className="p-0 m-0"> <i className="bi bi-calendar3 me-1"></i> Filter Berdasarkan Bulan</p>
                        <div className="dropdown">
                            <button className="filter-bulan-umroh dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {bulanDipilih}
                            </button>
                            <ul className="dropdown-menu">
                                {daftarBulan.map((bulan) => (
                                    <li key={bulan}>
                                        <button
                                            className="dropdown-item dropdown-bulan-umroh"
                                            onClick={() => setBulanDipilih(bulan)}
                                        >
                                            {bulan}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid p-0 m-0">
                    <div className="row p-0">
                        {umroh.length > 0 ? (
                            filteredUmroh.length > 0 ? (
                                filteredUmroh.map((item) => (
                                    <div key={item.id} className="col-12 col-md-6 col-xl-4 p-0">
                                        <UmrohCard
                                            img={item.img_url}
                                            title={item.title}
                                            price={item.price}
                                            periode={item.periode}
                                            hotelMekkah={item.hotel_mekkah}
                                            hotelMadinah={item.hotel_madinah}
                                            maskapai={item.maskapai}
                                            seat={item.seat}
                                        />
                                    </div>
                                ))
                            ) : (
                                <div className="col-12">
                                    <p className="text-center">Paket Umroh Tidak Ada untuk Bulan {bulanDipilih}</p>
                                </div>
                            )
                        ) : 
                            <div className="text-center umroh-not-found">
                                <h3>Mohon Maaf Paket Umroh {kategori} Belum Tersedia</h3>
                            </div>
                        } 
                        
                    </div>
                </div>
                <h1 className="title">Paket Umroh Lainnya</h1>
            </div>
            <Footer />
        </>
    );
}
