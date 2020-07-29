import React from 'react'
import { Link } from 'gatsby'

import './styles/Name.css'
import img from '../img/logo.png' 

const Name = ()=>{
				
				return(
								<Link to='/' className='link-logo'>
												<img src={img} alt="logo" className='logo' />
												<p className='name' >Andrés Plaza</p>
								</Link>

								);
}

export default Name
