import React from 'react'
import {BrowserRouter, Routes, Route,NavLink} from 'react-router-dom'
import { About } from '../components/About'
function Navigation() {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <NavLink to =  '/'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink>

                    </NavLink>
                </li>
                <li>

                </li>
            </ul>
            <Routes>
                <Route path='/' element= {<Home/>}/>
                <Route path='about' element= {<About/>}/>
            </Routes>
        </BrowserRouter>
            
    )
}

export {Navigation}