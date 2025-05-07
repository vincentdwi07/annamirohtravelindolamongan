import { useState } from 'react';
import { usePage, useForm } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import axios from 'axios';

export default function Dashboard() {
  const { pesanan } = usePage().props; // Ambil data pesanan dari props
  console.log(pesanan); // Debugging pesanan untuk melihat struktur datanya
  const [activeIndex, setActiveIndex] = useState(null);
  const { put } = useForm();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredPesanan = pesanan.filter(item =>
    item.nama_lengkap.toLowerCase().includes(searchTerm)
  );

  const toggleAccordion = (index, itemId) => {
    setActiveIndex(activeIndex === index ? null : index);
    
    // Perbarui nilai is_open menjadi 1 saat accordion dibuka
    if (activeIndex !== index) {
      updateIsOpen(itemId);
    }
  };

  const updateIsOpen = async (id) => {
    try {
      await axios.post(`/pesanan/update-is-open/${id}`);
      // Menangani perubahan state atau UI setelah berhasil
    } catch (error) {
      console.error('Gagal mengupdate is_open:', error);
    }
  };

  // Fungsi untuk update status
  const updateStatus = async (id) => {
    try {
      await axios.post(`/pesanan/update-status/${id}`);
      alert('Status berhasil diperbarui!'); // Menampilkan peringatan

      // Refresh halaman setelah update
      window.location.reload();
    } catch (error) {
      console.error('Gagal mengupdate status:', error);
      alert('Gagal memperbarui status. Silakan coba lagi.');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />

      <div style={{ paddingInline: "5em" }}>
        <div className="card-body text-dark">
          <div className="d-flex justify-content-between w-100">
            <h3 className="fw-bold text-hijau">Pesanan Jamaah</h3>
            <form className="d-flex" role="search">
              <input 
                className="form-control" 
                type="search" 
                placeholder="Cari nama jamaah" 
                aria-label="Search" 
                onChange={handleSearchChange}
              />
            </form>
          </div>
        </div>

        {/* Accordion */}
        <div className="mt-4">
          {filteredPesanan.length === 0 ? (
            <div className="text-start text-black fs-5 mt-4">
              <p className="mt-2">Data tidak ditemukan</p>
            </div>
          ):(
            filteredPesanan.map((item, index) =>(
              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item" key={item.id}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button accordion-button-pesanan position-relative fw-bold ${activeIndex !== index ? 'collapsed' : ''}`}
                      type="button"
                      onClick={() => toggleAccordion(index, item.id)} // Panggil toggle dengan id pesanan
                      aria-expanded={activeIndex === index ? 'true' : 'false'}
                      aria-controls={`flush-collapse${index}`}
                    >
                      {item.nama_lengkap} <span className="badge ms-2 text-bg-warning">{item.is_open === 0 ? 'NEW!' : ''}</span>
                      <div className={`${item.status === 0 ? 'tanda-belum-diproses' : 'tanda-sudah-diproses'}`}></div>
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${index}`}
                    className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body bg-body-tertiary position-relative">
                      <div className="row">
                        <div className="col-8">
                          {/* Nama Paket */}
                          <div className="row mb-2">
                            <div className="col-2 text-secondary">Nama Paket</div>
                            <div className="col-1" style={{ width: "10px" }}>:</div>
                            <div className="col-9 text-hijau fw-bold">{item.nama_paket}</div>
                          </div>
  
                          {/* Jenis Paket */}
                          <div className="row mb-2">
                            <div className="col-2 text-secondary">Jenis Pesanan</div>
                            <div className="col-1" style={{ width: "10px" }}>:</div>
                            <div className="col-9">{item.jenis_pesanan}</div>
                          </div>
  
                          {/* Nomor Whatsapp */}
                          <div className="row mb-2">
                            <div className="col-2 text-secondary">No Whatsapp</div>
                            <div className="col-1" style={{ width: "10px" }}>:</div>
                            <div className="col-9">{item.no_wa}</div>
                          </div>
  
                          {/* Email */}
                          <div className="row mb-2">
                            <div className="col-2 text-secondary">Email</div>
                            <div className="col-1" style={{ width: "10px" }}>:</div>
                            <div className="col-9">{item.email}</div>
                          </div>
  
                          {/* Alamat */}
                          <div className="row mb-2">
                            <div className="col-2 text-secondary">Alamat</div>
                            <div className="col-1" style={{ width: "10px" }}>:</div>
                            <div className="col-9">{item.alamat}</div>
                          </div>
  
                          {/* Status */}
                          <div className="row">
                            <div className="col-2 text-secondary">Status</div>
                            <div className="col-1" style={{ width: "10px" }}>:</div>
                            <div className="col-9">
                              <p className={`text-secondary fw-bold mb-0 ${item.status === 0 ? "text-danger" : "text-success"}`}>{item.status === 0 ? 'Belum Diproses' : 'Pesanan Selesai'}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                          <p className='text-secondary'>{formatDate(item.created_at)}</p>
                          {item.status === 0 ? 
                            (<button 
                              className='text-secondary btn-pesanan-done position-absolute bottom-0 text-white border-0 px-3 py-1 rounded-1' 
                              style={{ marginBottom: "0.7em" }}
                              onClick={() => updateStatus(item.id)} // Panggil markAsDone untuk mengubah status
                            >
                              Tandai Selesai <span><i className="bi bi-check" style={{ verticalAlign: "-.125em" }}></i></span>
                            </button>):
                            ''
                          }
  
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
