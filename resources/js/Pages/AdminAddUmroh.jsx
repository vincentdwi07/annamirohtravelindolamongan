import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { FaTimes, FaPlus } from 'react-icons/fa';

export default function AdminAddUmroh() {
  // CSS untuk memberikan background putih pada editor
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .ql-editor {
        background-color: white !important;
        min-height: 180px;
      }
      .ql-container {
        background-color: white !important;
      }
      .form-section {
        margin-bottom: 20px;
        border-bottom: 1px solid #e9ecef;
        padding-bottom: 12px;
      }
      .form-section-title {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 14px;
        color: #495057;
      }
      .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      .form-full-width {
        grid-column: span 2;
      }
      .btn-action {
        padding: 8px 20px;
        border-radius: 6px;
        font-weight: 500;
      }
      .form-control, .form-select, .input-group {
        padding: 10px;
        height: auto;
      }
      .input-group-text {
        padding: 0 12px;
      }
      .form-label {
        margin-bottom: 4px;
      }
      .mb-3 {
        margin-bottom: 10px !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  const { data, setData, post, processing, errors, reset } = useForm({
    img_url: '',
    title: '',
    price: '',
    kategori: 'Reguler', // Default value
    periode: '',
    hotel_mekkah: '',
    hotel_madinah: '',
    maskapai: '',
    seat: '',
    itenerary: '',
    catatan: ''
  });

  // Pilihan kategori paket umroh
  const kategoriOptions = [
    'Promo', 
    'Reguler', 
    'Ekonomis', 
    'Plus', 
    'Premium', 
    'Eksklusif', 
    'Tour',
    'Pusat'
  ];

  // Konfigurasi untuk React Quill
  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{'size': ['small', false, 'large', 'huge']}],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'color': []}, {'background': []}],
      ['link'],
      ['clean']
    ],
  };
  
  const formats = [
    'bold', 'italic', 'underline',
    'size',
    'list', 'bullet',
    'color', 'background',
    'link'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('umroh.store'));
  };

  return (
    <AuthenticatedLayout>
      <Head title="Tambah Paket Umroh" />

      <div className="container py-4">
        <h2 className="fw-bold mb-4">Tambah Paket Umroh</h2>
        
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Informasi Dasar */}
            <div className="form-section">
              <h3 className="form-section-title">Informasi Dasar Paket</h3>
              
              <div className="form-grid">
                {/* Upload Gambar - Full width */}
                <div className="mb-1 form-full-width">
                  <label className="form-label fw-semibold">Upload Gambar</label>
                  <input
                    type="file"
                    className="form-control py-2"
                    onChange={(e) => setData('img_url', e.target.files[0])}
                  />
                  {errors.img_url && <div className="text-danger mt-1 small">{errors.img_url}</div>}
                </div>
                
                {/* Nama Paket */}
                <div className="mb-1">
                  <label className="form-label fw-semibold">Nama Paket</label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    placeholder="Masukkan nama paket"
                  />
                  {errors.title && <div className="text-danger mt-1 small">{errors.title}</div>}
                </div>

                {/* Kategori - BARU */}
                <div className="mb-1">
                  <label className="form-label fw-semibold">Kategori</label>
                  <select 
                    className="form-select" 
                    value={data.kategori}
                    onChange={(e) => setData('kategori', e.target.value)}
                  >
                    {kategoriOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Harga */}
                <div className="mb-1">
                  <label className="form-label fw-semibold">Harga</label>
                  <div className="input-group p-0">
                    <span className="input-group-text">Rp</span>
                    <input
                      type="text"
                      className="form-control"
                      value={data.price}
                      onChange={(e) => setData('price', e.target.value)}
                      placeholder="Masukkan harga"
                    />
                  </div>
                  {errors.price && <div className="text-danger mt-1 small">{errors.price}</div>}
                </div>

                {/* Periode */}
                <div className="mb-1">
                  <label className="form-label fw-semibold">Periode</label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.periode}
                    onChange={(e) => setData('periode', e.target.value)}
                    placeholder="contoh: 12 Mei 2025"
                  />
                  {errors.periode && <div className="text-danger mt-1 small">{errors.periode}</div>}
                </div>

                {/* Sisa Kursi */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Sisa Kursi</label>
                  <input
                    type="number"
                    className="form-control"
                    value={data.sisa_kursi}
                    onChange={(e) => setData('seat', e.target.value)}
                    min="0"
                    placeholder="Jumlah kursi tersedia"
                  />
                  {errors.sisa_kursi && <div className="text-danger mt-1 small">{errors.sisa_kursi}</div>}
                </div>
              </div>
            </div>

            {/* Akomodasi */}
            <div className="form-section">
              <h3 className="form-section-title">Informasi Akomodasi</h3>
              
              <div className="form-grid">
                {/* Hotel Mekkah */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Hotel Mekkah</label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.hotel_mekkah}
                    onChange={(e) => setData('hotel_mekkah', e.target.value)}
                    placeholder="Nama hotel di Mekkah"
                  />
                </div>

                {/* Hotel Madinah */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Hotel Madinah</label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.hotel_madinah}
                    onChange={(e) => setData('hotel_madinah', e.target.value)}
                    placeholder="Nama hotel di Madinah"
                  />
                </div>

                {/* Maskapai */}
                <div className="mb-3 form-full-width">
                  <label className="form-label fw-semibold">Maskapai</label>
                  <input
                    type="text"
                    className="form-control"
                    value={data.maskapai}
                    onChange={(e) => setData('maskapai', e.target.value)}
                    placeholder="Nama maskapai penerbangan"
                  />
                </div>
              </div>
            </div>

            {/* Detail Perjalanan */}
            <div className="form-section">
              <h3 className="form-section-title">Detail Perjalanan</h3>
              
              {/* Itinerary dengan React Quill */}
              <div className="mb-5">
                <label className="form-label fw-semibold">Itinerary</label>
                <div className="border rounded">
                  <ReactQuill
                    theme="snow"
                    value={data.itenerary}
                    onChange={(value) => setData('itenerary', value)}
                    modules={modules}
                    formats={formats}
                    style={{ height: "250px", backgroundColor: "white" }}
                  />
                </div>
              </div>

              {/* Catatan Penting dengan React Quill */}
              <div className="mb-4">
                <label className="form-label fw-semibold">Catatan Penting</label>
                <div className="border rounded">
                  <ReactQuill
                    theme="snow"
                    value={data.catatan}
                    onChange={(value) => setData('catatan', value)}
                    modules={modules}
                    formats={formats}
                    style={{ height: "200px", backgroundColor: "white" }}
                  />
                </div>
              </div>
            </div>

            {/* Tombol Aksi */}
            <div className="d-flex justify-content-end gap-3 mt-4">
              <button
                type="button"
                className="btn btn-danger btn-action d-flex align-items-center gap-2"
                onClick={() => window.history.back()}
              >
                <FaTimes /> Batal
              </button>
              <button
                type="submit"
                className="btn btn-success btn-action d-flex align-items-center gap-2"
                disabled={processing}
              >
                <FaPlus /> Tambah Paket
              </button>
            </div>
          </form>
      </div>
    </AuthenticatedLayout>
  );
}