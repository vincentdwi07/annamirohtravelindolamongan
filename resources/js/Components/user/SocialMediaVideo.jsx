export default function SocialMediaVideo(){
    return(
        <>
        <div className="container-fluid">
            <div className="row justify-content-between social-media-group">
                <div className="col-12  col-md-6 col-xl-4">
                    <div className="social-media-card position-relative">
                        <div className="social-media-card-icon">
                            <a  target='blank' href="https://www.tiktok.com/@an_namiroh.travel?is_from_webapp=1&sender_device=pc" style={{ textDecoration: "none" }}><i className="bi bi-tiktok"></i></a>
                        </div>
                        <div className="social-media-video-wrapper">
                            <video
                                src="./user/video/tiktok.mp4"
                                className="video-player"
                                controls
                                controlsList="nodownload noremoteplayback"
                            ></video>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a  target='blank' className="btn-cta-social-media" href="https://www.tiktok.com/@an_namiroh.travel?is_from_webapp=1&sender_device=pc">Kunjungi Tiktok Kami</a>
                        </div>
                    </div>
                </div>
                <div className="col-12  col-md-6 col-xl-4">
                    <div className="social-media-card position-relative">
                    <div className="social-media-card-icon">
                            <a  target='blank' href="https://www.instagram.com/an_namiroh_lamongan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==
" style={{ textDecoration: "none" }}><i className="bi bi-instagram"></i></a>
                        </div>
                    <div className="social-media-video-wrapper">
                            <video
                                src="./user/video/instagram.mp4"
                                className="video-player"
                                controls
                                controlsList="nodownload noremoteplayback"
                            ></video>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a  target='blank' className="btn-cta-social-media" href="https://www.instagram.com/an_namiroh_lamongan?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==
">Kunjungi Instagram Kami</a>
                        </div>
                    </div>
                </div>
                <div className="col-12  col-md-6 col-xl-4">
                    <div className="social-media-card position-relative">
                    <div className="social-media-card-icon">
                            <a  target='blank' href="https://youtube.com/@pt.annamirohtravelindolamongan?si=CvwLGUJZ3WArWo-K" style={{ textDecoration: "none" }}><i className="bi bi-youtube"></i></a>
                        </div>
                    <div className="social-media-video-wrapper">
                            <video
                                src="./user/video/youtube.mp4"
                                className="video-player"
                                controls
                                controlsList="nodownload noremoteplayback"
                            ></video>
                        </div>
                        <div className="d-flex justify-content-center">
                            <a  target='blank' className="btn-cta-social-media" href="https://youtube.com/@pt.annamirohtravelindolamongan?si=CvwLGUJZ3WArWo-K">Kunjungi Youtube Kami</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}