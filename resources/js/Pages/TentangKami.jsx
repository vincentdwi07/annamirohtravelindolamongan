import UserNavbar from "@/Components/user/UserNavbar"
import { Head } from "@inertiajs/react"
import FloatWhatsappButton from "@/Components/user/FloatWhatsappButton"
import Footer from "@/Components/user/UserFooter"
import { useEffect } from "react"

export default function TentangKami(){

    useEffect(() => {
        const modal = document.getElementById("exampleModal");
        const video = document.getElementById("sambutanVideo");

        const handleModalHidden = () => {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        };

        modal?.addEventListener("hidden.bs.modal", handleModalHidden);

        return () => {
            modal?.removeEventListener("hidden.bs.modal", handleModalHidden);
        };
    }, []);
    return(
        <>
            <UserNavbar isForceBlack={true}/>
            <FloatWhatsappButton/>
            <Head title="Tentang Kami"/>
            <div className="tentang-kami">
                {/* <div className="hero-tentang-kami px-5 px-lg-5">
                    <div className="overlay"></div>
                    <h1 className="title text-center">TENTANG KAMI</h1>
                </div> */}

                <div className="tentang-kami-content px-3 px-lg-5 pb-5" style={{ marginTop: "6em" }}>
                    <h1 className="title m-0 p-0">An Namiroh Travelindo Lamongan</h1>
                    <p>Berawal dari keinginan tulus untuk memudahkan umat Islam menunaikan Ibadah Umroh, Annamiroh Travelindo Lamongan dibentuk oleh tim profesional yang berpengalaman dan terbukti mampu memfasilitasi perjalanan umroh dari proses persiapan dan pelaksanaan ibadah secara optimal.
                        Kami melihat betapa banyak orang mempunyai niat, namun merasa terhalang oleh berbagai alasan: ekonomi, ketidaktahuan, atau kekhawatiran. Di sinilah kami hadir membantu para calon tamu Allah.
                    </p>
                    <h3 className="sub-title m-0 p-0">
                        Komitmen Kami
                    </h3>
                    <p>Kami berkomitmen memberikan layanan terbaik membantu para tamu Allah menuju Tanah Suci dengan pelayanan mudah urusannya, murah harganya dan amanah dalam pelaksanaanya, Annamiroh Travelindo Lamongan berkomitmen membantu siapapun yang ingin menjadi tamu Allah dengan berbagai layanan skema keberangkatan yang kami miliki. </p>
                    <h3 className="sub-title m-0 p-0">
                        Layanan Kami
                    </h3>
                    <p>Kami juga memberikan berbagai layanan persiapan sebelum keberangkatan secara personal maupun secara jamaah, melayani proses ibadah semaksimal mungkin selama di tanah suci dan membangun hubungan kekeluargaan antar jamaah setelah kembali ke tanah air.  </p>
                    <h3 className="sub-title m-0 p-0">
                        Jaringan Kami
                    </h3>
                    <p>Alhamdulillah, jaringan kami telah memberangkatkan jamaah dari berbagai penjuru Indonesia menuju baitullah. Komitmen, Kebanggaan dan pengalaman kami dedikasikan sepenuhnya agar siapapun bisa berangkat ke tanah suci dan beribadah dengan lancar dan optimal.</p>

                    <h3 className="sub-title mt-5 text-center">Kami percaya: semua bisa umroh, asal mau dan dengan izin Allah.</h3>
                    <div className="container-fluid p-0 pt-5 m-0">

                        <div className="row flex-wrap px-2 px-lg-0 flex-xl-nowrap justify-content-around">
                            <div className="col-12 mt-4 pe-0 pe-xl-3 px-lg-3 px-0 col-md-6 col-xl-4">
                                <div className="visi-misi-content">
                                    <div className="visi-misi-img" style={{ backgroundImage: "url('./user/tentang-kami-page/visi-misi-1.png')" }}>
                                        <div className="overlay"></div>
                                        <h3 className="sub-title m-0 p-0 fs-1 z-3 text-light">Visi Kami</h3>
                                    </div>
                                    <div className="visi-misi-desc p-3 pt-5">
                                        <div className="visi-misi-icon">
                                            <div className="visi-misi-icon-inside">
                                                <i className="bi bi-bullseye"></i>
                                            </div>
                                        </div>
                                        Sahabat terbaik dan terpercaya menuju Baitullah. 
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-4 px-lg-3 px-0 px-md-3 pe-md-0 p-0 col-md-6 col-xl-4">
                                <div className="visi-misi-content">
                                    <div className="visi-misi-img" style={{ backgroundImage: "url('./user/tentang-kami-page/visi-misi-2.png')" }}>
                                        <div className="overlay"></div>
                                        <h3 className="sub-title m-0 p-0 fs-1 z-3 text-light">Misi Kami</h3>
                                    </div>
                                    <div className="visi-misi-desc p-3 pt-5">
                                        <div className="visi-misi-icon">
                                            <div className="visi-misi-icon-inside">
                                                <i className="bi bi-lightning-fill"></i>
                                            </div>
                                        </div>
                                        <ul className="text-start">
                                            <li>Menyediakan layanan umroh dan haji yang sesuai syariah, mudah, murah, profesional, dan amanah.</li>
                                            <li>Membimbing jamaah secara spiritual dan teknis, agar siap lahir batin dalam melaksanakan ibadah.</li>
                                            <li>Membuka jalan agar siapapun bisa ke tanah suci dengan niat yang kuat.</li>
                                            <li>Mengedukasi umat bahwa umroh adalah kemungkinan nyata, bukan sekadar impian.</li>
                                            <li>Menjunjung tinggi pelayanan yang jujur, bersahabat, dan penuh tanggung jawab.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-4 pe-0 px-lg-3 px-0 pe-lg-3 col-md-6 col-xl-4">
                                <div className="visi-misi-content">
                                    <div className="visi-misi-img" style={{ backgroundImage: "url('./user/tentang-kami-page/visi-misi-3.png')" }}>
                                        <div className="overlay"></div>
                                        <h3 className="sub-title m-0 p-0 fs-1 z-3 text-light">Tujuan Kami</h3>
                                    </div>
                                    <div className="visi-misi-desc p-3 pt-5">
                                        <div className="visi-misi-icon">
                                            <div className="visi-misi-icon-inside">
                                                <i className="bi bi-bar-chart-fill"></i>
                                            </div>
                                        </div>
                                        <ul className="text-start">
                                            <li>Mengajak umat untuk memulai dari niat kuat dan ikhlas.</li>
                                            <li>Menyadarkan bahwa keberangkatan ke Tanah Suci adalah panggilan, bukan soal kekayaan.</li>
                                            <li>Mengantarkan jamaah dalam perjalanan ibadah yang dilayani dengan hati dan dipenuhi doa.</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="owner-profile mt-5" style={{ marginBottom: "6em" }}>
                            <div className="container-fluid p-0 pt-5 m-0">
                            <h1 className="title text-start mb-3">Mengenal Pimpinan Kami</h1>
                                <div className="row p-0 flex-wrap flex-lg-nowrap">
                                    <div className="col-12 d-flex  justify-content-start col-lg-4 col-md-6">
                                        <div className="owner-photo-container d-flex flex-column">
                                            <div className="owner-photo-background"></div>
                                            <img src="./user/owner-photo.png" alt="" />
                                            <div className="owner-photo-desc">
                                                <h3 className="name">Abi Sudiono</h3>
                                                <p className="jabatan p-0 m-0">Pimpinan PT Annamiroh Travelindo Cabang Lamongan</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex flex-column align-items-center justify-content-center owner-profile-words col-lg-8 col-md-6">
                                        <p>
                                            Perlu Diketahui Kami Mendirikan PT An Namiroh Travelindo Agar Masyarakat Umat Islam Se-Indonesia Mudah untuk berangkat ke baitullah melaksanakan ibadah haji & umroh dengan harga yang sangat terjangkau dan pelayanan yang lebih baik, mudah urusannya, murah harganya, amanah pelaksanaannya.
                                        </p>
                                        <button type="button" className="btn-play-video d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <div className="p-0 m-0 d-flex align-items-center">
                                                <span className="me-1">Video Sambutan</span>
                                                <span><i className="bi bi-play-fill"></i></span>
                                            </div>
                                        </button>


                                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <h6 className="title fs-6 m-0 p-0">Video Sambutan Pimpinan Annamiroh Travelindo Lamongan</h6>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    
                                                    <div className="modal-body">
                                                        <video id="sambutanVideo" controls src="./user/video-sambutan.mp4"></video>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}