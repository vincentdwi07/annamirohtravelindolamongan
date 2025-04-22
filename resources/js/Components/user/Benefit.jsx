import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';

export default function Benefit() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    <>
        <div className='mx-3 mb-5 mt-3'>
            <Swiper
            modules={[Navigation]}
            spaceBetween={35}
            onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
            breakpoints={{
                0: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
                1000: {slidesPerView: 2},
                1200: { slidesPerView: 3 },
                1400: {slidePerView: 4}
            }}
            >   

                <SwiperSlide>
                    <div className="benefit-card">
                        <h1 className="benefit-title">Penerbangan Langsung dan Nyaman</h1>
                        <p className="benefit-description">Penerbangan langsung dengan maskapai terpecaya, jadwal aman, <br />tanpa transit panjang <br /> dan minim resiko <br />keterlambatan</p>
                        <img src="./user/benefit/1.png" alt="" className="benefit-img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="benefit-card">
                        <h1 className="benefit-title">Hotel Strategis di Makkah & Madinah</h1>
                        <p className="benefit-description">Hotel bintang 3-5 dengan fasilitas bersih <br />dan nyaman, hanya sealangkah dari <br />Masjid Haram & Nabawi</p>
                        <img src="./user/benefit/2.png" alt="" className="benefit-img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="benefit-card">
                        <h1 className="benefit-title">Program Sesuai Syariah</h1>
                        <p className="benefit-description">Perjalanan umroh yang fokus pada ibadah, <br />didampingi manasik sesuai sunnah, <br />serta menjaga adab dan <br />akhlak jamaah</p>
                        <img src="./user/benefit/3.png" alt="" className="benefit-img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="benefit-card">
                        <h1 className="benefit-title">Bimbingan Ibadah Intensif</h1>
                        <p className="benefit-description">Perjalanan umroh yang fokus pada ibadah utama, manasik sesuai sunnah, <br /> serta menjunjung tinggi adab <br /> dan akhlak jamaah.</p>
                        <img src="./user/benefit/4.png" alt="" className="benefit-img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="benefit-card">
                        <h1 className="benefit-title">Layanan Terpadu & Profesional</h1>
                        <p className="benefit-description">Layanan umroh lengkap dengan tiket, visa, hotel, konsumsi, dan city tour, didukung customer care aktif serta <br />pendampingan penuh <br />dari  awal hingga <br />pulang.</p>
                        <img src="./user/benefit/5.png" alt="" className="benefit-img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="benefit-card">
                        <h1 className="benefit-title">City Tour Ziarah Sejarah Islam</h1>
                        <p className="benefit-description">Ziarah ke tempat bersejarah di Makkah & Madinah dengan pembekalan makna <br /> spiritual dari muthowif <br />yang paham sejarah <br />Islam.</p>
                        <img src="./user/benefit/6.png" alt="" className="benefit-img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="benefit-card">
                        <h1 className="benefit-title">Grup Kecil, Suasana Kekeluargaan</h1>
                        <p className="benefit-description">Jamaah terlayani secara personal dengan perjalanan yang lebih tertib,<br /> nyaman, dan suasana <br />akrab saling <br />membantu.</p>
                        <img src="./user/benefit/7.png" alt="" className="benefit-img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="benefit-card">
                        <h1 className="benefit-title">Kepastian Berangkat Tanpa Tunggu Kuota</h1>
                        <p className="benefit-description">Jadwal pasti, tanpa sistem 'nunggu penuh', memberikan kenyamanan dan <br />kepastian bagi Jamaah.</p>
                        <img src="./user/benefit/8.png" alt="" className="benefit-img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="benefit-card">
                        <h1 className="benefit-title">Ramah Jamaah <br />Pemula</h1>
                        <p className="benefit-description">Umroh pertama Anda jadi lebih mudah dengan edukasi dan persiapan menyeluruh <br />sebelum keberangkatan, <br />memastikan perjalanan <br />yang lancar dan <br />penuh berkah.</p>
                        <img src="./user/benefit/9.png" alt="" className="benefit-img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="benefit-card">
                        <h1 className="benefit-title">Integrasi Digital & Pelayanan Modern</h1>
                        <p className="benefit-description">Pendaftaran umroh jadi lebih praktis lewat <br />WA atau sistem online, dengan <br />progres yang jelas dan <br />mudah dipantau <br />setiap saat.</p>
                        <img src="./user/benefit/10.png" alt="" className="benefit-img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="benefit-card">
                        <h1 className="benefit-title">Layanan Eksklusif Tambahan</h1>
                        <p className="benefit-description">Nikmati paket oleh-oleh khas Tanah Suci, dokumentasi perjalanan dalam album foto & video, serta sertifikat <br />umroh resmi dari travel, <br />membuat kenangan <br />umroh Anda semakin <br />istimewa.</p>
                        <img src="./user/benefit/11.png" alt="" className="benefit-img" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="benefit-card">
                        <h1 className="benefit-title">Asuransi Perjalanan</h1>
                        <p className="benefit-description">Setiap jamaah dilindungi asuransi, <br />memberikan rasa aman dan nyaman <br />dalam setiap langkah perjalanan umroh <br />Anda.</p>
                        <img src="./user/benefit/12.png" alt="" className="benefit-img" />
                    </div>
                </SwiperSlide>

                <div className='benefit-nav-btn'>
                    <div ref={prevRef} className="benefit-custom-btn"><i className="bi bi-arrow-left-circle-fill"></i></div>
                    <div ref={nextRef} className="benefit-custom-btn"><i className="bi bi-arrow-right-circle-fill"></i></div>
                </div>
            </Swiper>
        </div>
    </>
  );
}
