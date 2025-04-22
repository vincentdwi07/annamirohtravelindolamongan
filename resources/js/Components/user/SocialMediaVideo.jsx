export default function SocialMediaVideo(){
    return(
        <>
        <div className="container-fluid">
            <div className="row social-media-group">
                <div className="col-12 pe-0 pe-lg-3 pe-xl-3 p-0 col-md-6 col-xl-4">
                    <div className="social-media-card position-relative">
                        <div className="social-media-card-icon">
                            <a href="" style={{ textDecoration: "none" }}><i className="bi bi-tiktok"></i></a>
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
                            <a className="btn-cta-social-media" href="">Kunjungi Tiktok Kami</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 px-0 px-lg-3 px-xl-3 col-md-6 col-xl-4">
                    <div className="social-media-card position-relative">
                    <div className="social-media-card-icon">
                            <a href="" style={{ textDecoration: "none" }}><i className="bi bi-instagram"></i></a>
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
                            <a className="btn-cta-social-media" href="">Kunjungi Instagram Kami</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 ps-0 pe-lg-3 ps-xl-3 pe-0 col-md-6 col-xl-4">
                    <div className="social-media-card position-relative">
                    <div className="social-media-card-icon">
                            <a href="" style={{ textDecoration: "none" }}><i className="bi bi-youtube"></i></a>
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
                            <a className="btn-cta-social-media" href="">Kunjungi Youtube Kami</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}