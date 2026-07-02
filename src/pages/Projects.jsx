import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
    {
        name: 'Blackjack',
        blurb: "Built as a holding screen while I finished this website. Now that the site is done, it lives here. Play a few hands and see if you can beat my high score of 105!",
        image: '/assets/imgs/projects/Blackjack.JPG',
        url: '/blackjack',
    },
    {
        name: 'My Magic Binder',
        blurb: 'A web app to visualize and catalog your entire Magic: The Gathering collection, letting you view your collection as if all your cards were sitting in binders. Import your collection, request trades with other users, find cards you need from local players, and compare your deck lists to your collection.',
        image: '/assets/imgs/projects/MyMagicBinder.JPG',
        url: 'https://www.mymagicbinder.com',
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
                            <div className="project-row">
                                {linkedPhoto}
                                <p>{project.blurb}</p>
                            </div>
                        </section>
                    )
                })}
            </div>
        </main>
    )
}

export default Projects
