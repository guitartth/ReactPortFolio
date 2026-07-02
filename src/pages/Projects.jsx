import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
    {
        name: 'Blackjack',
        blurb: "I built this blackjack game as something fun for visitors to play while the site itself wasn't finished yet. Now that the site is done, the game has moved off the homepage and lives on its own page instead.",
        image: '/assets/imgs/projects/Blackjack.JPG',
        url: '/blackjack',
    },
]

const Projects = () => {
    return (
        <main className="page">
            <h2>Projects</h2>
            <div className="page-content">
                {projects.map((project) => {
                    const photo = project.image ? (
                        <img src={project.image} alt={`${project.name} screenshot`} className="project-photo" />
                    ) : (
                        <div className="project-photo project-photo-placeholder">Screenshot coming soon</div>
                    )

                    const isExternal = project.url && project.url.startsWith('http')

                    let linkedPhoto = photo
                    if (project.url && isExternal) {
                        linkedPhoto = (
                            <a href={project.url} target="_blank" rel="noreferrer">
                                {photo}
                            </a>
                        )
                    } else if (project.url) {
                        linkedPhoto = <Link to={project.url}>{photo}</Link>
                    }

                    return (
                        <section className="project-block" key={project.name}>
                            <h3>{project.name}</h3>
                            {linkedPhoto}
                            <p>{project.blurb}</p>
                        </section>
                    )
                })}
            </div>
        </main>
    )
}

export default Projects
