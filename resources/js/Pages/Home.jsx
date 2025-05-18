import { Head, Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import UserNavbar from '@/Components/user/UserNavbar';
import HeroImageCarousel from '@/Components/user/HeroImageCarousel';
import Airline from '@/Components/user/Airline';
import Benefit from '@/Components/user/Benefit';
import IjinAccordion from '@/Components/user/IjinAccordion';
import UmrohCard from '@/Components/user/UmrohCard';
import SocialMediaVideo from '@/Components/user/SocialMediaVideo';
import Footer from '@/Components/user/UserFooter';
import FloatWhatsappButton from '@/Components/user/FloatWhatsappButton';
import Flipbook from '@/Components/user/Flipbook';

export default function Home(){
    const { umrohSamples } = usePage().props;

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
                    <a href="https://wa.me/6285649594417" target='blank'><i className='bi bi-whatsapp hero-social-media-icon'></i></a>
                    <a  target='blank' href="https://www.instagram.com/an_namiroh_lamongan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==
"><i className='bi bi-instagram hero-social-media-icon'></i></a>
                    <a  target='blank' href="https://www.tiktok.com/@an_namiroh.travel?is_from_webapp=1&sender_device=pc"><i className='bi bi-tiktok hero-social-media-icon'></i></a>
                    <a  target='blank' href="https://youtube.com/@pt.annamirohtravelindolamongan?si=CvwLGUJZ3WArWo-K"><i className='bi bi-youtube hero-social-media-icon'></i></a>
                    <a  target='blank' href="https://www.facebook.com/people/Annamiroh-Lamongan/pfbid0DAWFTp8Fim6fy2JUCFkWJE6BKLMYYwV7rQfBDAXRhMccjyvHnCwuanWNcRu6RXzkl/#"><i className='bi bi-facebook hero-social-media-icon'></i></a>
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
                <div className="d-flex flex-column align-items-center w-100 justify-content-center position-relative">
                    <h1 className="title">Paket Umroh</h1>
                    <p className="text-center title-desc">
                    Kami hadirkan paket umroh dengan pelayanan maksimal dan fasilitas terbaik untuk mendukung ibadah yang khusyuk dan nyaman, bersama pendamping berpengalaman
                    </p>
                </div>

                <div className="container">
                    <div className="row justify-content-between mt-0">
                    {/* EKONOMIS */}
                    {umrohSamples.ekonomis && (
                        <div className="col-12 p-0 col-md-6 col-xl-4">
                        <UmrohCard
                            img={umrohSamples.ekonomis.img_url}
                            title={umrohSamples.ekonomis.title}
                            price={umrohSamples.ekonomis.price}
                            periode={umrohSamples.ekonomis.periode}
                            hotelMekkah={umrohSamples.ekonomis.hotel_mekkah}
                            hotelMadinah={umrohSamples.ekonomis.hotel_madinah}
                            maskapai={umrohSamples.ekonomis.maskapai}
                            seat={umrohSamples.ekonomis.seat}
                            btn_detail={umrohSamples.ekonomis.id}
                        />
                        </div>
                    )}

                    {/* PLUS */}
                    {umrohSamples.plus && (
                        <div className="col-12 p-0 col-md-6 col-xl-4">
                        <UmrohCard
                            img={umrohSamples.plus.img_url}
                            title={umrohSamples.plus.title}
                            price={umrohSamples.plus.price}
                            periode={umrohSamples.plus.periode}
                            hotelMekkah={umrohSamples.plus.hotel_mekkah}
                            hotelMadinah={umrohSamples.plus.hotel_madinah}
                            maskapai={umrohSamples.plus.maskapai}
                            seat={umrohSamples.plus.seat}
                            btn_detail={umrohSamples.plus.id}
                        />
                        </div>
                    )}

                    {/* EKSKLUSIF */}
                    {umrohSamples.eksklusif && (
                        <div className="col-12 p-0 col-md-6 col-xl-4">
                        <UmrohCard
                            img={umrohSamples.eksklusif.img_url}
                            title={umrohSamples.eksklusif.title}
                            price={umrohSamples.eksklusif.price}
                            periode={umrohSamples.eksklusif.periode}
                            hotelMekkah={umrohSamples.eksklusif.hotel_mekkah}
                            hotelMadinah={umrohSamples.eksklusif.hotel_madinah}
                            maskapai={umrohSamples.eksklusif.maskapai}
                            seat={umrohSamples.eksklusif.seat}
                            btn_detail={umrohSamples.eksklusif.id}
                        />
                        </div>
                    )}
                    </div>
                </div>

                <div className="w-100 d-flex justify-content-center">
                    <a className="btn-lainnya" href="/paket-umroh">
                    Lihat Paket Lainnya <span><i className="bi bi-arrow-right"></i></span>
                    </a>
                </div>
                </div>


            {/* DESTINASI UMROH - FLIPBOOK*/}
            <div className="flipbook-home mx-3 mx-lg-5 px-0 px-lg-2" style={{ marginTop: "6em" }}>
                <div className="d-flex flex-column justify-content-center align-items-center">              
                    <h1 className="title text-center">Destinasi Umroh 2025</h1>
                    <p className='text-center title-desc'>
                    Kami sediakan buku yang menggambarkan pengalaman dan destinasi Umroh, sebagai bekal awal sebelum Anda menginjakkan kaki di Tanah Suci.
                    </p>
                </div>
                <Flipbook/>
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

            {/* FOOTER */}
            <Footer/>
        </>
    )
}