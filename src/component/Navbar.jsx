import React from 'react';

function Navbar() {
  return (
    <>
      <nav className='sitenav d-flex align-items-center'>
        <ul className='sitenav-list list-unstyled m-0 p-0 d-flex'>
          <li className='sitenav-item'>
            <a className='sitenav-link' href="#">
              Beranda
            </a>
          </li>

          <li className='sitenav-item'>
            <a className='sitenav-link ms-5' href="#">
            Koleksi
            </a>
          </li>

          <li className='sitenav-item'>
            <a className='sitenav-link ms-5' href="#">
            Syarat dan Ketentuan
            </a>
          </li>

          <li className='sitenav-item'>
            <a className='sitenav-link ms-5' href="#">
            Kontak
            </a>
          </li>
        </ul>

        <a className='sitenav-btn' href="#">Masuk</a>
      </nav>
    </>
  );
}

export default Navbar;