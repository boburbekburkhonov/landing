import React from 'react';
import guy from '../assets/images/guy.png'
import simmon from '../assets/images/simmon.png'

function Apa() {
  return (
    <>
      <section className='apa'>
        <div className="container apa-container">
          <div className='apa-top d-flex justify-content-between'>
            <div>
              <h3 className='apa-heading'>
              Apa Kata Mereka?
              </h3>

              <p className='apa-desc'>
              Mereka yang telah menjadi pengunjung tetap kami
              </p>
            </div>

            <p className='apa-desc-small'>
            Selengkapnya
            </p>
          </div>

          <ul className='apa-list list-unstyled p-0 d-flex align-items-center justify-content-between'>
            <li className='apa-item'>
              <p className='apa-list-desc'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>

              <div className='apa-list-last-wrapper d-flex align-items-center mt-4'>
                <img src={guy} alt="guy" width="80" height="80" />

                <div className='ms-3'>
                  <p className='apa-list-last-desc'>
                  Guy Hawkins
                  </p>

                  <p className='apa-list-last-desc-small'>
                  32 Tahun, Karyawan
                  </p>
                </div>
              </div>
            </li>

            <li className='apa-item'>
              <p className='apa-list-desc'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>

              <div className='apa-list-last-wrapper d-flex align-items-center mt-4'>
                <img src={simmon} alt="guy" width="80" height="80" />

                <div className='ms-3'>
                  <p className='apa-list-last-desc'>
                  Brooklyn Simmons
                  </p>

                  <p className='apa-list-last-desc-small'>
                  20 Tahun, Mahasiswa
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

export default Apa;