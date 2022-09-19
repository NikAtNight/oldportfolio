import React from 'react';
import Tile from './Tile/Tile';
import './work.css'
import works from './work.json'
//Old Portfolio



const Work = () => {
    const mappedWork = works && works.map((work, index) => {
        return (
            <div className="grid-item" key={index}>
                <Tile
                    title={work.title}
                    url={work.url}
                    desc={work.desc}
                    langs={work.langs}
                />
            </div>
        )
    })

    return (
        <section className="container">
            <div className="page-container">
                <div className="content-container">
                    <div className="background-font animate__animated animate__fadeIn">
                        <h1 className="work"> work </h1>
                    </div>
                    <div className="work-container animate__animated animate__fadeIn">
                        <div className="column-grid">
                            {mappedWork}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;