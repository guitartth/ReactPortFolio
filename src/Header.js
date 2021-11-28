import React from 'react'
//import Button from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <img src="/assets/imgs/CraigHeader.png" height="200px" className="craig_header_img" alt="Craig Cartoon Face"></img>
            <nav id="nav">
                <button className="nav_btn" id="me_nav_btn" disabled="disabled">M<br/>E</button>
                <button className="nav_btn" id="projects_nav_btn" disabled="disabled">P<br/>R<br/>O<br/>J<br/>E<br/>C<br/>T<br/>S</button>
                <button className="nav_btn" id="find_me_nav_btn" disabled="disabled">F<br/>I<br/>N<br/>D<br/> <br/>M<br/>E</button>
                <button className="nav_btn" id="contact_nav_btn" disabled="disabled">C<br/>O<br/>N<br/>T<br/>A<br/>C<br/>T</button>
            </nav>
        </header>
    )
}

export default Header
