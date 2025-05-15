import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { FaTimes, FaPlus } from 'react-icons/fa';

export default function AdminAddHaji() {
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
    kategori: 'Plus', // Default value
    harga: '',
    konten: ''
  });

  // Pilihan kategori haji
  const kategoriOptions = [
    'Plus',
    'Furodha',
    'Percepatan'
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
    post(route('haji.store'));
  };

  return (
    <AuthenticatedLayout>
      <Head title="Tambah Paket Haji" />

      <div className="container py-4">
        <h2 className="fw-bold mb-4">Tambah Paket Haji</h2>
        
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            {/* Informasi Dasar */}
            <div className="form-section">
              <h3 className="form-section-title">Informasi Paket Haji</h3>
              
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

                {/* Kategori */}
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
                  {errors.kategori && <div className="text-danger mt-1 small">{errors.kategori}</div>}
                </div>

                {/* Harga */}
                <div className="mb-1">
                  <label className="form-label fw-semibold">Harga</label>
                  <div className="input-group p-0">
                    <span className="input-group-text">Rp</span>
                    <input
                      type="text"
                      className="form-control"
                      value={data.harga}
                      onChange={(e) => setData('harga', e.target.value)}
                      placeholder="Masukkan harga"
                    />
                  </div>
                  {errors.harga && <div className="text-danger mt-1 small">{errors.harga}</div>}
                </div>
              </div>
            </div>

            {/* Konten */}
            <div className="form-section">
              <div className="mb-4">
                <label className="form-label fw-semibold">Konten</label>
                <div className="border rounded">
                  <ReactQuill
                    theme="snow"
                    value={data.konten}
                    onChange={(value) => setData('konten', value)}
                    modules={modules}
                    formats={formats}
                    style={{ height: "250px", backgroundColor: "white" }}
                  />
                </div>
                {errors.konten && <div className="text-danger mt-1 small">{errors.konten}</div>}
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