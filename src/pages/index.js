import React from "react"

import Layout from '../components/layout/layout'
import Header from '../components/header'
import Project from '../components/Projects'
import About from '../components/About'
import Contact from '../components/Email'

const Home = ()=>{
				return(
								<Layout>
												<Header />
												<Project />
												<About />
												<Contact />
								</Layout>
				);
}

export default Home;
