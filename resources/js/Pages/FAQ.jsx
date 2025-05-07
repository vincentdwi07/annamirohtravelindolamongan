import UserNavbar from "@/Components/user/UserNavbar"
import Footer from "@/Components/user/UserFooter"
import FloatWhatsappButton from "@/Components/user/FloatWhatsappButton"
import { Head } from "@inertiajs/react"

export default function FAQ() {
    return (
        <>
            <Head title="FAQ" />
            <FloatWhatsappButton />
            <UserNavbar isForceBlack={true} />

            <div className="faq mx-3 mx-lg-5 mb-5" style={{ marginTop: "6em" }}>
                <h1 className="title">FAQ</h1>
                <div className="accordion accordion-flush mt-3" id="accordionFlushExample">

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button ps-0 accordion-ijin-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse-0"
                                aria-expanded="false"
                                aria-controls="flush-collapse-0"
                            >
                                Apa perbedaan antara haji dan umroh?
                            </button>
                        </h2>
                        <div
                            id="flush-collapse-0"
                            className="accordion-collapse ps-0 collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body pt-0 ps-0" style={{ backgroundColor: "#fff2d7" }}>
                                <ul className="mb-0 p-0" style={{ listStyleType: 'none' }}>
                                    <li><span className="fw-bold">Haji</span>: Ibadah wajib bagi yang mampu, dilakukan pada bulan Dzulhijjah, dan terdapat wukuf di Arafah.</li>
                                    <li><span className="fw-bold">Umroh</span>: Ibadah sunnah, bisa dilakukan kapan saja (kecuali lima hari di musim haji), dengan rangkaian yang lebih singkat.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button ps-0 accordion-ijin-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse-1"
                                aria-expanded="false"
                                aria-controls="flush-collapse-1"
                            >
                                Apa saja pilihan pembayarannya?
                            </button>
                        </h2>
                        <div
                            id="flush-collapse-1"
                            className="accordion-collapse ps-0 collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body pt-0 ps-0" style={{ backgroundColor: "#fff2d7" }}>
                                <ul className="mb-0 p-0" style={{ listStyleType: 'none' }}>
                                    <li><span className="fw-bold">Lunas</span>: Dp 10 persen dari pembiayaan dan pelunasan H-30 pemberangkatan.</li>
                                    <li><span className="fw-bold">Dana Talangan</span>: Pembayaran dengan sistem angsuran atau pinjaman.</li>
                                    <li><span className="fw-bold">Tabungan Umroh</span>: Sistem menabung hingga dana terkumpul.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button ps-0 accordion-ijin-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse-2"
                                aria-expanded="false"
                                aria-controls="flush-collapse-2"
                            >
                                Apa jaminan uang saya aman?
                            </button>
                        </h2>
                        <div
                            id="flush-collapse-2"
                            className="accordion-collapse ps-0 collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body pt-0 ps-0" style={{ backgroundColor: "#fff2d7" }}>
                                <ul className="mb-0">
                                    <li>Dana dijamin melalui asuransi.</li>
                                    <li>Terdaftar resmi di Kemenag dengan nomor PIHK 151/2021.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button ps-0 accordion-ijin-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse-3"
                                aria-expanded="false"
                                aria-controls="flush-collapse-3"
                            >
                                Saya pemula, apakah akan dibimbing?
                            </button>
                        </h2>
                        <div
                            id="flush-collapse-3"
                            className="accordion-collapse ps-0 collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body pt-0 ps-0" style={{ backgroundColor: "#fff2d7" }}>
                                <ul className="mb-0 p-0">
                                    <span className="fw-bold">Tentu! Kami Menyediakan:</span>
                                    <li className="ms-3">Manasik sebanyak 2 kali (Teori dan praktek), sekali di Indonesia dan sekali di Madinah.</li>
                                    <li className="ms-3">Simulasi langsung.</li>
                                    <li className="ms-3">Bimbingan harian melalui grup WhatsApp khusus.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button ps-0 accordion-ijin-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse-4"
                                aria-expanded="false"
                                aria-controls="flush-collapse-4"
                            >
                                Apa saja yang harus dipersiapkan?
                            </button>
                        </h2>
                        <div
                            id="flush-collapse-4"
                            className="accordion-collapse ps-0 collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body pt-0 ps-0" style={{ backgroundColor: "#fff2d7" }}>
                                <ul className="mb-0 p-0" style={{ listStyleType: "none" }}>
                                    <li><span className="fw-bold">Fisik</span>: Vaksin meningitis, check-up dokter.</li>
                                    <li><span className="fw-bold">Dokumen</span>: Paspor (masa berlaku minimal 6 bulan), visa, foto ukuran 4x6.</li>
                                    <li><span className="fw-bold">Perlengkapan</span>: Lihat checklist lengkap di [link].</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button ps-0 accordion-ijin-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse-5"
                                aria-expanded="false"
                                aria-controls="flush-collapse-5"
                            >
                                Dokumen persyaratan untuk Umroh antara lain:
                            </button>
                        </h2>
                        <div
                            id="flush-collapse-5"
                            className="accordion-collapse ps-0 collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body pt-0 ps-0" style={{ backgroundColor: "#fff2d7" }}>
                                <ul className="mb-0">
                                    <li>Paspor Asli 48 halaman (minimal nama 3 kata dan masa berlaku 12 bulan dari tanggal keberangkatan).</li>
                                    <li>Fotocopy KTP berukuran A4.</li>
                                    <li>Fotocopy KK.</li>
                                    <li>Fotocopy Buku Nikah (bagi pasangan suami istri).</li>
                                    <li>Pas Photo ukuran 4x6 sebanyak 3 lembar (background foto warna putih dengan fokus wajah 80%). Dibelakang foto harap dituliskan nama lengkap sesuai Paspor.</li>
                                    <li>Buku Kuning Suntik Meningitis (berlaku hingga tanggal kepulangan).</li>
                                    <li>Fotocopy Akta Kelahiran (khusus untuk anak berusia ≤ 17 tahun).</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button ps-0 accordion-ijin-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse-6"
                                aria-expanded="false"
                                aria-controls="flush-collapse-6"
                            >
                                Bagaimana pengiriman dokumen persyaratan?
                            </button>
                        </h2>
                        <div
                            id="flush-collapse-6"
                            className="accordion-collapse ps-0 collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body pt-0 ps-0" style={{ backgroundColor: "#fff2d7" }}>
                                <p className="m-0">Dokumen bisa dikirimkan dengan jasa ekspedisi dengan asuransi ke alamat kami. Harap dicantumkan nama PIC dan tanggal keberangkatan. Atau jika di wilayah Lamongan/Gresik bisa kami ambil di tempat.</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button ps-0 accordion-ijin-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse-7"
                                aria-expanded="false"
                                aria-controls="flush-collapse-7"
                            >
                                Bagaimana sistem komunikasi selama program?
                            </button>
                        </h2>
                        <div
                            id="flush-collapse-7"
                            className="accordion-collapse ps-0 collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body pt-0 ps-0" style={{ backgroundColor: "#fff2d7" }}>
                                <ul className="mb-0">
                                    <li>Setiap jamaah akan dimasukkan ke dalam grup WhatsApp untuk koordinasi dengan TL, Muthowif, dan jamaah.</li>
                                    <li>Dalam grup ini akan diinformasikan:</li>
                                    <li>Waktu keberangkatan</li>
                                    <li>Jadwal Manasik</li>
                                    <li>Tour Leader dan Muthowif</li>
                                    <li>Meeting Point (jam, tempat, dress code)</li>
                                    <li>Barang bawaan yang perlu diperhatikan</li>
                                    <li>Jadwal perjalanan di Tanah Suci</li>
                                    <li>Semua info update program</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button ps-0 accordion-ijin-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse-8"
                                aria-expanded="false"
                                aria-controls="flush-collapse-8"
                            >
                                Siapa yang mendampingi selama ibadah?
                            </button>
                        </h2>
                        <div
                            id="flush-collapse-8"
                            className="accordion-collapse ps-0 collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body pt-0 ps-0" style={{ backgroundColor: "#fff2d7" }}>
                                <ul className="mb-0">
                                    <li>Pembimbing dan Mutowwif.</li>
                                    <li>Layanan kesehatan.</li>
                                    <li>Translator Arab-Indonesia.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button ps-0 accordion-ijin-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse-9"
                                aria-expanded="false"
                                aria-controls="flush-collapse-9"
                            >
                                Apakah hotelnya dekat dengan masjid?
                            </button>
                        </h2>
                        <div
                            id="flush-collapse-9"
                            className="accordion-collapse ps-0 collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body pt-0 ps-0" style={{ backgroundColor: "#fff2d7" }}>
                                <p className="m-0">Tergantung pilihan paket yang dipilih. Paket premium sangat dekat dengan masjid, sedangkan program ekonomis biasanya Madinah 400 m dan Makkah 500 m.</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button ps-0 accordion-ijin-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse-10"
                                aria-expanded="false"
                                aria-controls="flush-collapse-10"
                            >
                                Ada promo khusus?
                            </button>
                        </h2>
                        <div
                            id="flush-collapse-10"
                            className="accordion-collapse ps-0 collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body pt-0 ps-0" style={{ backgroundColor: "#fff2d7" }}>
                                <p className="m-0">Umroh keluarga 3 + 1 (lihat brosur untuk info lebih lanjut).</p>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button ps-0 accordion-ijin-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse-11"
                                aria-expanded="false"
                                aria-controls="flush-collapse-11"
                            >
                                Apa keunggulan Annamiroh Travelindo Lamongan?
                            </button>
                        </h2>
                        <div
                            id="flush-collapse-11"
                            className="accordion-collapse ps-0 collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body pt-0 ps-0" style={{ backgroundColor: "#fff2d7" }}>
                                <ul className="mb-0">
                                    <li>Bimbingan lengkap dari awal hingga pulang.</li>
                                    <li>Hotel bintang 4 dengan catering khas Indonesia.</li>
                                    <li>Gratis travel insurance.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button ps-0 accordion-ijin-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#flush-collapse-12"
                                aria-expanded="false"
                                aria-controls="flush-collapse-12"
                            >
                                Bagaimana cara pembayaran?
                            </button>
                        </h2>
                        <div
                            id="flush-collapse-12"
                            className="accordion-collapse ps-0 collapse"
                            data-bs-parent="#accordionFlushExample"
                        >
                            <div className="accordion-body pt-0 ps-0" style={{ backgroundColor: "#fff2d7" }}>
                                <ul className="mb-0">
                                    <li>Transfer bank.</li>
                                    <li>QRIS.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    )
}
