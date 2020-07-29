import React from 'react'

import img from '../img/about.svg'
import './styles/About.css'

const About = ()=>{

				return(
								<div className='div1' id='about'>
												<img src={img} alt="about" className='svg' />
												<div className='div2'>
												<h1 className='div2-title'>More about me</h1>
												<p className='div2-text'>
																I am a student of computer engineering and frontend developer with knowledge
																of javascript, react, graphql gatsby and python django, tkinter and mysql just like C.
												</p>
												</div>
								</div>
				);
}

export default About
