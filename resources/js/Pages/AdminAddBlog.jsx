import { useForm, router, Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaPlus, FaTimes } from 'react-icons/fa';

export default function AdminAddBlog() {
  const { data, setData, post, processing, reset, errors } = useForm({
    img_url: '',
    title: '',
    content: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('img_url', data.img_url);
    formData.append('title', data.title);
    formData.append('content', data.content);

    router.post(route('admin.blog.store'), formData, {
      forceFormData: true,
      onSuccess: () => {
        reset();
        router.get(route('admin.blog.index'));
      },
      onError: (errors) => {
        console.error('Gagal menambahkan blog:', errors);
        alert('Gagal menambahkan blog. Cek kembali inputan Anda.');
      }
    });
  };

  const handleCancel = () => {
    router.get(route('admin.blog.index'));
  };

  return (
    <AuthenticatedLayout>
      <Head title="Tambah Blog Baru" />
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold text-hijau mb-0">Tambah Blog Baru</h3>
          <button className="btn btn-secondary d-flex align-items-center gap-2" onClick={handleCancel}>
            <FaTimes /> Batal
          </button>
        </div>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Upload Gambar */}
          <div className="mb-3">
            <label className="form-label fw-semibold text-hijau">Upload Gambar:</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setData('img_url', e.target.files[0])}
            />
            {errors.img_url && <div className="text-danger mt-1">{errors.img_url}</div>}
          </div>

          {/* Judul */}
          <div className="mb-3">
            <label className="form-label fw-semibold text-hijau">Judul:</label>
            <input
              type="text"
              className="form-control"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
            />
            {errors.title && <div className="text-danger mt-1">{errors.title}</div>}
          </div>

          {/* Konten */}
          <div className="mb-4">
            <label className="form-label fw-semibold text-hijau">Konten:</label>
            <ReactQuill
              value={data.content}
              onChange={(value) => setData('content', value)}
              theme="snow"
              modules={{
                toolbar: [
                  ['bold', 'italic', 'underline'],
                  [{ 'size': ['small', false, 'large', 'huge'] }],
                  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                  [{ 'color': [] }, { 'background': [] }],
                  ['link'],
                  ['clean']
                ]
              }}
              style={{ minHeight: '200px' }}
            />
            {errors.content && <div className="text-danger mt-1">{errors.content}</div>}
          </div>

          {/* Tombol Tambah */}
          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="btn btn-success d-flex align-items-center gap-2"
              disabled={processing}
            >
              <FaPlus /> Tambah Blog
            </button>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
}
