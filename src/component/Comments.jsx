import React from 'react';
import man from '../assets/images/man.png'
import woman from '../assets/images/woman.png'

function Coments(props) {
  return (
    <>
      <section className='comment'>
        <div className="container">
          <h2 className='comment-heading'>
            Kenapa Kita <span className='comment-heading-green'>Harus</span> Membaca Buku?
          </h2>

          <ul className='comment-list list-unstyled m-0 p-0 d-flex align-items-center justify-content-between'>
            <li className='comment-item'>
              <p className='comment-list-desc'>
              “Aku rela dipenjara asalkan <span className='comment-list-desc-weight'>bersama buku</span>, karena dengan buku <span className='comment-list-desc-weight'>aku bebas”</span>
              </p>

              <div className='comment-list-last-wrapper mt-4 d-flex align-items-center justify-content-center'>
                <img src={man} alt="man" width="80" height="80" />

                <div className='comment-list-last-desc-wrapper ms-3'>
                  <p className='comment-list-last-desc'>
                  Mohammad Hatta
                  </p>

                  <p className='comment-list-last-small'>
                  Wakil Presiden Indonesia Pertama
                  </p>
                </div>
              </div>
            </li>

            <li className='comment-item'>
              <p className='comment-list-desc'>
              “Cuma perlu <span className='comment-list-desc-weight'>satu buku</span> untuk jatuh cinta pada membaca, Cari Buku itu!<span className='comment-list-desc-weight'> Mari jatuh cinta!</span>
              </p>

              <div className='comment-list-last-wrapper mt-4 d-flex align-items-center'>
                <img src={woman} alt="man" width="80" height="80" />

                <div className='comment-list-last-desc-wrapper ms-3'>
                  <p className='comment-list-last-desc'>
                  Najwa Shihab
                  </p>

                  <p className='comment-list-last-small'>
                  Duta Membaca
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Coments;