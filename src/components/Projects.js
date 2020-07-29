import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import './styles/Projects.css'

const Proyect = ()=>{

				const data = useStaticQuery(graphql`
				query MyQuery {
							github {
									viewer {
											repositories(first: 8, orderBy: {field: STARGAZERS, direction: DESC}) {
													edges {
														node {
															id
															createdAt
															name
															description
															owner {
																login
																}
																url
															}
														}
													}
												}
											}
										}
								`)

				return(
								<div className='projects' id='projects'>
												<h1>Projects</h1>
												<div className='projects-items'>
																{data.github.viewer.repositories.edges.map(({node})=>(
																<a href={node.url} target="_blank" className='item' key={node.id} rel="noreferrer">
																				<p className='projects-name'>{node.name}</p>
																				<p className='projects-des'>{node.description}</p>
																				<p className='projects-login'>{node.owner.login}</p>
																</a>
																))}
												</div>
								</div>
								);
}

export default Proyect
