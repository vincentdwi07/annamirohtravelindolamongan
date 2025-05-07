import { usePage } from '@inertiajs/react';
import UserNavbar from "@/Components/user/UserNavbar";
import Footer from "@/Components/user/UserFooter";
import { Head } from "@inertiajs/react";
import FloatWhatsappButton from "@/Components/user/FloatWhatsappButton";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

export default function Blog() {
    const { blog } = usePage().props;

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

    const mainBlog = blog[0];
    const sideBlogs = blog.slice(1, 4);
    const otherBlogs = blog.slice(4);

    function truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    }
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
                        <div 
                            className="main-blog"
                            style={{ cursor: 'pointer' }}
                            onClick={() => window.location.href = `/blog-detail?id=${mainBlog.id}`}
                        >
                            <div className="blog-container">
                                <img src={mainBlog.img_url} alt={mainBlog.title} />
                                <h3 className="title">{mainBlog.title}</h3>
                                <p className="m-0 p-0 text-secondary">{formatDate(mainBlog.created_at)}</p>
                                <p>{truncateText(mainBlog.content, 200)}</p>
                                <a className="btn-blog-container" href={`/blog-detail?id=${mainBlog.id}`}>Lihat Selengkapnya</a>
                            </div>
                        </div>
                    </div>

                    {/* Side Blogs */}
                    <div className="col-12 p-0 col-lg-6">
                        <div className="side-blog">
                            <div className="d-flex flex-column gap-3">
                                {sideBlogs.map(blog => (
                                    <div 
                                        key={blog.id}
                                        className="side-blog-container"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => window.location.href = `/blog-detail?id=${blog.id}`}
                                    >
                                        <div className="side-blog-img">
                                            <img src={blog.img_url} alt={blog.title} />
                                        </div>
                                        <div>
                                            <h3 className="title">{blog.title}</h3>
                                            <p className="m-0 p-0 text-secondary">{formatDate(blog.created_at)}</p>
                                            <p>{truncateText(mainBlog.content, 150)}</p>
                                        </div>
                                        <a className="d-inline-block d-lg-none btn-blog-container" href={`/blog-detail?id=${blog.id}`}>
                                            Lihat Selengkapnya
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                {/* Other Blogs */}
                <div className="mt-lg-5 mt-0 w-100">
                    <div className="p-0 w-100 other-blog">
                        {otherBlogs.map(blog => (
                            <div 
                                key={blog.id} 
                                className="other-blog-container"
                                style={{ cursor: 'pointer' }}
                                onClick={() => window.location.href = `/blog-detail?id=${blog.id}`}
                            >
                                <img src={blog.img_url} alt={blog.title} />
                                <h3 className="title">{blog.title}</h3>
                                <p className="m-0 p-0 text-secondary">{formatDate(blog.created_at)}</p>
                                <p>{truncateText(mainBlog.content, 200)}</p>
                                <a className="btn-blog-container" href={`/blog-detail?id=${blog.id}`}>Lihat Selengkapnya</a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
