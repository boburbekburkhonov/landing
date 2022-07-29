import React from 'react';
import round from '../assets/images/round.png'

function Static(props) {
  return (
    <>
      <section className='static'>
        <div className="container">
          <ul className='static-list list-unstyled d-flex align-items-center justify-content-between'>
            <li className='static-item d-flex align-items-center'>
              <img src={round} alt="round" width="80" height="80" />

              <div className='static-list-desc-wrapper ms-3'>
                <p className='static-list-desc'>
                  500+
                </p>

                <p className='static-list-desc-small'>
                  Judul Buku
                </p>
              </div>
            </li>

            <li className='static-item d-flex align-items-center'>
              <img src={round} alt="round" width="80" height="80" />

              <div className='static-list-desc-wrapper ms-3'>
                <p className='static-list-desc'>
                  $0
                </p>

                <p className='static-list-desc-small'>
                  Gratis Peminjaman
                </p>
              </div>
            </li>

            <li className='static-item d-flex align-items-center'>
              <img src={round} alt="round" width="80" height="80" />

              <div className='static-list-desc-wrapper ms-3'>
                <p className='static-list-desc'>
                  5
                </p>

                <p className='static-list-desc-small'>
                  Kegiatan Rutin
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Static;