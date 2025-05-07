export default function Footer(){
    return(
        <>
                    <svg className='cta-wave' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#09643b" fillOpacity="1" d="M0,32L48,48C96,64,192,96,288,112C384,128,480,128,576,117.3C672,107,768,85,864,90.7C960,96,1056,128,1152,128C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="cta-home px-3 mb-0 px-lg-5">
                <h1 className='title mb-3 p-0'>Mulai Perjalanan Ibadahmu <br />Hari Ini!</h1>
                <div className='cta-btn-home'>
                    <a  target="_blank" href="https://wa.me/6285649594417"><i className="bi bi-whatsapp me-2"></i>Hubungi Kami</a>
                </div>
            </div>

            <footer className="user-footer position-relative ">
                <img className="user-footer-dec-1" src="./user/user-footer-decoration.svg" alt="" />
                <img className="user-footer-dec-2" src="./user/user-footer-decoration.svg" alt="" />
                <div className="container-fluid px-3 py-5 px-lg-5 w-100">
                    <div className="row">
                        <div className="col-12 col-md-6 pe-3 pe-lg-5 col-lg-5">
                            <img className="footer-img" src="./user/logo.png" alt="" />
                            <p className="footer-desc">Berawal dari keinginan tulus untuk memudahkan umat Islam menunaikan umroh. Annamiroh dibentuk oleh tim yang telah
                                lama berkecimpung dalam dunia ibadah ke Tanah Suci. Kami melihat betapa banyak orang yang mempunyai niat, namun 
                                merasa terhalang oleh berbagai alasan: ekonomi, ketidaktahuan, atau kekhawatiran. Di sinilah kami hadir.
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <h4 className="fw-bold text-white mb-3">Kontak Kami</h4>
                            <div className="d-flex justify-content-start mb-2 gap-2 align-items-start">
                                <div><p><i className="bi bi-geo-alt-fill user-footer-logo"></i></p></div>
                                <div><a className="m-0 user-footer-contact">Jl. Laras Liris No. 52, Desa Tumenggung, Kecamatan Lamongan, Kabupaten Lamongan, Jawa Timur 62214</a></div>
                            </div>
                            <div className="d-flex justify-content-start gap-2 align-items-start">
                                <div><p><i className="bi bi-instagram user-footer-logo"></i></p></div>
                                <div><a className="m-0 user-footer-contact">@an_namiroh_lamongan</a></div>
                            </div>
                            <div className="d-flex justify-content-start gap-2 align-items-start">
                                <div><p><i className="bi bi-tiktok user-footer-logo"></i></p></div>
                                <div><a className="m-0 user-footer-contact">@an_namiroh.travel</a></div>
                            </div>
                            <div className="d-flex justify-content-start gap-2 align-items-start">
                                <div><p><i className="bi bi-youtube user-footer-logo"></i></p></div>
                                <div><a className="m-0 user-footer-contact">PT. An Namiroh Travelindo Lamongan</a></div>
                            </div>
                            <div className="d-flex justify-content-start gap-2 align-items-start">
                                <div><p><i className="bi bi-facebook user-footer-logo"></i></p></div>
                                <div><a className="m-0 user-footer-contact">@Annamiroh Lamongan</a></div>
                            </div>
                            <div className="d-flex justify-content-start gap-2 align-items-start">
                                <div><p><i className="bi bi-envelope user-footer-logo"></i></p></div>
                                <div><a className="m-0 user-footer-contact">ptannamirohtravelindolamongan@gmail.com</a></div>
                            </div>
                            <div className="d-flex justify-content-start gap-2 align-items-start">
                                <div><p><i className="bi bi-whatsapp user-footer-logo"></i></p></div>
                                <div className="d-flex flex-column">
                                    <a className="m-0 user-footer-contact" target="_blank" href="https://wa.me/6285649594417">0856-4959-4417</a>
                                    <a className="m-0 user-footer-contact" target="_blank" href="https://wa.me/6285731588755">0857-3158-8755</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3">
                            <h4 className="fw-bold mt-3 mt-lg-0 text-white mb-3">Navigasi</h4>
                            <div className="d-flex flex-column gap-2 user-footer-nav">
                                <a href="/">HOME</a>
                                <a href="/umroh?kategori=promo">UMROH</a>
                                <a href="">HAJI</a>
                                <a href="">BADAL</a>
                                <a href="/faq">FAQ</a>
                                <a href="/blog">BLOG</a>
                                <a href="/tentang-kami">TENTANG KAMI</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright d-flex justify-content-center bg-white align-items-center p-3">
                <p className='p-0 m-0 fw-bold' style={{ color: "#09643b" }}>Copyright &copy; 2025 PT. Annamiroh Travelindo</p>
            </div>
        </>
    )
}