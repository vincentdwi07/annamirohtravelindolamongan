import { useState } from 'react';
import { usePage, router, useForm, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaEdit, FaTimes, FaSave } from 'react-icons/fa';

export default function AdminBlogDetail() {
  const { blog } = usePage().props;
  const [isEditing, setIsEditing] = useState(false);

  const { data, setData, post, processing, reset } = useForm({
    img_url: null,  // Default null, bukan empty string
    title: blog.title || '',
    content: blog.content || '',
    created_at: blog.created_at ? new Date(blog.created_at).toISOString().split('T')[0] : '',
  });

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) reset(); // Cancel edit -> reset data ke aslinya
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('_method', 'PUT');

    // Kirim data selain img_url
    ['title', 'content', 'created_at'].forEach(key => {
      if (data[key] !== blog[key]) {
        formData.append(key, data[key]);
      }
    });

    // Kirim img_url hanya kalau ada file baru
    if (data.img_url instanceof File) {
      formData.append('img_url', data.img_url);
    }

    console.log('Data yang akan diupdate:');
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    router.post(route('admin.blog.update', blog.id), formData, {
      forceFormData: true,
      preserveScroll: true,
      onSuccess: () => {
        setIsEditing(false);
        window.location.reload();
      },
      onError: (errors) => {
        console.error('Error updating:', errors);
        alert('Gagal menyimpan perubahan. Silakan cek kembali data Anda.');
      }
    });
  };

  return (
    <AuthenticatedLayout>
      <Head title={blog.title} />
      <div className="container py-4">
        {/* Header dan tombol edit/cancel */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="text-hijau fw-bold mb-0">Detail Blog</h3>
          <button
            className={`btn ${isEditing ? 'btn-secondary' : 'btn-success'} d-flex align-items-center gap-2`}
            onClick={handleToggleEdit}
          >
            {isEditing ? <><FaTimes /> Cancel</> : <><FaEdit /> Edit</>}
          </button>
        </div>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Gambar */}
          <div className="mb-4">
            <img
              src={blog.img_url}
              alt="Gambar Blog"
              className="img-fluid rounded"
              style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
            />
            {isEditing && (
              <div className="mt-2">
                <label className="form-label fw-semibold text-hijau">Ganti Gambar:</label>
                <input
                  type="file"
                  className="form-control"
                  accept="image/*"
                  onChange={(e) => setData('img_url', e.target.files[0])}
                />
              </div>
            )}
          </div>

          {/* Judul */}
          <div className="mb-3">
            <label className="fw-semibold text-hijau">Judul:</label>
            {isEditing ? (
              <input
                type="text"
                className="form-control"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
              />
            ) : (
              <h2 className="card-title fw-bold text-hijau mb-0">{blog.title}</h2>
            )}
          </div>

          {/* Tanggal */}
          <div className="mb-3">
            <label className="fw-semibold text-hijau">Tanggal:</label>
            {isEditing ? (
              <input
                type="date"
                className="form-control"
                value={data.created_at}
                onChange={(e) => setData('created_at', e.target.value)}
              />
            ) : (
              <p className="text-muted mb-0">
                <i className="bi bi-calendar me-2"></i>
                {new Date(blog.created_at).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </p>
            )}
          </div>

          {/* Konten */}
          <div className="mb-3">
            <label className="fw-semibold text-hijau">Konten:</label>
            {isEditing ? (
              <ReactQuill
                value={data.content}
                onChange={(value) => setData('content', value)}
                theme="snow"
                modules={{
                  toolbar: [
                    ['bold', 'italic', 'underline'],
                    [{ size: ['small', false, 'large', 'huge'] }],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ color: [] }, { background: [] }],
                    ['link'],
                    ['clean']
                  ]
                }}
                style={{ minHeight: '200px', marginBottom: '50px' }}
              />
            ) : (
              <div className="blog-content mt-4" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
            )}
          </div>

          {/* Tombol Simpan */}
          {isEditing && (
            <div className="d-flex justify-content-end mt-5">
              <button
                type="submit"
                className="btn btn-success d-flex align-items-center gap-2"
                disabled={processing}
              >
                <FaSave /> Simpan Perubahan
              </button>
            </div>
          )}
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
