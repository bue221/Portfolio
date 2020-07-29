import React from 'react';
import { Helmet } from "react-helmet"


import styled from 'styled-components'

import Footer from '../Footer'
import img from '../../img/header.jpg'



const Layout = ({children})=>{

				const Main = styled.header`
					background-image: url(${img});
					background-attachment: fixed;
					background-size: cover;
					margin: -.5rem;
				`

				return(
								<Main>
												<Helmet>
																<meta charSet="utf-8" />
																<title>Andrés Camilo Plaza</title>
																<link rel="canonical" href="http://mysite.com/example" />
												</Helmet>
												<div>
																{children}
												</div>
												<Footer/>
								</Main>
								);
}

export default Layout;
