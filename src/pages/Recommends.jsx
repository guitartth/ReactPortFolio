import React from 'react'

const recommendations = [
    {
        name: 'Raiders',
        blurb: 'Just Win Baby',
        image: '/assets/imgs/suggests/Raiders.JPG',
        url: 'https://www.raiders.com',
    },
    {
        name: 'ZZ Top',
        blurb: "Billy Gibbons is my hero and I've loved ZZ Top forever.",
        image: '/assets/imgs/suggests/ZZTop.JPG',
        url: 'https://www.zztop.com',
    },
    {
        name: 'Herbs & Rye',
        blurb: 'My pick in Las Vegas when you need a good steak and an even better drink.',
        image: '/assets/imgs/suggests/HerbsRye.JPG',
        url: 'https://www.herbsandrye.com',
    },
    {
        name: 'Huskers',
        blurb: 'Go Big Red',
        image: '/assets/imgs/suggests/Huskers.JPG',
        url: 'https://www.huskers.com',
    },
    {
        name: 'Coheed & Cambria',
        blurb: 'Claudio and the boys have been infallible for decades.',
        image: '/assets/imgs/suggests/CoheedCambria.JPG',
        url: 'https://www.coheedandcambria.com',
    },
    {
        name: 'The Golden Tiki',
        blurb: 'When you positively need your drink to be on fire.',
        image: '/assets/imgs/suggests/GoldenTiki.JPG',
        url: 'https://www.thegoldentiki.com',
    },
    {
        name: 'Golden Knights',
        blurb: 'Go Knights Go',
        image: '/assets/imgs/suggests/VGK.JPG',
        url: 'https://www.nhl.com/goldenknights/',
    },
]

const Recommends = () => {
    return (
        <main className="page">
            <h2 className="suggests-heading">Suggests</h2>
            <div className="page-content">
                {recommendations.map((rec, index) => {
                    const photo = rec.image ? (
                        <img src={rec.image} alt={`${rec.name} screenshot`} className="project-photo" />
                    ) : (
                        <div className="project-photo project-photo-placeholder">Screenshot coming soon</div>
                    )

                    const linkedPhoto = rec.url ? (
                        <a href={rec.url} target="_blank" rel="noreferrer">
                            {photo}
                        </a>
                    ) : (
                        photo
                    )

                    const rowClass = 'suggest-row' + (index % 2 === 1 ? ' suggest-row-reverse' : '')

                    return (
                        <section className="suggest-block" key={rec.name}>
                            <h3>{rec.name}</h3>
                            <div className={rowClass}>
                                {linkedPhoto}
                                <p>{rec.blurb}</p>
                            </div>
                        </section>
                    )
                })}
            </div>
        </main>
    )
}

export default Recommends
