import React from 'react'


const Header = () => {
    return (
        <header>
            <img src="/assets/imgs/CraigHeaderSW2.png" height="150px" className="craig_header_img" alt="Craig Cartoon Face"></img>
            <nav id="nav">
                <a href="google.com"><button className="nav_btn" id="me_nav_btn" >Me</button></a>
                <a href="google.com"><button className="nav_btn" id="projects_nav_btn" >Projects</button></a>
                <a href="google.com"><button className="nav_btn" id="find_me_nav_btn" >Find Me</button></a>
                <a href="google.com"><button className="nav_btn" id="contact_nav_btn" >Contact</button></a>
            </nav>
        </header>
    )
}

export default Header
