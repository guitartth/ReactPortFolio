import React from 'react'
//import Button from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <img src="/assets/imgs/CraigHeader.png" height="150px" className="craig_header_img" alt="Craig Cartoon Face"></img>
            <nav id="nav">
                <button className="nav_btn" id="me_nav_btn" disabled="disabled">m<br/>e</button>
                <button className="nav_btn" id="projects_nav_btn" disabled="disabled">p<br/>r<br/>o<br/>j<br/>e<br/>c<br/>t<br/>s</button>
                <button className="nav_btn" id="find_me_nav_btn" disabled="disabled">f<br/>i<br/>n<br/>d<br/> <br/>m<br/>e</button>
                <button className="nav_btn" id="contact_nav_btn" disabled="disabled">c<br/>o<br/>n<br/>t<br/>a<br/>c<br/>t</button>
            </nav>
        </header>
    )
}

export default Header
