import React from 'react';

import Name from './Name'

import './styles/Footer.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = ()=>{
	
				return(
								<footer className='footer'>
											<div className='div1' >
												<p className='div1-text'>
													© All rights are reserved | 2020 | Andrés Camilo plaza Jiménez
												</p>
												<div  className='div-icons'>
															<a href='https://github.com/bue221/' target='_blank' rel="noreferrer">
																			<GitHubIcon className='icono'/>
															</a>
															<a href="https://twitter.com/bue221/" target='_blank' rel="noreferrer">
																			<TwitterIcon className='icono'/>
															</a>
												</div>
												<div className='Cname'>
																<Name />
												</div>
											</div>
								</footer>
				);
}

export default Footer;
