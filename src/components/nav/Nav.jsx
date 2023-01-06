import React from 'react'
import './nav.css'
import ig from '../../assets/picture/instagram.png';
import linkedin from '../../assets/picture/images-removebg-preview.png'
import github from '../../assets/picture/github-removebg-preview.png'

const Nav = () => {
    return (
        <div className="navbar">
            <ul className='nav-link'>
                <li>
                    <a href="#name">Profil</a>
                </li>
                <li>
                    <a href="tentang.html#ebot">About</a>
                    <div class="drop">
                        <a href="tentang.html#Hobi">Hobi</a>
                        <a href="tentang.html#Skill">Skill</a>
                        <a href="tentang.html#Pendidikan">Riwayat pendidikan</a>
                        <a href="tentang.html#Organisasi">Riwayat Organisasi</a>
                    </div>
                </li>
                <li>
                    <a href="#projek">Project</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
                  <div class="search-box">
        <input type="text" placeholder="Search.."/>
        <i class="las la-search"></i>       
      </div>
            <ul className="socmed">
                <li>
                    <a target="_blank" href="https://www.instagram.com/ghtn_fdhli/">
                        <img src={ig} width="25px" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/gahtan-fadholi-imam-hasbillah-52a745246/">
                        <img src={linkedin} width="25px" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.github.com/gahtanf/">
                        <img src={github} width="25px" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Nav