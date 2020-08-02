import React,{ useState } from 'react'

import Items from './data/data'
import Name from './Name'

import './styles/Navbar.css'
import {Drawer,IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = ()=>{

        const [open, setOpen] = useState(false)

        return(
                <nav className='nav'>
                        <div className='Cname'>
                                <Name />
                        </div>
                        <ul className='nav-ul'>
                                <Items style='items'/>
                        </ul>
                        <div className='Menu' >
                                <IconButton onClick={()=>setOpen(true)} >
                                        <MenuIcon className='Menu-icon'/>
                                </IconButton>
                        </div>
                        <Drawer anchor='left' open={open} onClose={()=>setOpen(false)}>
                                <div>
                                        <Name />
                                        <ul className='re-ul'>
                                                <Items style='re-items'/>
                                        </ul>
                                </div>
                        </Drawer>
                </nav>
                );
}

export default Navbar
