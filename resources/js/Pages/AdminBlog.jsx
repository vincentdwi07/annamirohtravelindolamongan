import { useState } from 'react';
import { usePage, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AdminBlog() {
  const { blog } = usePage().props;
  
  const handleDetail = (id) => {
    router.get(route('admin.blog.show', id));
  };

  const handleAddNew = () => {
    router.get(route('admin.blog.create'));
  };

  const handleDelete = (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus blog ini?')) {
      router.delete(route('admin.blog.destroy', id), {
        preserveScroll: true,
        onSuccess: () => {
          window.location.reload();
        },
        onError: (errors) => {
          console.error('Error deleting:', errors);
          alert('Gagal menghapus blog. Silakan coba lagi.');
        }
      });
    }
  };

  // Function to truncate content to max 150 characters
  const truncateContent = (content, maxLength = 150) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  return (
    <AuthenticatedLayout>
      <Head title="Admin Blog" />
      <div className="container py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-hijau">Daftar Blog</h2>
        </div>

        {/* Daftar Kartu Blog */}
        <div className="row">
          {blog.length > 0 ? (
            blog.map((item) => (
              <div className="col-md-3 mb-4" key={item.id}>
                <div className="card h-100 position-relative shadow-sm">
                  <img 
                    src={item.img_url} 
                    className="card-img-top" 
                    alt={item.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-hijau">{item.title}</h5>
                    <div
                        className="card-text mb-5 text-black"
                        dangerouslySetInnerHTML={{ __html: truncateContent(item.content) }}
                    ></div>
                    <div className="position-absolute bottom-0 end-0 m-3">
                      <div className="d-flex gap-2 justify-content-end">
                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleDetail(item.id)}
                        >
                          <i className="bi bi-eye-fill me-1"></i> Detail
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          <i className="bi bi-trash me-1"></i> Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">Tidak ada blog ditemukan.</p>
          )}
        </div>

        {/* Tombol Tambah Baru */}
        <button
          className="btn btn-success position-fixed"
          style={{
            bottom: '1rem',
            right: '1rem',
            width: '2.5rem',
            height: '2.5rem',
          }}
          onClick={handleAddNew}
        >
          +
        </button>
      </div>
    </AuthenticatedLayout>
  );
}