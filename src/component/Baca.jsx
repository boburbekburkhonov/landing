import React from 'react';
import children from '../assets/images/children.png'
import book from '../assets/images/book.png'
import food from '../assets/images/food.png'

function Baca() {
  return (
    <>
      <section className='baca'>
        <div className="container">
          <div className='apa-top d-flex justify-content-between'>
              <div>
                <h3 className='apa-heading'>
                Kegiatan Pojok Baca Probolinggo
                </h3>

                <p className='apa-desc'>
                Intip kegiatan yang telah kami selenggarakan
                </p>
              </div>

              <p className='apa-desc-small'>
              Selengkapnya
              </p>
            </div>

            <ul className='list-unstyled m-0 mt-4 p-0 d-flex align-items-center justify-content-between'>
              <li>
                <img src={children} alt="children" width="381" height="340" />
              </li>

              <li>
                <img src={book} alt="children" width="381" height="340" />
              </li>

              <li>
                <img src={food} alt="children" width="381" height="340" />
              </li>
            </ul>
          </div>
      </section>
    </>
  );
}

export default Baca;