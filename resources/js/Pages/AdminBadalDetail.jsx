import { useState } from 'react';
import { useForm, Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaEdit, FaTimes, FaSave } from 'react-icons/fa';

export default function BadalDetail({ badal }) {
  const [isEditing, setIsEditing] = useState(false);

  const { data, setData, put, processing, reset } = useForm({
    img_url: '',
    title: badal.title || '',
    kategori: badal.kategori || '',
    harga: badal.harga || '',
    konten: badal.konten || ''
  });

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) reset(); // Cancel edit -> reset data ke aslinya
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('_method', 'PUT'); // Tambahkan method spoofing

        // Hanya append data yang berubah
        Object.keys(data).forEach(key => {
            // Bandingkan dengan data asli
            if (data[key] !== umroh[key]) {
                if (key === 'img_url' && data[key] instanceof File) {
                    formData.append(key, data[key]);
                } else if (data[key] !== null && data[key] !== undefined) {
                    formData.append(key, data[key]);
                }
            }
        });

        // Debug: log data yang akan dikirim
        console.log('Data yang akan diupdate:');
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        router.post(route('admin.umroh.update', umroh.id), formData, {
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
      <Head title={`Detail Paket: ${badal.title}`} />
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold text-hijau">Detail Paket Badal</h2>
          <button
            className={`btn ${isEditing ? 'btn-secondary' : 'btn-success'} d-flex align-items-center gap-2`}
            onClick={handleToggleEdit}
          >
            {isEditing ? <><FaTimes /> Cancel</> : <><FaEdit /> Edit</>}
          </button>
        </div>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <img
              src={badal.img_url}
              alt="Gambar Badal"
              className="img-fluid rounded"
              style={{ maxHeight: '300px' }}
            />
            {isEditing && (
              <input
                type="file"
                className="form-control mt-2"
                onChange={(e) => setData('img_url', e.target.files[0])}
              />
            )}
          </div>

          <div className="mb-3">
            <label className="fw-semibold text-hijau">Nama Paket:</label>
            {isEditing ? (
              <input
                type="text"
                className="form-control"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
              />
            ) : (
              <p>{badal.title}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="fw-semibold text-hijau">Kategori:</label>
            {isEditing ? (
              <select
                className="form-select"
                value={data.kategori}
                onChange={(e) => setData('kategori', e.target.value)}
              >
                {['Haji', 'Umroh'].map((kategori) => (
                  <option key={kategori} value={kategori}>
                    {kategori}
                  </option>
                ))}
              </select>
            ) : (
              <p>{badal.kategori}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="fw-semibold text-hijau">Harga:</label>
            {isEditing ? (
              <div className="input-group">
                <span className="input-group-text">Rp</span>
                <input
                  type="text"
                  className="form-control"
                  value={data.harga}
                  onChange={(e) => setData('harga', e.target.value)}
                />
              </div>
            ) : (
              <p>Rp {badal.harga}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="fw-semibold text-hijau">Konten:</label>
            {isEditing ? (
              <ReactQuill
                value={data.konten}
                onChange={(value) => setData('konten', value)}
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
              />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: badal.konten }} />
            )}
          </div>

          {isEditing && (
            <div className="d-flex justify-content-end mt-3">
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