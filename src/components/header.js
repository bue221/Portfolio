import React from 'react'

import './styles/Header.css'

import Navbar from './Navbar'

const Header =  ()=>{

        return(
                <header className='header'>
                        <Navbar />
                        <div className='header-info'>
                                <div className='info-text'>
                                        <h1 className='header-title'>Hi!!</h1>
                                        <h1 className='header-subtitle'>I’m Andrés and I’m a systems engineer and Web developer!</h1>
                                        <a className='boton' href="#contact">
                                                Contact
                                        </a>
                                </div>
                        </div>
                </header>
                )
}

export default Header
