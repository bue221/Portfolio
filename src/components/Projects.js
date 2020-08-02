import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import './styles/Projects.css'

const Proyect = ()=>{

        const data = useStaticQuery(graphql`
                query{
                  P:allContentfulProjects{
                    edges{
                      node{
                        id
                        name
                        website
                        repositorio
                        img{
                          title
                          file{
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
                                {data.P.edges.map(({node})=>(
                                <div className='item' key={node.id}>
                                        <h1>{node.name}</h1>
                                        <img src={node.img.file.url} alt={node.img.title} className='img'/>
                                        <div>
                                                <a href={node.repositorio} className='boton' target='_blank' rel="noreferrer" >Repositories</a>
                                                {node.website ? <a href={node.website} className='boton' target='_blank' rel="noreferrer" >Website</a>: <p>No existe</p> }
                                        </div>
                                </div>
                                ))}
                        </div>
                </div>
                );
}

export default Proyect
