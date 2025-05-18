// resources/js/Pages/Admin/UmrohDetail.jsx

import { useState } from 'react';
import { useForm, Head, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { FaEdit, FaTimes, FaSave } from 'react-icons/fa';

export default function UmrohDetail({ umroh }) {
  const [isEditing, setIsEditing] = useState(false);

  const { data, setData, put, processing, reset } = useForm({
    img_url: '',
    title: umroh.title || '',
    kategori: umroh.kategori || '',
    price: umroh.price || '',
    periode: umroh.periode || '',
    hotel_mekkah: umroh.hotel_mekkah || '',
    hotel_madinah: umroh.hotel_madinah || '',
    maskapai: umroh.maskapai || '',
    seat: umroh.seat || '',
    itenerary: umroh.itenerary || '',
    catatan: umroh.catatan || ''
  });

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) reset(); // Cancel edit -> reset data ke aslinya
  };


    const handleSubmit = (e) => {
      e.preventDefault();
      
      const formData = new FormData();
      // Tambahkan method spoofing untuk Laravel
      formData.append('_method', 'PUT');
      
      // Append data yang berubah
      Object.keys(data).forEach(key => {
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

      // Gunakan router.post dengan method spoofing
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
      <Head title={`Detail Paket: ${umroh.title}`} />
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fw-bold  text-hijau">Detail Paket Umroh</h2>
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
              src={umroh.img_url}
              alt="Gambar Umroh"
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
            <label className="fw-semibold  text-hijau">Nama Paket:</label>
            {isEditing ? (
              <input
                type="text"
                className="form-control"
                value={data.title}
                onChange={(e) => setData('title', e.target.value)}
              />
            ) : (
              <p>{umroh.title}</p>
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
                {['Promo', 'Reguler', 'Ekonomis', 'Plus', 'Premium', 'Eksklusif', 'Tour', 'Pusat'].map((kategori) => (
                  <option key={kategori} value={kategori}>
                    {kategori}
                  </option>
                ))}
              </select>
            ) : (
              <p>{umroh.kategori}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="fw-semibold text-hijau">Harga:</label>
            {isEditing ? (
              <input
                type="text"
                className="form-control"
                value={data.price}
                onChange={(e) => setData('price', e.target.value)}
              />
            ) : (
              <p>Rp {umroh.price}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="fw-semibold  text-hijau">Periode:</label>
            {isEditing ? (
              <input
                type="text"
                className="form-control"
                value={data.periode}
                onChange={(e) => setData('periode', e.target.value)}
              />
            ) : (
              <p>{umroh.periode}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="fw-semibold  text-hijau">Hotel Mekkah:</label>
            {isEditing ? (
              <input
                type="text"
                className="form-control"
                value={data.hotel_mekkah}
                onChange={(e) => setData('hotel_mekkah', e.target.value)}
              />
            ) : (
              <p>{umroh.hotel_mekkah}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="fw-semibold  text-hijau">Hotel Madinah:</label>
            {isEditing ? (
              <input
                type="text"
                className="form-control"
                value={data.hotel_madinah}
                onChange={(e) => setData('hotel_madinah', e.target.value)}
              />
            ) : (
              <p>{umroh.hotel_madinah}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="fw-semibold  text-hijau">Maskapai:</label>
            {isEditing ? (
              <input
                type="text"
                className="form-control"
                value={data.maskapai}
                onChange={(e) => setData('maskapai', e.target.value)}
              />
            ) : (
              <p>{umroh.maskapai}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="fw-semibold  text-hijau">Sisa Kursi:</label>
            {isEditing ? (
              <input
                type="number"
                className="form-control"
                value={data.seat}
                onChange={(e) => setData('seat', e.target.value)}
              />
            ) : (
              <p>{umroh.seat}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="fw-semibold  text-hijau">Itinerary:</label>
            {isEditing ? (
              <ReactQuill
                value={data.itenerary}
                onChange={(value) => setData('itenerary', value)}
              />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: umroh.itenerary }} />
            )}
          </div>

          <div className="mb-3">
            <label className="fw-semibold text-hijau">Catatan Penting:</label>
            {isEditing ? (
              <ReactQuill
                value={data.catatan}
                onChange={(value) => setData('catatan', value)}
              />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: umroh.catatan }} />
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
