export default function IjinAccordion(){
    return(
        <>
        <div className="accordion accordion-flush mx-3 mb-5 mt-5" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button ps-0 accordion-ijin-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                    >
                        PPIU No. 949 Tahun 2019
                    </button>
                </h2>
                <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
                >
                    <div className="accordion-body pt-0 ps-0" style={{ backgroundColor: "#fff2d7" }}>
                        <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magni asperiores quas hic modi praesentium dicta maxime rerum, harum veritatis cupiditate, molestiae provident. Error nemo nam quidem nobis quam doloremque!</p>
                        <a target="_blank" className="bukti-perijinan" href="https://drive.google.com/file/d/1vzRSZLgdyj2RODmeor7_qfnZpcTfUzw0/view?usp=sharing">Lihat Bukti Perijinan → </a>
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button
                        className="accordion-button ps-0 accordion-ijin-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                    >
                        PIHK No. 151 Tahun 2021
                    </button>
                </h2>
                <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
                >
                <div className="accordion-body pt-0 ps-0" style={{ backgroundColor: "#fff2d7" }}>
                    <p className="m-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, dignissimos corrupti necessitatibus maiores nesciunt impedit voluptate natus suscipit amet distinctio! Itaque, aliquid obcaecati laudantium dolor nulla tempora quidem officia quasi</p>
                    <a target="_blank" className="bukti-perijinan" href="https://drive.google.com/file/d/1NAYlHaN9a9FF9ZUwTZVuItwi0cq1ggY9/view?usp=sharing">Lihat Bukti Perijinan → </a>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}