import React from 'react'
import { Link } from 'react-router-dom'
import { IconUser, IconCode, IconThumbsUp, IconMail } from '../icons'

const Home = () => {
    return (
        <main className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-name">Craig Freeburg</h1>
                    <p className="hero-tagline">Technical Engineer. Musician.<br />Nebraska kid turned Vegas local.</p>
                    <p className="hero-desc">I build things, break things, and occasionally play blackjack against myself. Take a look around.</p>
                </div>
                <img src="/assets/imgs/about/CraigDustin.jpg" alt="Craig with Dustin Poirier" className="hero-photo" />
            </div>
            <div className="hero-links">
                <Link to="/about" className="hero-card">
                    <IconUser className="hero-card-icon" />
                    <span className="hero-card-title">About Me</span>
                    <span className="hero-card-sub">Nebraska to Vegas</span>
                </Link>
                <Link to="/projects" className="hero-card">
                    <IconCode className="hero-card-icon" />
                    <span className="hero-card-title">Projects</span>
                    <span className="hero-card-sub">Things I've built</span>
                </Link>
                <Link to="/recommends" className="hero-card">
                    <IconThumbsUp className="hero-card-icon" />
                    <span className="hero-card-title">Suggests</span>
                    <span className="hero-card-sub">Teams, tunes, bars</span>
                </Link>
                <Link to="/contact" className="hero-card">
                    <IconMail className="hero-card-icon" />
                    <span className="hero-card-title">Contact</span>
                    <span className="hero-card-sub">Say hello</span>
                </Link>
            </div>
        </main>
    )
}

export default Home
