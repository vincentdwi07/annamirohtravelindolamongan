import UserNavbar from "@/Components/user/UserNavbar"
import Footer from "@/Components/user/UserFooter"
import { Head } from "@inertiajs/react"
import {usePage} from "@inertiajs/react";
import FloatWhatsappButton from "@/Components/user/FloatWhatsappButton";

export default function BlogDetail(){

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const monthNames = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];
        const month = monthNames[date.getMonth()]; // getMonth() menghasilkan angka 0-11
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
    };

    function truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    }
    
    const {blog, otherBlogs = []} = usePage().props;

    return(
        <>
            <FloatWhatsappButton/>
            <UserNavbar isForceBlack={true}/>
            <Head title="Umroh Detail"/>
            
            <div className="blog-detail mb-5 mx-3 mx-lg-5">
                <div className="container-fluid pt-3">
                    <div className="row">
                        <div className="p-0 pe-md-4 col-12 col-lg-8 col-md-7">
                            <h1 className="title" style={{ wordBreak: 'break-word' }}>{blog.title}</h1>
                            <p className="text-secondary">Ditulis pada {formatDate(blog.created_at)}</p>
                            <img src={blog.img_url} alt="" />
                            <div className="mt-3 blog-content">
                                {blog.content}
                            </div>
                        </div>
                        <div className="col-12 p-0 col-lg-4 col-md-5">
                            <h3 className="fw-bold" style={{ color: "#09643b" }}>Blog Lainnya</h3>
                            {otherBlogs && otherBlogs.length > 0 ? (
                                otherBlogs.map(other => (
                                    <div 
                                        key={other.id} 
                                        className="other-blog-card mt-3 mb-3"
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => window.location.href = `/blog-detail?id=${other.id}`}
                                    >
                                        <div className="other-blog-img">
                                            <img src={other.img_url} alt={other.title} className="rounded" />
                                        </div>
                                        <div>
                                            <h5 className="title m-0 p-0" style={{ wordBreak: 'break-word' }}>{truncateText(other.content, 15)}</h5>
                                            <p className="text-secondary m-0 p-0">{formatDate(other.created_at)}</p>
                                            <p className="m-0 p-0 blog-content">{truncateText(other.content, 50)}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-muted">Belum ada blog lainnya.</p>
                            )}

                            </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}