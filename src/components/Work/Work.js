import React from 'react';
import Tile from './Tile/Tile';
import './work.css'

const Work = () => {
    return (
        <section className="container">
            <div className="page-container">
                <div className="content-container">
                    <div className="background-font animate__animated animate__fadeIn">
                        <h1 className="work"> work </h1>
                    </div>
                    <div className="work-container animate__animated animate__fadeIn">
                        <div className="column-grid">
                            <div className="grid-item">
                                <Tile />
                            </div>
                            <div className="grid-item">
                                <Tile />
                            </div>
                            <div className="grid-item">
                                <Tile />
                            </div>
                            {/* <div className="grid-item">
                                <Tile />
                            </div>
                            <div className="grid-item">
                                <Tile />
                            </div>
                            <div className="grid-item">
                                <Tile />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;