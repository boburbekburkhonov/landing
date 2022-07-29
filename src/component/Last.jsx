import React from 'react';

function Last() {
  return (
    <>
      <section className='last'>
        <div className="container">
          <h2 className='last-heading'>
            Ingin <span className='last-heading-green'>Membantu</span> Meningkatkan Literasi Anak-Anak Sekitar Kita?
          </h2>

          <p className='last-desc'>
          Percayakan melalui kegiatan kita
          </p>

          <div className='last-wrapper d-flex flex-column align-items-center justify-content-center'>
          <a className='last-btn-green' href="#">
            Donasi dengan Kami
          </a>

          <p className='last-desc-small'>
          Atau
          </p>

          <a className='last-btn' href="#">
            Hubungi Kami
          </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Last;