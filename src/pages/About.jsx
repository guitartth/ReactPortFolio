import React from 'react'

const About = () => {
    return (
        <main className="page">
            <h2>About Me</h2>
            <div className="page-content">
                <p>I grew up in small town Nebraska, where life was pretty basic. Meat and potatoes, Husker Football, and playing travel soccer and baseball with kids I grew up with. Those years taught me a lot about being a good teammate, something that has stuck with me since.</p>
                <img
                    src="/assets/imgs/about/CraigTTH.jpg"
                    alt="Craig performing on guitar with a metal band"
                    className="bio-photo bio-photo-left"
                />
                <p>Started playing guitar at 8, playing and singing country songs with my Dad. I got my first electric guitar when I was 13 and music kind of took over. I studied piano in college, played guitar in jazz band, and had a lot of fun playing the banjo around the bluegrass festival that my Grandmother put on every year. That path led me to Musicians Institute in Hollywood, CA, which is not something most kids from Nebraska can say. I put out a solo EP where I handled everything myself; I wrote, performed all instruments and vocals, engineered the recording, and even did the artwork for the case. After graduating, I spent my twenties playing in a heavy metal band, touring the country with some well known acts and living out of a van. That experience taught me not to take a single luxury in life for granted. While I mean that sincerely, I wouldn't trade those times for anything.</p>
                <p>Eventually, I traded the van for a management role, overseeing a chain of five convenience stores and gas stations, managing 40 plus employees and millions in revenue. Somewhere in the middle of all that I decided to go back to school and earned my Bachelor's Degree in Computer Science from Fort Hays State University in 2022; all online, while managing that operation, getting married, and having my daughter. It was a lot, but I got it done.</p>
                <img
                    src="/assets/imgs/about/CraigRaiders.jpg"
                    alt="Craig at a Raiders game"
                    className="bio-photo bio-photo-right bio-photo-tight"
                />
                <p>These days I work as a Technical Engineer in Las Vegas, doing elevated technical support, designing and developing custom features for clients, and database work, while expanding into data engineering. I live here with my wife and two kids, ages eight and three. Free time goes to my family, a new musical project that is so far unreleased, Magic the Gathering, and cheering on the Raiders, Huskers, and Golden Knights. Nebraska kid, Hollywood detour, life on the road, and now the desert.</p>
                <p>Every stop along the way shaped how I think and how I work, and I bring all of it to whatever I am doing next.</p>
                <img
                    src="/assets/imgs/about/CraigWedding.jpg"
                    alt="Craig and his wife on their wedding day"
                    className="bio-photo bio-photo-center"
                />
            </div>
        </main>
    )
}

export default About
