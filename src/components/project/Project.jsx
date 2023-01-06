import React from 'react'
import './project.css'
import project1 from '../../assets/picture/gamarrr-removebg-preview.png'
import project2 from '../../assets/picture/daftar kelas 10.png'
import project3 from '../../assets/picture/tugasprofil kelas10.png'
import project4 from '../../assets/picture/dashbrot.png'



const project = () => {
  return (

    <div>
    <br/>
    <br/>
    <br/>
        <h1 id='projek'>Project</h1>
    <br/>
    <br/>
    <br/>
    <div id="produk">
        <div class="container">
            <h3>MY Project</h3>
            <br/>
            <div class="card">
                <h5>Login Kelas10</h5>
                <div class="img-box">
                    <img
                    src={project1}
                    alt="gambar tidak dapat ditampilkan"
                    class="gambar-card"/>
                    <div class="spek">
                        <div class="judul">Spesifikasi</div>
                       <ul class="isi">
                        <li>Bahasa Html</li>
                        <li>Bahasa CSS</li>
                        <li>Bahasa JavaScript</li>
                       </ul>
                    </div>
                </div>
                <p>
                Web ini dibuat tanggal 30-03-2021 menggunakan Html dan 
                di desain menggunakan css.
                </p>
            </div>
            <div class="card">
                <h5>Daftar Kelas10</h5>
                <div class="img-box">
                    <img
                    src={project2}
                    class="gambar-card"
                    />
                    <div class="spek">
                        <div class="judul">Spesifikasi</div>
                            <ul class="isi">
                                <li>satu</li>
                                <li>satu</li>
                                <li>satu</li>
                            </ul>
                    </div>
                </div>
                <p>
                Web ini dibuat tanggal 05-04-2021 menggunakan Html dan 
                di desain menggunakan css.
                </p>
            </div>
            <div class="card">
                <h5>Profil Kelas10</h5>
                <div class="img-box">
                    <img
                    src={project3}
                    class="gambar-card"
                    />
                    <div class="spek">
                        <div class="judul">Spesifikasi</div>
                            <ul class="isi">
                                <li>satu</li>
                                <li>satu</li>
                                <li>satu</li>
                            </ul>
                    </div>
                </div>
                <p>
                Web ini dibuat 23-03-2021 menggunakan Html dan 
                di desain menggunakan css.
                </p>
            </div>

            <div class="card">
                <h5>Profil kelas11</h5>
                <div class="img-box">
                    <img
                    src={project4}
                    class="gambar-card"
                    />
                    <div class="spek">
                        <div class="judul">Spesifikasi</div>
                            <ul class="isi">
                                <li>satu</li>
                                <li>satu</li>
                                <li>satu</li>
                            </ul>
                    </div>
                </div>
                <p>
                Web ini dibuat 05-09-2022 menggunakan Html dan 
                di desain menggunakan css.
                </p>
            </div>
    </div>
    </div>
    </div>
  )
}

export default project