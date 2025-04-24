import { Head, Link } from '@inertiajs/react';
import UserNavbar from '@/Components/user/UserNavbar';
import HeroImageCarousel from '@/Components/user/HeroImageCarousel';
import Airline from '@/Components/user/Airline';
import Benefit from '@/Components/user/Benefit';
import IjinAccordion from '@/Components/user/IjinAccordion';
import UmrohCard from '@/Components/user/UmrohCard';
import SocialMediaVideo from '@/Components/user/SocialMediaVideo';
import Footer from '@/Components/user/UserFooter';
import FloatWhatsappButton from '@/Components/user/FloatWhatsappButton';

export default function Home(){
    return(
        <>
            <Head title="Home"/>
            <UserNavbar/>
            <FloatWhatsappButton/>

            {/* HERO */}
            <div className="home-cover">
                <HeroImageCarousel/>
                <h1 className='title'>Sahabat Terbaik dan Terpercaya Menuju Baitullah Bersama <br /><span style={{ color: "#09643b" }}>An Namiroh Travelindo</span></h1>
                <Link className="btn-lihat-jadwal-umroh" href="">Lihat Jadwal Umroh</Link>
                {/* <h2 className='tagline'>Mudah | Murah | Amanah</h2> */}
                <div className="hero-social-media-group">
                    <a href=""><i className='bi bi-whatsapp hero-social-media-icon'></i></a>
                    <a href=""><i className='bi bi-instagram hero-social-media-icon'></i></a>
                    <a href=""><i className='bi bi-tiktok hero-social-media-icon'></i></a>
                    <a href=""><i className='bi bi-youtube hero-social-media-icon'></i></a>
                    <a href=""><i className='bi bi-facebook hero-social-media-icon'></i></a>
                </div>
            </div>

            {/* AIRLINE */}
            <Airline/>

            {/* KELEBIHAN  */}
            <div className="kelebihan mx-1 mx-lg-5">
                <div className="d-flex flex-column align-items-center w-100 justify-content-center">
                    <h1 className='title'>Mengapa Memilih An Namiroh?</h1>
                    <p className='text-center title-desc'>An Namiroh Travelindo adalah biro perjalanan umroh dan haji yang legal, 
                                            terpercaya, dan sangat berpengalaman, menghadirkan layanan 
                                            ibadah yang nyaman, amanah, dan sesuai tuntunan syariah</p>
                </div>
                <Benefit/>
            </div>

            {/* IJIN */}
            <div className="ijin mx-1 mx-lg-5">
                <div className="d-flex flex-column align-items-center w-100 justify-content-center position-relative ">
                    <h1 className='title'>Resmi & Terpercaya</h1>
                    <p className='text-center title-desc'>
                        An Namiroh Travelindo memiliki izin resmi dari Kementrian Agama RI untuk menyelenggarakan perjalanan Umroh dan Haji, memastikan keamanan dan keabsahan ibadah Anda
                    </p>
                    <img className='ijin-divider' src="./user/divider.svg" alt="" />
                </div>
                <IjinAccordion/>
            </div>

            {/* PAKET UMROH HOME */}
            <div className="paket-umroh-home mx-1 mx-lg-5 mb-5">
                <div className="d-flex flex-column align-items-center w-100 justify-content-center position-relative ">
                    <h1 className='title'>Paket Umroh</h1>
                    <p className='text-center title-desc'>
                        Kami hadirkan paket umroh dengan pelayanan maksimal dan fasilitas terbaik untuk mendukung ibadah yang khusyuk dan nyaman, bersama pendamping berpengalaman
                    </p>
                </div>
                <div className="container">

                <div className="row mt-0">
                    <div className="col-12 p-0 col-md-6 col-xl-4">
                        <UmrohCard
                            img="./user/umroh-card-img/PAKET UMROH PROMO KELUARGA.jpeg"
                            title="Paket Promo Keluarga 12 Hari"
                            price="33.200.000"
                            periode="15 September 2025 - 31 Januari 2026"
                            hotelMekkah="Al Qiswah (5N)"
                            hotelMadinah="Burj Mawaddah (5N)"
                            maskapai="Scoot"
                            seat="30"
                        />
                    </div>
                    <div className="col-12 p-0 col-md-6 col-xl-4">
                        <UmrohCard
                            img="./user/umroh-card-img/EXCLUSIVE.png"
                            title="Paket Exclusive 16 Hari"
                            price="41.650.000"
                            periode="9 Agustus 2025"
                            hotelMekkah="Makkah Tower (5N)"
                            hotelMadinah="Al Ashar Golden T (9N)"
                            maskapai="Garuda"
                            seat="30"
                        />
                    </div>
                    <div className="col-12 p-0 col-md-6 col-xl-4">
                        <UmrohCard
                            img="./user/umroh-card-img/PLUS.png"
                            title="Paket Plus 11 Hari"
                            price="34.750.000"
                            periode="19 Agustus 2025"
                            hotelMekkah="Azka Shofa (6N)"
                            hotelMadinah="Al Ashar Golden T (5N)"
                            maskapai="Lion Air"
                            seat="30"
                        />
                    </div>
                </div>
                </div>

                <div className="w-100 d-flex justify-content-center">
                    <a className='btn-lainnya' href="">Lihat Paket Lainnya <span><i className="bi bi-arrow-right"></i></span></a>
                </div>
            </div>

            {/* SOSIAL MEDIA VIDEO */} 
            <div className="sosial-media-home mx-3 mx-lg-5 mb-5" style={{ marginTop: "5em" }}>
                <div className="d-flex flex-column align-items-center w-100 justify-content-center position-relative ">
                    <h1 className='title'>Ikuti Sosial Media Kami</h1>
                    <p className='text-center title-desc'>
                        Selalu terhubung dengan kami melalui sosial media dan jadi yang pertama tahu info dan promo terbaru
                    </p>
                </div>
                <SocialMediaVideo/>
            </div>

            {/* CTA */}
            <svg className='cta-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#09643b" fill-opacity="1" d="M0,32L48,48C96,64,192,96,288,112C384,128,480,128,576,117.3C672,107,768,85,864,90.7C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="cta-home px-3 mb-0 px-lg-5">
                <h1 className='title mb-3 p-0'>Mulai Perjalanan Ibadahmu <br />Hari Ini!</h1>
                <div className='cta-btn-home'>
                    <a  target="_blank" href="https://wa.me/6285649594417"><i class="bi bi-whatsapp me-2"></i>Hubungi Kami</a>
                </div>
            </div>

            {/* FOOTER */}
            <Footer/>

            {/* COPYRIGHT */}
            <div className="copyright d-flex justify-content-center bg-white align-items-center p-3">
                <p className='p-0 m-0 fw-bold' style={{ color: "#09643b" }}>Copyright &copy; 2025 PT. Annamiroh Travelindo</p>
            </div>
        </>
    )
}