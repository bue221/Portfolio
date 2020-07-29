import React from 'react'
import { Link } from 'gatsby'

const items = ({ style })=>{
				
				const data = [
								{
												id: 1,
												url: '/',
												name: 'Home'
								},
								{
												id: 2,
												url: '#projects',
												name: 'Projects'
								},
								{
												id: 3,
												url: '#about',
												name: 'About'
								},
								{
												id:4,
												url: '#contact',
												name: 'Contact'
								}
				]

				//console.log(data)

				return(
							<React.Fragment>
								{data.map(i=>(
											<li key={i.id}>
															<Link to={i.url} className={style}>  {i.name} </Link>
											</li>
											))}
							</React.Fragment>
				)
}

export default items
