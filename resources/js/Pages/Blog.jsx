import { usePage } from '@inertiajs/react';
import UserNavbar from "@/Components/user/UserNavbar";
import Footer from "@/Components/user/UserFooter";
import { Head } from "@inertiajs/react";
import FloatWhatsappButton from "@/Components/user/FloatWhatsappButton";

// Fungsi untuk mengonversi tanggal
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

export default function Blog() {
    // Mengambil data blog dari props yang dikirimkan oleh controller
    const { blog } = usePage().props;

    // Memastikan ada data blog yang diterima
    if (blog.length === 0) {
        return (
            <>
                <Head title="Blog" />
                <UserNavbar isForceBlack={true} />
                <FloatWhatsappButton />
                <div className="user-blog mb-5 mx-3 mx-lg-5" style={{ marginTop: "6em"}}>
                    <h1 className="title">Blog</h1>
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                        <h3 className='fs-3 text-dark '>Mohon Maaf Blog Belum Tersedia</h3>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    const mainBlog = blog[0]; // Ambil blog pertama untuk main blog
    const sideBlogs = blog.slice(1, 4); // Ambil blog index 1-3 untuk side blog
    const otherBlogs = blog.slice(4); // Ambil blog sisanya untuk other blog

    return (
        <>
            <Head title="Blog" />
            <UserNavbar isForceBlack={true} />
            <FloatWhatsappButton />
            <div className="user-blog mb-5 mx-3 mx-lg-5" style={{ marginTop: "6em" }}>
                <h1 className="title">Blog</h1>
                <div className="row p-0 m-0 gap-3 flex-wrap flex-lg-nowrap">
                    {/* Main Blog */}
                    <div className="col-12 p-0 col-lg-6">
                        <div className="main-blog">
                            <div className="blog-container">
                                <img src={mainBlog.img_url} alt={mainBlog.title} />
                                <h3 className="title">{mainBlog.title}</h3>
                                <p className="m-0 p-0 text-secondary">{formatDate(mainBlog.created_at)}</p>
                                <p>{mainBlog.content}</p>
                                <a className="btn-blog-container" href="#">Lihat Selengkapnya</a>
                            </div>
                        </div>
                    </div>

                    {/* Side Blogs */}
                    <div className="col-12 p-0 col-lg-6">
                        <div className="side-blog">
                            <div className="d-flex flex-column gap-3">
                                {sideBlogs.map(blog => (
                                    <div key={blog.id} className="side-blog-container">
                                        <div className="side-blog-img">
                                            <img src={blog.img_url} alt={blog.title} />
                                        </div>
                                        <div>
                                            <h3 className="title">{blog.title}</h3>
                                            <p className="m-0 p-0 text-secondary">{formatDate(blog.created_at)}</p>
                                            <p>{blog.content}</p>
                                        </div>
                                        <a className="d-inline-block d-lg-none btn-blog-container" href="#">Lihat Selengkapnya</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="d-none mt-lg-5 mt-0 d-lg-block" style={{ color: "green", opacity: "1" }} />

                {/* Other Blogs */}
                <div className="mt-lg-5 mt-0 w-100">
                    <div className="p-0 w-100 other-blog">
                        {otherBlogs.map(blog => (
                            <div key={blog.id} className="other-blog-container">
                                <img src={blog.img_url} alt={blog.title} />
                                <h3 className="title">{blog.title}</h3>
                                <p className="m-0 p-0 text-secondary">{formatDate(blog.created_at)}</p>
                                <p>{blog.content}</p>
                                <a className="btn-blog-container" href="#">Lihat Selengkapnya</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
