import React from 'react'
import './About.css'
import hobi from '../../assets/picture/gambar3-removebg-preview.png'
import skill from '../../assets/picture/sikil-removebg-preview.png'
import sertifikat from '../../assets/picture/sertifikat.png'


const about = () => {
    return (

    <div>
        <br/>
        <br/>
    <h1 id='ebot'>About me</h1>
    <br/>
    <dl>
        <br/>
        <h3>Nama Lengkap</h3>
             <dd class="tentang">Gahtan Fadholi Imam.H</dd><br/>
        <h3>Tempat Tanggal Lahir</h3>
             <dd class="tentang">Bekasi. 24 Februari 2006</dd><br/>
        <h3>Gender</h3>
             <dd class="tentang">Laki-Laki</dd><br/>
        <h3>Alamat</h3>
             <dd class="tentang">JL.swadaya kp.dua, Jakasampurna, Bekasi Barat</dd><br/>
    </dl>

   <br/><br/>
    <h3 id="Hobi">Hobi</h3>
    <br/>
    <table border="1" cellspacing="0" cellpading="0" class="table">
    <tr>
<td rowspan="3">
    <section>       
        <img src={hobi}/>
    </section>
 
</td>
<td rowspan="3">
<ul class="list-hobi">
    <li class="riding">🛵Riding</li>
    <li class="pilem">📽️Nonton Film</li>
    <li class="raket">🏸Bermain Badminton</li>
</ul>
</td>
</tr>
    </table>

    <br/><br/>
    <h3 id="Skill">SKILL</h3>
    <br/>
    <table border="1" cellspacing="0" cellpading="0" class="table">
        <tr>
    <td rowspan="3">
    <section>       
        <img src={skill}/>
    </section>
    </td>
    <td rowspan="3">
    <div class="skill-box">
         <span class="title">HTML</span>    
             <div class="skill-bar">
                 <span class="skill-per html">
            </span>
          </div>
    </div>
    <br/>
    <div class="skill-box">
         <span class="title">CSS</span>    
             <div class="skill-bar">
                 <span class="skill-per css">
            </span>
          </div>
    </div>
    <br/>
    <div class="skill-box">
         <span class="title">JAVA</span>    
             <div class="skill-bar">
                 <span class="skill-per java">
            </span>
          </div>
    </div>
    </td>
    </tr>
        </table>
    
        <br/><br/>
        
    <h3 id="serti">Certificate</h3>
    <br/>
    <table border="1" cellspacing="0" cellpading="0" class="table">
        <tr>
    <td rowspan="3">
    <section>       
        <img className='serti' src={sertifikat}/>
    </section>
    </td>
    <td rowspan="3">
    <ul class="sertifikat">
        <p>Java Fundamentals
        <br/>
          Oracle Academy</p>
    </ul>
    </td>
    </tr>
        </table>

    <br/><br/>
    <h3 id="Pendidikan">Riwayat Pendidikan</h3><br/>
    <table border="1" cellspacing="0" cellpadding="0" class="table">
        <tr class="judul-table">
        <th>NO</th>
        <th>Jenjang</th>
        <th>Nama Instansi</th>
        <th>Tahun masuk</th>
        <th>Tahun Lulus</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Sekolah Dasar</td>
        <td>SDN Jakasampurna 3</td>
        <td>2012/2013</td>
        <td>2018/2019</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Sekolah Menengah Pertama</td>
        <td>SMP Martia Bhakti</td>
        <td>2018/2019</td>
        <td>2020/2021</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Sekolah Menengah Kejuruan</td>
        <td>SMKN 1 Kota Bekasi</td>
        <td>2021</td>
        <td>-</td>
    </tr>

    </table>

    <br/><br/>
    <h3 id="Organisasi">Riwayat Organisasi</h3><br/>
    <table border="1" cellspacing="0" cellpadding="0" class="table">
       <tr>
        <th>No</th>
        <th>Nama Organisasi</th>
        <th>Jabatan</th>
        <th>Tahun aktif</th>
       </tr>
       <tr>
        <td>1</td>
        <td>Karang Taruna</td>
        <td>Anggota</td>
        <td>2022</td>
       </tr>
    </table>
</div>
  )
}

export default about