import React from 'react';
import logo from '../assets/images/logo.png'
import instagram from '../assets/images/instagram.png'
import facebook from '../assets/images/facebook.png'
import youtube from '../assets/images/youtube.png'

function Footer() {
  return (
    <>
      <footer className='footer'>
        <div className="container d-flex justify-content-between">
          <div className="footer-left">
            <div className='d-flex align-items-center'>
              <a className="header-link" href="#">
                <img src={logo} alt="logo" width="60" height="60" />
              </a>

              <h3 className='footer-left-heading ms-3'>
              Pojok Baca Probolinggo
              </h3>
            </div>

            <ul className='footer-left-list list-unstyled d-flex align-items-center'>
              <li className='footer-left-item'>
                <a className='footer-left-link' href="#">
                  <img src={instagram} alt="instagram" width="32" height="32" />
                </a>
              </li>

              <li className='footer-left-item'>
                <a className='footer-left-link ms-5' href="#">
                  <img src={facebook} alt="instagram" width="32" height="32" />
                </a>
              </li>

              <li className='footer-left-item'>
                <a className='footer-left-link ms-5' href="#">
                  <img src={youtube} alt="instagram" width="32" height="32" />
                </a>
              </li>
            </ul>
          </div>

          <ul className='footer-list list-unstyled m-0 p-0'>
            <li className='footer-item'>
              <a className='footer-link-active' href="#">
                Kontak
              </a>
            </li>

            <li className='footer-item'>
              <a className='footer-link' href="#">
                Email
              </a>
            </li>

            <li className='footer-item'>
              <a className='footer-link' href="#">
              Alamat
              </a>
            </li>

            <li className='footer-item'>
              <a className='footer-link' href="#">
              No. Rekening
              </a>
            </li>
          </ul>

          <ul className='footer-list list-unstyled m-0 p-0'>
            <li className='footer-item'>
              <a className='footer-link-active' href="#">
              Tentang Kami
              </a>
            </li>

            <li className='footer-item'>
              <a className='footer-link' href="#">
              Umum
              </a>
            </li>
          </ul>

          <ul className='footer-list list-unstyled m-0 p-0'>
            <li className='footer-item'>
              <a className='footer-link-active' href="#">
              Galery
              </a>
            </li>

            <li className='footer-item'>
              <a className='footer-link' href="#">
              Kegiatan 2018
              </a>
            </li>

            <li className='footer-item'>
              <a className='footer-link' href="#">
              Kegiatan 2019
              </a>
            </li>

            <li className='footer-item'>
              <a className='footer-link' href="#">
              Kegiatan 2020
              </a>
            </li>

            <li className='footer-item'>
              <a className='footer-link' href="#">
              Kegiatan 2021
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;