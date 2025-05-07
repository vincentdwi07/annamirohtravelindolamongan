import { useState, useEffect, useRef } from "react";
import ReactPageflip from "react-pageflip";

export default function Flipbook() {
  // Pages array
  const pages = [];
  for (let i = 1; i <= 22; i++) {
    pages.push(`./user/flipbook-img/Destinasi Umroh An Namiroh-images-${i - 1}.jpg`);
  }

  const [flipPageWidth, setFlipPageWidth] = useState("");
  const [flipPageHeight, setFlipPageHeight] = useState("");
  const flipbookRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setFlipPageWidth("550");
    } else if (window.innerWidth > 768 && window.innerWidth <= 1200) {
      setFlipPageWidth("350");
    } else {
      setFlipPageWidth("170");
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setFlipPageHeight("800");
    } else if (window.innerWidth > 768 && window.innerWidth <= 1200) {
      setFlipPageHeight("500");
    } else {
      setFlipPageHeight("270");
    }
  }, []);

  // Fungsi untuk navigasi ke halaman berikutnya
  const nextButtonFlip = () => {
    const pageFlip = flipbookRef.current?.pageFlip(); // Menjamin bahwa flipbookRef ada
    if (pageFlip) {
      pageFlip.flipNext();
    }
  };

  // Fungsi untuk navigasi ke halaman sebelumnya
  const prevButtonFlip = () => {
    const pageFlip = flipbookRef.current?.pageFlip(); // Menjamin bahwa flipbookRef ada
    if (pageFlip) {
      pageFlip.flipPrev();
    }
  };

  return (
    <>
      <div className="d-flex w-100 justify-content-center align-items-center">
        <ReactPageflip
          ref={flipbookRef} // Pastikan flipbookRef diterapkan pada ReactPageflip
          width={flipPageWidth}
          height={flipPageHeight}
          size="stretch"
          usePortrait={true}
          orientation="landscape"
        >
          {pages.map((page, index) => (
            <div className="page" key={index}>
              <img
                src={page}
                alt={`Page ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </ReactPageflip>
      </div>

      <div className="d-flex w-100 justify-content-between mt-3">
        <div className="d-flex gap-2">
          <div className="benefit-custom-btn" onClick={prevButtonFlip}><i className="bi bi-arrow-left-circle-fill"></i></div>
          <div className="benefit-custom-btn" onClick={nextButtonFlip}><i className="bi bi-arrow-right-circle-fill"></i></div>
        </div>
        <div className="d-flex align-items-center">
          <a className="btn-download-flipbook" href="/user/Destinasi Umroh An Namiroh.pdf" download rel="noopener noreferrer">Download Buku<i className="bi ms-2 p-0 bi-cloud-arrow-down-fill"></i></a>
        </div>
      </div>
    </>
  );
}
