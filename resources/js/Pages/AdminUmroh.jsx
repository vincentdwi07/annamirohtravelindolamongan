import { useState } from 'react';
import { usePage, router } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AdminUmroh() {
  const { umroh } = usePage().props;
  const [filterKategori, setFilterKategori] = useState('Semua');

  const kategoriList = [
    'Semua',
    'Promo',
    'Reguler',
    'Ekonomis',
    'Plus',
    'Premium',
    'Eksklusif',
    'Tour',
    'Pusat'
  ];

  const handleFilterChange = (e) => {
    setFilterKategori(e.target.value);
  };

  const filteredUmroh = filterKategori === 'Semua'
    ? umroh
    : umroh.filter((item) => item.kategori === filterKategori);

  const handleDetail = (id) => {
    router.get(route('admin.umroh.detail', id));
  };

  const handleAddNew = () => {
    router.get(route('umroh.create'));
  };

  const handleDelete = (id) => {  // Terima parameter id
      if (confirm('Apakah Anda yakin ingin menghapus paket Umroh ini?')) {
          router.delete(route('admin.umroh.destroy', id), {  // Gunakan id yang diterima
              preserveScroll: true,
              onSuccess: () => {
                  // Refresh halaman untuk memperbarui daftar
                  window.location.reload();
              },
              onError: (errors) => {
                  console.error('Error deleting:', errors);
                  alert('Gagal menghapus paket Umroh. Silakan coba lagi.');
              }
          });
      }
  };
  
  return (
    <AuthenticatedLayout>
      <Head title="Admin Umroh" />
      <div className="container py-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-hijau">Daftar Paket Umroh</h2>
          <select
            className="form-select w-auto"
            value={filterKategori}
            onChange={handleFilterChange}
          >
            {kategoriList.map((kategori) => (
              <option key={kategori} value={kategori}>{kategori}</option>
            ))}
          </select>
        </div>

        {/* Daftar Kartu Umroh */}
        <div className="row">
          {filteredUmroh.length > 0 ? (
            filteredUmroh.map((item) => (
              <div className="col-md-3 mb-4" key={item.id}>
                <div className="card h-100 position-relative shadow-sm">
                  <img src={item.img_url} className="card-img-top" alt={item.title} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-hijau">{item.title}</h5>
                    <p className="card-text mb-5 text-black">{item.kategori}</p>
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
            <p className="text-muted">Tidak ada paket umroh ditemukan.</p>
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
