import React from 'react'
import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) => 'nav_btn' + (isActive ? ' nav_btn_active' : '')

const Header = () => {
    return (
        <header>
            <img src="/assets/imgs/CraigHeader.png" height="200px" className="craig_header_img" alt="Craig Cartoon Face"></img>
            <div id="nav_wrap">
            <nav id="nav">
                <NavLink to="/about" className={navLinkClass} id="me_nav_btn">A<br/>B<br/>O<br/>U<br/>T<br/> <br/>M<br/>E</NavLink>
                <NavLink to="/projects" className={navLinkClass} id="projects_nav_btn">P<br/>R<br/>O<br/>J<br/>E<br/>C<br/>T<br/>S</NavLink>
                <NavLink to="/contact" className={navLinkClass} id="contact_nav_btn">C<br/>O<br/>N<br/>T<br/>A<br/>C<br/>T</NavLink>
            </nav>
            </div>
        </header>
    )
}

export default Header
