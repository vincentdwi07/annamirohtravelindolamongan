import UserNavbar from "@/Components/user/UserNavbar"
import Footer from "@/Components/user/UserFooter"
import { Head } from "@inertiajs/react"
import { useState } from "react";

export default function UserUmrohDetail(){
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return(
        <>
        <Head title={`Umroh`}/>
        <UserNavbar isForceBlack={true}/>
            <div className="umroh-detail-page mx-3 mx-lg-5" style={{ marginTop: "6em" }}>
                <div className="container-fluid m-0 py-3 mb-5">
                    <div className="row p-0 m-0">
                        <div className="col-md-5 p-0 m-0 col-12">
                            <img className="umroh-detail-img" src="./user/umroh-card-img/EKONOMIS.png" alt="" />
                        </div>
                        <div className="col-md-7 ps-4 m-0 p-0 col-12">
                            <h1 className="title">Paket Umroh Detail - 16 Hari</h1>
                            <h1 className="price m-0">Rp2.000.000</h1>
                            <div className="d-flex user-umroh-detail-tab mb-3">
                                <button
                                    className={`btn-umroh-detail-tab ${activeTab === 'tab1' ? 'active' : 'not-active'}`}
                                    onClick={() => handleTabClick("tab1")}
                                >
                                    Detail
                                </button>
                                <button
                                    className={`btn-umroh-detail-tab ${activeTab === 'tab2' ? 'active' : 'not-active'}`}
                                    onClick={() => handleTabClick("tab2")}
                                >
                                    Itenerary
                                </button>
                                <button
                                    className={`btn-umroh-detail-tab ${activeTab === 'tab3' ? 'active' : 'not-active'}`}
                                    onClick={() => handleTabClick("tab3")}
                                >
                                    Catatan Penting
                                </button>
                            </div>

                            <div className="tab-content" >
                                {activeTab === "tab1" && (
                                    <div>
                                        {/* PERIODE */}
                                        <div className="row m-0 p-0">
                                            <div className="col-1 p-0" style={{ maxWidth: "20px", marginRight: "11px" }}>
                                                <h5 className="m-0 umroh-card-logo p-0"><i className="bi bi-calendar3"></i></h5>
                                            </div>
                                            <div className="col-11 p-0 justify-content-start align-items-start text-start d-flex flex-column">
                                                <h5 className="umroh-card-logo m-0">Periode</h5>
                                                <p className="p-0"></p>
                                            </div>
                                        </div>
                                        {/* HOTEL */}
                                        <div className="row m-0 p-0">
                                            <div className="col-1 p-0" style={{ maxWidth: "20px", marginRight: "11px" }}>
                                                <h5 className="m-0 umroh-card-logo p-0"><i className="bi bi-building"></i></h5>
                                            </div>
                                            <div className="col-11 p-0 justify-content-start align-items-start text-start d-flex flex-column">
                                                <h5 className="umroh-card-logo m-0">Hotel</h5>
                                                <p className="p-0 mb-0">Hotel Mekkah: </p>
                                                <p className="p-0">Hotel Madinah: </p>
                                            </div>
                                        </div>
                                        {/* MASKAPAI */}
                                        <div className="row m-0 p-0">
                                            <div className="col-1 p-0" style={{ maxWidth: "20px", marginRight: "11px" }}>
                                                <h5 className="m-0 umroh-card-logo p-0"><i className="bi bi-airplane"></i></h5>
                                            </div>
                                            <div className="col-11 p-0 justify-content-start align-items-start text-start d-flex flex-column">
                                                <h5 className="umroh-card-logo m-0">Maskapai</h5>
                                                <p className="p-0"></p>
                                            </div>
                                        </div>
                                        {/* SISA KURSI */}
                                        <div className="row m-0 p-0">
                                            <div className="col-1 p-0" style={{ maxWidth: "20px", marginRight: "10px" }}>
                                                <img style={{ width: "100%", zIndex: 2 }} src="./user/chair.svg" alt="" />
                                            </div>
                                            <div className="col-11 p-0 justify-content-start align-items-start text-start d-flex flex-column">
                                                <h5 className="umroh-card-logo m-0">Sisa Kursi</h5>
                                                <p className="p-0 mb-0"> Kursi</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === "tab2" && (
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum elit et nulla placerat facilisis. Quisque mattis lacinia diam vulputate sagittis. Nunc scelerisque justo diam, vel porta sapien aliquet eget. Sed molestie porta malesuada. Quisque a ligula in nulla aliquam dignissim. Sed sit amet nulla leo. Quisque mollis volutpat ipsum nec eleifend. Etiam luctus nulla at elit ullamcorper fermentum. In non purus sit amet ante fringilla faucibus. Sed lobortis eget ligula a commodo.
                                        Nulla in diam rutrum, varius dui vel, dapibus mauris. Suspendisse ipsum augue, interdum in quam et, imperdiet molestie justo. Donec mauris velit, eleifend id felis id, pretium molestie erat. Ut purus dui, tincidunt a blandit ut, dignissim convallis felis. Vivamus ac tempus libero. Donec nisl libero, imperdiet nec mollis in, rhoncus eget erat. Nullam et sem gravida ligula congue lacinia. Integer nec neque sit amet ligula cursus feugiat vitae id magna. Suspendisse rutrum tellus vel ante elementum tincidunt. Fusce feugiat enim nec velit pulvinar viverra. Duis pretium enim aliquam mi condimentum, molestie condimentum diam gravida. Phasellus iaculis, dolor non ultrices rutrum, ipsum metus consequat quam, nec imperdiet nunc sapien at dolor. Etiam sit amet vehicula elit. Praesent luctus eros sed risus tempus luctus. Praesent commodo urna in neque venenatis, vel pharetra eros imperdiet.
                                        Curabitur at sodales eros, ut dapibus metus. Nam non malesuada velit. Ut in neque varius, porttitor risus eget, porta nibh. Mauris convallis blandit placerat. Quisque fringilla bibendum magna at rhoncus. Vestibulum hendrerit eros neque, quis consectetur massa facilisis non. Quisque et condimentum lacus. Phasellus sed risus mauris. Morbi dictum bibendum nisl nec eleifend. Nunc vulputate, felis sit amet gravida venenatis, diam massa tempor quam, in ultricies massa lacus ac orci.
                                        Cras ullamcorper metus ut pellentesque condimentum. Cras sed mauris ut ipsum venenatis mollis nec vel dolor. Nam eu velit nec erat luctus cursus. Integer luctus nisl eu justo cursus ullamcorper. Donec ut feugiat risus. Maecenas mattis tempor orci, et facilisis lectus convallis sit amet. Fusce pellentesque elit non dignissim eleifend. Praesent id odio dui. Sed suscipit tortor vel tellus convallis congue.
                                        Cras sed orci eu dui tempor semper. Sed dui velit, mollis vel orci vel, interdum posuere erat. Cras quis congue justo, quis dignissim libero. Nam augue felis, gravida sit amet ligula vitae, venenatis tincidunt lectus. Aliquam dapibus non felis commodo scelerisque. In ultrices leo sit amet enim ullamcorper tincidunt. Aenean mollis sagittis lorem, nec eleifend orci imperdiet a. Maecenas vitae pharetra orci. Aliquam scelerisque, augue ac pulvinar cursus, tortor ex rhoncus turpis, a malesuada felis dolor venenatis erat. Integer sit amet ligula at velit consequat pulvinar. Proin nec lacus porta, ultrices massa quis, efficitur justo. Suspendisse ut fermentum odio. Maecenas quis mi ac purus ornare tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                    </div>
                                )}
                                {activeTab === "tab3" && (
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum elit et nulla placerat facilisis. Quisque mattis lacinia diam vulputate sagittis. Nunc scelerisque justo diam, vel porta sapien aliquet eget. Sed molestie porta malesuada. Quisque a ligula in nulla aliquam dignissim. Sed sit amet nulla leo. Quisque mollis volutpat ipsum nec eleifend. Etiam luctus nulla at elit ullamcorper fermentum. In non purus sit amet ante fringilla faucibus. Sed lobortis eget ligula a commodo.
                                        Nulla in diam rutrum, varius dui vel, dapibus mauris. Suspendisse ipsum augue, interdum in quam et, imperdiet molestie justo. Donec mauris velit, eleifend id felis id, pretium molestie erat. Ut purus dui, tincidunt a blandit ut, dignissim convallis felis. Vivamus ac tempus libero. Donec nisl libero, imperdiet nec mollis in, rhoncus eget erat. Nullam et sem gravida ligula congue lacinia. Integer nec neque sit amet ligula cursus feugiat vitae id magna. Suspendisse rutrum tellus vel ante elementum tincidunt. Fusce feugiat enim nec velit pulvinar viverra. Duis pretium enim aliquam mi condimentum, molestie condimentum diam gravida. Phasellus iaculis, dolor non ultrices rutrum, ipsum metus consequat quam, nec imperdiet nunc sapien at dolor. Etiam sit amet vehicula elit. Praesent luctus eros sed risus tempus luctus. Praesent commodo urna in neque venenatis, vel pharetra eros imperdiet.
                                        Curabitur at sodales eros, ut dapibus metus. Nam non malesuada velit. Ut in neque varius, porttitor risus eget, porta nibh. Mauris convallis blandit placerat. Quisque fringilla bibendum magna at rhoncus. Vestibulum hendrerit eros neque, quis consectetur massa facilisis non. Quisque et condimentum lacus. Phasellus sed risus mauris. Morbi dictum bibendum nisl nec eleifend. Nunc vulputate, felis sit amet gravida venenatis, diam massa tempor quam, in ultricies massa lacus ac orci.
                                        Cras ullamcorper metus ut pellentesque condimentum. Cras sed mauris ut ipsum venenatis mollis nec vel dolor. Nam eu velit nec erat luctus cursus. Integer luctus nisl eu justo cursus ullamcorper. Donec ut feugiat risus. Maecenas mattis tempor orci, et facilisis lectus convallis sit amet. Fusce pellentesque elit non dignissim eleifend. Praesent id odio dui. Sed suscipit tortor vel tellus convallis congue.
                                        Cras sed orci eu dui tempor semper. Sed dui velit, mollis vel orci vel, interdum posuere erat. Cras quis congue justo, quis dignissim libero. Nam augue felis, gravida sit amet ligula vitae, venenatis tincidunt lectus. Aliquam dapibus non felis commodo scelerisque. In ultrices leo sit amet enim ullamcorper tincidunt. Aenean mollis sagittis lorem, nec eleifend orci imperdiet a. Maecenas vitae pharetra orci. Aliquam scelerisque, augue ac pulvinar cursus, tortor ex rhoncus turpis, a malesuada felis dolor venenatis erat. Integer sit amet ligula at velit consequat pulvinar. Proin nec lacus porta, ultrices massa quis, efficitur justo. Suspendisse ut fermentum odio. Maecenas quis mi ac purus ornare tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="form-pendaftaran-umroh">
                        <h1>Formulir Pendaftaran | Paket Umroh Detail - 16 Hari</h1>
                        <p>Silakan isi form di bawah ini untuk melakukan pendaftaran. Setelah itu, tim kami akan menghubungi Anda melalui WhatsApp secepatnya untuk informasi selanjutnya.</p>
                    
                        <form className="">
                            {/* Nama Lengkap */}
                            <div className="mb-3">
                                <label htmlFor="nama" className="form-label">Nama Lengkap</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nama"
                                    name="nama"
                                    placeholder="Masukkan nama lengkap Anda"
                                    required
                                />
                            </div>

                            {/* Nomor WhatsApp */}
                            <div className="mb-3">
                                <label htmlFor="whatsapp" className="form-label">Nomor WhatsApp</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="whatsapp"
                                    name="whatsapp"
                                    placeholder="Masukkan nomor whatsapp anda"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Masukkan e-mail anda"
                                    required
                                />
                            </div>

                            {/* Alamat */}
                            <div className="mb-3">
                                <label htmlFor="alamat" className="form-label">Alamat Lengkap</label>
                                <textarea
                                    className="form-control"
                                    id="alamat"
                                    name="alamat"
                                    rows="3"
                                    placeholder="Masukkan alamat lengkap Anda"
                                    required
                                ></textarea>
                            </div>

                            {/* Tombol Submit */}
                            <button type="submit" className="btn btn-primary w-100">
                                Daftar Sekarang
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        <Footer/>
        </>
    )
}