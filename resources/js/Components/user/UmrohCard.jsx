export default function UmrohCard({img, title, price, periode, hotelMekkah, hotelMadinah, maskapai, seat}){
    return(
        <>
            <div className="mx-4 mx-lg-3 umroh-card position-relative mb-5 mt-3">
                <img className="umroh-card-decoration" style={{ zIndex: 0 }} src="./user/umroh-card-decoration.svg" alt="" />
                <img className="umroh-card-img" src={img} alt="" />
                <h1 className="umroh-card-title">{title}</h1>
                <h1 className="umroh-card-price">Rp{price}<span style={{ fontSize: "1rem"}}>/pax</span></h1>
                <hr className="mb-4" style={{ borderBottom: "1.5px solid green", opacity: "1" }}/>
                <div className="container m-0 p-0 w-100">
                    {/* PERIODE */}
                    <div className="row m-0 p-0">
                        <div className="col-1 p-0">
                            <h5 className="m-0 umroh-card-logo p-0"><i className="bi bi-calendar3"></i></h5>
                        </div>
                        <div className="col-11 p-0 justify-content-start align-items-start text-start d-flex flex-column">
                            <h5 className="umroh-card-logo m-0">Periode</h5>
                            <p className="p-0">{periode}</p>
                        </div>
                    </div>
                    {/* HOTEL */}
                    <div className="row m-0 p-0">
                        <div className="col-1 p-0">
                            <h5 className="m-0 umroh-card-logo p-0"><i className="bi bi-building"></i></h5>
                        </div>
                        <div className="col-11 p-0 justify-content-start align-items-start text-start d-flex flex-column">
                            <h5 className="umroh-card-logo m-0">Hotel</h5>
                            <p className="p-0 mb-0">Hotel Mekkah: {hotelMekkah}</p>
                            <p className="p-0">Hotel Madinah: {hotelMadinah}</p>
                        </div>
                    </div>
                    {/* MASKAPAI */}
                    <div className="row m-0 p-0">
                        <div className="col-1 p-0">
                            <h5 className="m-0 umroh-card-logo p-0"><i className="bi bi-airplane"></i></h5>
                        </div>
                        <div className="col-11 p-0 justify-content-start align-items-start text-start d-flex flex-column">
                            <h5 className="umroh-card-logo m-0">Maskapai</h5>
                            <p className="p-0">{maskapai}</p>
                        </div>
                    </div>
                    {/* SISA KURSI */}
                    <div className="row m-0 p-0">
                        <div className="col-1 p-0">
                                <img style={{ width: "75%", zIndex: 2 }} src="./user/chair.svg" alt="" />
                            </div>
                            <div className="col-11 p-0 justify-content-start align-items-start text-start d-flex flex-column">
                                <h5 className="umroh-card-logo m-0">Sisa Kursi</h5>
                                <p className="p-0 mb-0">{seat} Kursi</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex w-100 justify-content-center">
                        <a className="detail-paket-btn" href="">Detail Paket</a>
                    </div>
            </div>
        </>
    )
}