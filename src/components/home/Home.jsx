import React from 'react'
import './home.css'
import foto from '../../assets/picture/gambarrr.jpg'

const Home = () => {
  return (
   
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 id='name'>Gahtan Fadholi Imam.H</h1>
        <h2 id='rpl'>-Rekayasa Perangkat lunak-</h2>
        <section>
            <img className='fotoawl'  src={foto}/>
        </section>
        
        <br/><br/>
        <h2><marquee direction="right">Hello Welcome To My Website </marquee></h2>
        <br/>
        
        <p>HAII nama saya Gahtan Fadholi Imam Hasbillah, biasa di panggil Gahtan. Saya lahir Di Bekasi tanggal 24 Februari 2006.<br/>
            Saya siswa kelas XI SMKN 1 Kota Bekasi, Jurusan RPL rekayasa perangkat lunak."</p>

    </div>
  )
}

export default Home