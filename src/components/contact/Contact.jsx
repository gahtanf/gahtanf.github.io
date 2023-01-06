import React from 'react'
import "./contact.css"
import foto from '../../assets/picture/logoG.png'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <br/>
        <h1>Contact me</h1>
        <br/>
        <div className="contact__container container grid">
        <div className="contact__content">

            <div className="contact__info">
                <div className="contact__card">
                <i class="uil uil-envelope"></i>

                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">gahtanfadholii@gmail.com</span>

                    <a href="mailto:gahtanfadholii@gmail.com" className="contact__button">
                    Write me
                    <i class="uil uil-arrow-right"></i>
                    </a>
                </div>
            </div>
        <section>
          <img className='fotoawl'  src={foto}/>
        </section>
            <div className="contact__card">
                    <i className="bx bxl-whatsapp contact__card-icon"></i>

                    <h3 className="contact__card-title">Whatsapp</h3>
                    <span className="contact__card-data">+6281287622554</span>

                    <a href="https://wa.me/6281287622554" className="contact__button">
                    Write me
                    <i class="uil uil-arrow-right"></i>
                    </a>
                </div>
          </div>
        </div>
  </section>
  )
}

export default Contact