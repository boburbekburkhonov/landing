import React from 'react';
import hero from "../assets/images/hero.png"

function Hero(props) {
  return (
    <>
      <section className='hero'>
        <div className="container">
          <p className='hero-desc'>
            Pojok Baca <span className='hero-desc-italic'>Probolinggo</span>
          </p>

          <h1 className='hero-heading'>
            Pinjam Buku Secara <span className='hero-heading-green'>Gratis</span> untuk Masyarakat
          </h1>

          <div className='hero-btn-wrapper d-flex align-items-center justify-content-center'>
            <a className='hero-btn-green' href="#">
              Cari Judul Buku
            </a>

            <a className='hero-btn' href="#">
              Donasi dengan Kami
            </a>
          </div>

          <img className='mt-4' src={hero} alt="hero" width="1238" height="480" />
        </div>
      </section>
    </>
  );
}

export default Hero;